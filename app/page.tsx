"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Brain, Heart, Users, BookOpen, MessageCircle, ArrowRight, CheckCircle, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { Modal } from "@/components/ui/modal"
import { Confetti } from "@/components/ui/confetti"

const questions = [
  {
    id: 1,
    text: "Over the last 2 weeks, how often have you been bothered by feeling down, depressed, or hopeless?",
    category: "depression",
  },
  {
    id: 2,
    text: "Over the last 2 weeks, how often have you had little interest or pleasure in doing things?",
    category: "depression",
  },
  {
    id: 3,
    text: "Over the last 2 weeks, how often have you been bothered by trouble falling or staying asleep?",
    category: "depression",
  },
  {
    id: 4,
    text: "Over the last 2 weeks, how often have you been bothered by feeling nervous, anxious, or on edge?",
    category: "anxiety",
  },
  {
    id: 5,
    text: "Over the last 2 weeks, how often have you been bothered by not being able to stop or control worrying?",
    category: "anxiety",
  },
  {
    id: 6,
    text: "Over the last 2 weeks, how often have you been bothered by worrying too much about different things?",
    category: "anxiety",
  },
  {
    id: 7,
    text: "Over the last 2 weeks, how often have you been bothered by trouble relaxing?",
    category: "anxiety",
  },
  {
    id: 8,
    text: "Over the last 2 weeks, how often have you been bothered by feeling tired or having little energy?",
    category: "depression",
  },
  {
    id: 9,
    text: "Over the last 2 weeks, how often have you been bothered by feeling afraid as if something awful might happen?",
    category: "anxiety",
  },
]

const answerOptions = [
  { value: 0, label: "Not at all" },
  { value: 1, label: "Several days" },
  { value: 2, label: "More than half the days" },
  { value: 3, label: "Nearly every day" },
]

