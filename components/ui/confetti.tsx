"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface ConfettiPiece {
  id: number
  x: number
  y: number
  rotation: number
  color: string
  size: number
}

export function Confetti() {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([])

  useEffect(() => {
    const colors = ["#3B82F6", "#EF4444", "#10B981", "#F59E0B", "#8B5CF6", "#EC4899"]
    const newPieces: ConfettiPiece[] = []

    for (let i = 0; i < 50; i++) {
      newPieces.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -10,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
      })
    }

    setPieces(newPieces)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute"
          style={{
            backgroundColor: piece.color,
            width: piece.size,
            height: piece.size,
          }}
          initial={{
            x: piece.x,
            y: piece.y,
            rotate: piece.rotation,
          }}
          animate={{
            y: window.innerHeight + 100,
            rotate: piece.rotation + 360,
          }}
          transition={{
            duration: Math.random() * 2 + 2,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}
