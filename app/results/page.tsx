"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Video, Phone, MessageCircle, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

interface AssessmentResults {
  depression: number
  anxiety: number
  timestamp: string
}

const books = [
  {
    title: "Feeling Good: The New Mood Therapy",
    author: "David D. Burns",
    description: "A classic guide to cognitive behavioral therapy techniques",
    link: "https://www.amazon.com/Feeling-Good-New-Mood-Therapy/dp/0380810336",
  },
  {
    title: "The Anxiety and Worry Workbook",
    author: "David A. Clark",
    description: "Practical strategies for managing anxiety and worry",
    link: "https://www.amazon.com/Anxiety-Worry-Workbook-Cognitive-Behavioral/dp/1606235117",
  },
  {
    title: "Mind Over Mood",
    author: "Dennis Greenberger",
    description: "Change how you feel by changing the way you think",
    link: "https://www.amazon.com/Mind-Over-Mood-Second-Depression/dp/1462520421",
  },
]

const videos = [
  {
    title: "10-Minute Meditation for Anxiety",
    channel: "Headspace",
    description: "Guided meditation to reduce anxiety and stress",
    link: "https://www.youtube.com/watch?v=ZToicYcHIOU",
  },
  {
    title: "CBT Techniques for Depression",
    channel: "Therapy in a Nutshell",
    description: "Learn cognitive behavioral therapy techniques",
    link: "https://www.youtube.com/watch?v=0ViaCs0k2jM",
  },
  {
    title: "Breathing Exercises for Panic Attacks",
    channel: "Psych2Go",
    description: "Quick techniques to manage panic and anxiety",
    link: "https://www.youtube.com/watch?v=tEmt1Znux58",
  },
]

export default function ResultsPage() {
  const [results, setResults] = useState<AssessmentResults | null>(null)
  const [showRecommendations, setShowRecommendations] = useState(false)

  useEffect(() => {
    const savedResults = localStorage.getItem("assessmentResults")
    if (savedResults) {
      setResults(JSON.parse(savedResults))
      setTimeout(() => setShowRecommendations(true), 1000)
    }
  }, [])

  if (!results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-6 text-center">
            <p>No assessment results found. Please take the assessment first.</p>
            <Button asChild className="mt-4">
              <Link href="/">Take Assessment</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const getDepressionLevel = (score: number) => {
    if (score <= 4) return { level: "Minimal", color: "bg-green-500", severity: "low" }
    if (score <= 9) return { level: "Mild", color: "bg-yellow-500", severity: "mild" }
    if (score <= 14) return { level: "Moderate", color: "bg-orange-500", severity: "moderate" }
    return { level: "Severe", color: "bg-red-500", severity: "high" }
  }

  const getAnxietyLevel = (score: number) => {
    if (score <= 4) return { level: "Minimal", color: "bg-green-500", severity: "low" }
    if (score <= 9) return { level: "Mild", color: "bg-yellow-500", severity: "mild" }
    if (score <= 14) return { level: "Moderate", color: "bg-orange-500", severity: "moderate" }
    return { level: "Severe", color: "bg-red-500", severity: "high" }
  }

  const depressionLevel = getDepressionLevel(results.depression)
  const anxietyLevel = getAnxietyLevel(results.anxiety)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Your Assessment Results</h1>

          {/* Results Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Depression Level
                    <Badge variant="secondary" className={`${depressionLevel.color} text-white`}>
                      {depressionLevel.level}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Score: {results.depression}/24</span>
                      <span>{Math.round((results.depression / 24) * 100)}%</span>
                    </div>
                    <Progress value={(results.depression / 24) * 100} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Anxiety Level
                    <Badge variant="secondary" className={`${anxietyLevel.color} text-white`}>
                      {anxietyLevel.level}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Score: {results.anxiety}/24</span>
                      <span>{Math.round((results.anxiety / 24) * 100)}%</span>
                    </div>
                    <Progress value={(results.anxiety / 24) * 100} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Recommendations */}
          {showRecommendations && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Immediate Actions */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Immediate Actions</CardTitle>
                  <CardDescription>Based on your results, here are some immediate steps you can take</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {(depressionLevel.severity === "high" || anxietyLevel.severity === "high") && (
                      <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                        <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Seek Professional Help</h4>
                        <p className="text-red-700 dark:text-red-300 mb-3">
                          Your scores indicate severe symptoms. Please consider contacting a mental health professional.
                        </p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" asChild>
                            <Link href="/contact">
                              <Phone className="h-4 w-4 mr-2" />
                              Find Help
                            </Link>
                          </Button>
                          <Button size="sm" variant="outline">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Crisis Hotline: 988
                          </Button>
                        </div>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Try Relaxation Games</h4>
                        <p className="text-blue-700 dark:text-blue-300 mb-3">
                          Engage in stress-reducing activities and games
                        </p>
                        <Button size="sm" variant="outline" asChild>
                          <Link href="/games">Play Games</Link>
                        </Button>
                      </div>

                      <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                        <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Chat with AI Support</h4>
                        <p className="text-green-700 dark:text-green-300 mb-3">
                          Get immediate support and coping strategies
                        </p>
                        <Button size="sm" variant="outline">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Start Chat
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recommended Books */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Recommended Books
                  </CardTitle>
                  <CardDescription>
                    Evidence-based books to help you understand and manage your mental health
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {books.map((book, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start justify-between p-4 border rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div className="flex-1">
                          <h4 className="font-semibold">{book.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">by {book.author}</p>
                          <p className="text-sm mt-1">{book.description}</p>
                        </div>
                        <Button size="sm" variant="outline" asChild>
                          <a href={book.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recommended Videos */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Video className="h-5 w-5 mr-2" />
                    Helpful Videos
                  </CardTitle>
                  <CardDescription>
                    Educational and therapeutic videos to support your mental health journey
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {videos.map((video, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start justify-between p-4 border rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div className="flex-1">
                          <h4 className="font-semibold">{video.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">by {video.channel}</p>
                          <p className="text-sm mt-1">{video.description}</p>
                        </div>
                        <Button size="sm" variant="outline" asChild>
                          <a href={video.link} target="_blank" rel="noopener noreferrer">
                            <Video className="h-4 w-4" />
                          </a>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Continue Your Journey</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild>
                      <Link href="/">Retake Assessment</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/register">Create Account</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/contact">Get Professional Help</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