export default function HomePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showAssessment, setShowAssessment] = useState(false)
  const [showWelcomeModal, setShowWelcomeModal] = useState(false)
  const [showCompletionModal, setShowCompletionModal] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleStartAssessment = () => {
    setShowWelcomeModal(true)
  }

  const handleWelcomeConfirm = () => {
    setShowWelcomeModal(false)
    setShowAssessment(true)
    setCurrentQuestion(0)
    setAnswers([])
  }

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = value
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handleSubmit = () => {
    if (answers.length === questions.length && !answers.includes(undefined)) {
      // Calculate scores
      const depressionQuestions = questions.filter((q) => q.category === "depression")
      const anxietyQuestions = questions.filter((q) => q.category === "anxiety")

      const depressionScore = depressionQuestions.reduce((sum, q) => {
        const answerIndex = questions.findIndex((question) => question.id === q.id)
        return sum + (answers[answerIndex] || 0)
      }, 0)

      const anxietyScore = anxietyQuestions.reduce((sum, q) => {
        const answerIndex = questions.findIndex((question) => question.id === q.id)
        return sum + (answers[answerIndex] || 0)
      }, 0)

      // Store results in localStorage
      const results = {
        depressionScore,
        anxietyScore,
        totalQuestions: questions.length,
        completedAt: new Date().toISOString(),
        answers: answers,
      }

      localStorage.setItem("assessmentResults", JSON.stringify(results))

      // Show completion modal
      setShowCompletionModal(true)
      setShowConfetti(true)

      // Hide confetti after 3 seconds
      setTimeout(() => setShowConfetti(false), 3000)

      // Redirect to results after 3 seconds
      setTimeout(() => {
        setShowCompletionModal(false)
        router.push("/results")
      }, 3000)
    } else {
      toast({
        title: "Incomplete Assessment",
        description: "Please answer all questions before submitting.",
        variant: "destructive",
      })
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100
  const isLastQuestion = currentQuestion === questions.length - 1
  const canSubmit = answers.length === questions.length && !answers.includes(undefined)

  if (showAssessment) {
    return (
      <>
        {showConfetti && <Confetti />}

        {/* Welcome Modal */}
        <Modal isOpen={showWelcomeModal} onClose={() => setShowWelcomeModal(false)}>
          <div className="text-center p-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="mx-auto mb-4"
            >
              <Brain className="h-16 w-16 text-blue-600" />
            </motion.div>
            <h2 className="text-2xl font-bold mb-4">Welcome to Your Mental Health Assessment</h2>
            <p className="text-gray-600 mb-6">
              This assessment will help us understand your current mental health status. It takes about 5 minutes to
              complete and your responses are completely confidential.
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => setShowWelcomeModal(false)} variant="outline">
                Cancel
              </Button>
              <Button onClick={handleWelcomeConfirm}>Start Assessment</Button>
            </div>
          </div>
        </Modal>

        {/* Completion Modal */}
        <Modal isOpen={showCompletionModal} onClose={() => {}}>
          <div className="text-center p-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="mx-auto mb-4"
            >
              <CheckCircle className="h-16 w-16 text-green-600" />
            </motion.div>
            <h2 className="text-2xl font-bold mb-4">Assessment Complete!</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-yellow-500" />
              <p className="text-gray-600">Analyzing your responses...</p>
              <Sparkles className="h-5 w-5 text-yellow-500" />
            </div>
            <p className="text-sm text-gray-500">Redirecting to your results...</p>
          </div>
        </Modal>

        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Mental Health Assessment</h1>
                  <Badge variant="outline">
                    Question {currentQuestion + 1} of {questions.length}
                  </Badge>
                </div>
                <Progress value={progress} className="w-full" />
              </div>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{questions[currentQuestion].text}</CardTitle>
                  <CardDescription>Please select the option that best describes your experience.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {answerOptions.map((option) => (
                    <motion.div key={option.value} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        variant={answers[currentQuestion] === option.value ? "default" : "outline"}
                        className="w-full justify-start text-left h-auto p-4"
                        onClick={() => handleAnswer(option.value)}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-4 h-4 rounded-full border-2 ${
                              answers[currentQuestion] === option.value
                                ? "bg-blue-600 border-blue-600"
                                : "border-gray-300"
                            }`}
                          >
                            {answers[currentQuestion] === option.value && (
                              <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5" />
                            )}
                          </div>
                          <span>{option.label}</span>
                        </div>
                      </Button>
                    </motion.div>
                  ))}

                  {isLastQuestion && canSubmit && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="pt-6 border-t"
                    >
                      <Button onClick={handleSubmit} className="w-full" size="lg">
                        Complete Assessment
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Your Mental Health{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Matters
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Take control of your mental wellness with our comprehensive assessment tools, personalized resources, and
              supportive community. Start your journey to better mental health today.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="text-lg px-8 py-4" onClick={handleStartAssessment}>
                Start Your Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Mental Health Support
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our platform offers evidence-based tools and resources to help you understand and improve your mental
              health.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Mental Health Assessment",
                description:
                  "Take our comprehensive assessment to understand your current mental health status and get personalized recommendations.",
                color: "text-blue-600",
              },
              {
                icon: Heart,
                title: "Stress Relief Games",
                description:
                  "Engage with interactive games designed to reduce stress, anxiety, and promote relaxation and mindfulness.",
                color: "text-red-500",
              },
              {
                icon: Users,
                title: "Community Support",
                description:
                  "Connect with others on similar journeys, share experiences, and find support in our safe community space.",
                color: "text-green-600",
              },
              {
                icon: BookOpen,
                title: "Educational Resources",
                description:
                  "Access curated articles, videos, and guides about mental health, coping strategies, and wellness tips.",
                color: "text-purple-600",
              },
              {
                icon: MessageCircle,
                title: "24/7 AI Support",
                description:
                  "Get immediate support and guidance through our AI-powered chatbot, available whenever you need it.",
                color: "text-orange-600",
              },
              {
                icon: CheckCircle,
                title: "Progress Tracking",
                description:
                  "Monitor your mental health journey with detailed analytics and insights about your progress over time.",
                color: "text-teal-600",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <feature.icon className={`h-12 w-12 ${feature.color} mb-4`} />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Take the First Step?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Your mental health journey starts with understanding where you are today. Take our assessment and get
              personalized insights.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4" onClick={handleStartAssessment}>
                Begin Assessment Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
