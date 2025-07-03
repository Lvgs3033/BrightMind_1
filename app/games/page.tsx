"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, RotateCcw, Gamepad2, Wind, Puzzle, Heart } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const BreathingExercise = () => {
  const [isActive, setIsActive] = useState(false)
  const [phase, setPhase] = useState<"inhale" | "hold" | "exhale">("inhale")
  const [count, setCount] = useState(0)
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isActive) {
      interval = setInterval(() => {
        setCount((prev) => {
          if (phase === "inhale" && prev >= 4) {
            setPhase("hold")
            return 0
          } else if (phase === "hold" && prev >= 7) {
            setPhase("exhale")
            return 0
          } else if (phase === "exhale" && prev >= 8) {
            setPhase("inhale")
            setCycle((c) => c + 1)
            return 0
          }
          return prev + 1
        })
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isActive, phase])

  const reset = () => {
    setIsActive(false)
    setPhase("inhale")
    setCount(0)
    setCycle(0)
  }

  const getPhaseText = () => {
    switch (phase) {
      case "inhale":
        return "Breathe In"
      case "hold":
        return "Hold"
      case "exhale":
        return "Breathe Out"
    }
  }

  const getMaxCount = () => {
    switch (phase) {
      case "inhale":
        return 4
      case "hold":
        return 7
      case "exhale":
        return 8
    }
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Wind className="h-5 w-5 mr-2" />
          4-7-8 Breathing Exercise
        </CardTitle>
        <CardDescription>A calming breathing technique to reduce anxiety and stress</CardDescription>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        <motion.div
          animate={{
            scale: phase === "inhale" ? 1.2 : phase === "hold" ? 1.1 : 0.8,
            backgroundColor: phase === "inhale" ? "#3b82f6" : phase === "hold" ? "#f59e0b" : "#10b981",
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-32 h-32 rounded-full mx-auto flex items-center justify-center text-white font-bold text-xl"
        >
          {count + 1}
        </motion.div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">{getPhaseText()}</h3>
          <Progress value={(count / getMaxCount()) * 100} className="w-full max-w-xs mx-auto" />
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Cycle {cycle + 1} • {count + 1}/{getMaxCount()}
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <Button onClick={() => setIsActive(!isActive)}>
            {isActive ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
            {isActive ? "Pause" : "Start"}
          </Button>
          <Button variant="outline" onClick={reset}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>

        {cycle >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg"
          >
            <p className="text-green-800 dark:text-green-200 font-semibold">
              Great job! You've completed 3 breathing cycles. How do you feel?
            </p>
          </motion.div>
        )}
      </CardContent>
    </Card>
  )
}

const MemoryGame = () => {
  const [cards, setCards] = useState<number[]>([])
  const [flipped, setFlipped] = useState<number[]>([])
  const [matched, setMatched] = useState<number[]>([])
  const [moves, setMoves] = useState(0)
  const [gameWon, setGameWon] = useState(false)

  const emojis = ["🌸", "🌺", "🌻", "🌷", "🌹", "🌼", "🍀", "🌿"]

  useEffect(() => {
    initializeGame()
  }, [])

  const initializeGame = () => {
    const shuffledCards = [...emojis, ...emojis].sort(() => Math.random() - 0.5).map((emoji, index) => index)
    setCards(shuffledCards)
    setFlipped([])
    setMatched([])
    setMoves(0)
    setGameWon(false)
  }

  const handleCardClick = (index: number) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) {
      return
    }

    const newFlipped = [...flipped, index]
    setFlipped(newFlipped)

    if (newFlipped.length === 2) {
      setMoves(moves + 1)
      const [first, second] = newFlipped
      const firstEmoji = emojis[cards[first] % emojis.length]
      const secondEmoji = emojis[cards[second] % emojis.length]

      if (firstEmoji === secondEmoji) {
        setMatched([...matched, first, second])
        setFlipped([])

        if (matched.length + 2 === cards.length) {
          setGameWon(true)
        }
      } else {
        setTimeout(() => setFlipped([]), 1000)
      }
    }
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Puzzle className="h-5 w-5 mr-2" />
          Memory Match Game
        </CardTitle>
        <CardDescription>Match pairs of cards to improve focus and reduce stress</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <Badge variant="outline">Moves: {moves}</Badge>
            <Badge variant="outline">
              Matched: {matched.length / 2}/{emojis.length}
            </Badge>
          </div>
          <Button variant="outline" onClick={initializeGame}>
            <RotateCcw className="h-4 w-4 mr-2" />
            New Game
          </Button>
        </div>

        <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto">
          {cards.map((cardIndex, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                aspect-square rounded-lg border-2 cursor-pointer flex items-center justify-center text-2xl
                ${
                  flipped.includes(index) || matched.includes(index)
                    ? "bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700"
                    : "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700"
                }
                ${matched.includes(index) ? "opacity-75" : ""}
              `}
              onClick={() => handleCardClick(index)}
            >
              {(flipped.includes(index) || matched.includes(index)) && (
                <motion.span initial={{ rotateY: 180 }} animate={{ rotateY: 0 }} transition={{ duration: 0.3 }}>
                  {emojis[cardIndex % emojis.length]}
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {gameWon && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center"
            >
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">🎉 Congratulations!</h3>
              <p className="text-green-700 dark:text-green-300">
                You completed the game in {moves} moves! Great job focusing and staying calm.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}

const ColorTherapy = () => {
  const [selectedColor, setSelectedColor] = useState("#3b82f6")
  const [isAnimating, setIsAnimating] = useState(false)

  const colors = [
    { color: "#3b82f6", name: "Calm Blue", emotion: "Peace & Tranquility" },
    { color: "#10b981", name: "Healing Green", emotion: "Balance & Growth" },
    { color: "#f59e0b", name: "Warm Yellow", emotion: "Joy & Optimism" },
    { color: "#8b5cf6", name: "Spiritual Purple", emotion: "Wisdom & Creativity" },
    { color: "#ef4444", name: "Energizing Red", emotion: "Strength & Passion" },
    { color: "#06b6d4", name: "Refreshing Cyan", emotion: "Clarity & Focus" },
  ]

  const startAnimation = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 3000)
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Heart className="h-5 w-5 mr-2" />
          Color Therapy
        </CardTitle>
        <CardDescription>Use colors to influence your mood and emotional state</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <motion.div
          animate={{
            backgroundColor: selectedColor,
            scale: isAnimating ? [1, 1.1, 1] : 1,
          }}
          transition={{
            backgroundColor: { duration: 0.5 },
            scale: { duration: 3, repeat: isAnimating ? Number.POSITIVE_INFINITY : 0 },
          }}
          className="w-48 h-48 rounded-full mx-auto shadow-lg"
        />

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">{colors.find((c) => c.color === selectedColor)?.name}</h3>
          <p className="text-gray-600 dark:text-gray-400">{colors.find((c) => c.color === selectedColor)?.emotion}</p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {colors.map((colorOption) => (
            <motion.button
              key={colorOption.color}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`
                w-16 h-16 rounded-full border-4 mx-auto
                ${
                  selectedColor === colorOption.color
                    ? "border-gray-800 dark:border-gray-200"
                    : "border-gray-300 dark:border-gray-600"
                }
              `}
              style={{ backgroundColor: colorOption.color }}
              onClick={() => setSelectedColor(colorOption.color)}
            />
          ))}
        </div>

        <div className="text-center">
          <Button onClick={startAnimation} disabled={isAnimating}>
            {isAnimating ? "Breathing..." : "Start Color Breathing"}
          </Button>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Focus on the color and breathe deeply for 3 minutes
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Stress Relief Games</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Interactive activities designed to help you relax, focus, and reduce anxiety. Take a break and give your
              mind some peaceful moments.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <BreathingExercise />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ColorTherapy />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <MemoryGame />
          </motion.div>

          {/* Tips Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gamepad2 className="h-5 w-5 mr-2" />
                  Tips for Maximum Benefit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Breathing Exercise</h4>
                    <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• Find a quiet, comfortable space</li>
                      <li>• Sit or lie down with your back straight</li>
                      <li>• Focus only on your breathing</li>
                      <li>• Practice daily for best results</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Memory Game</h4>
                    <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• Take your time, don't rush</li>
                      <li>• Focus on the present moment</li>
                      <li>• Celebrate small victories</li>
                      <li>• Use it as a mindfulness exercise</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
