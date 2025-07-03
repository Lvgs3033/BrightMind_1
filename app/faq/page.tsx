"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, Search, HelpCircle, Shield, Users, Zap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openItems, setOpenItems] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Questions", icon: HelpCircle },
    { id: "general", name: "General", icon: Users },
    { id: "privacy", name: "Privacy & Security", icon: Shield },
    { id: "features", name: "Features", icon: Zap },
  ]

  const faqs = [
    {
      id: 1,
      category: "general",
      question: "What is BrightMind and how can it help me?",
      answer:
        "BrightMind is a comprehensive mental health support platform that provides evidence-based assessments, personalized resources, stress relief activities, and connections to professional help. Our platform is designed to support your mental wellness journey with tools for anxiety, depression, and general mental health maintenance.",
    },
    {
      id: 2,
      category: "general",
      question: "Is BrightMind a replacement for therapy or professional treatment?",
      answer:
        "No, BrightMind is not a replacement for professional mental health treatment. We provide supportive tools and resources that complement professional care. If you're experiencing severe symptoms or crisis situations, we strongly encourage you to seek immediate professional help or contact emergency services.",
    },
    {
      id: 3,
      category: "features",
      question: "How accurate are the mental health assessments?",
      answer:
        "Our assessments are based on validated screening tools used in clinical settings, such as the PHQ-9 for depression and GAD-7 for anxiety. While these are reliable screening instruments, they are not diagnostic tools. Results should be discussed with a qualified mental health professional for proper evaluation and diagnosis.",
    },
    {
      id: 4,
      category: "privacy",
      question: "How is my mental health data protected?",
      answer:
        "We use industry-leading security measures including end-to-end encryption, HIPAA-compliant protocols, and secure data centers. Your mental health information is never sold to third parties, and we only share data with your explicit consent or in emergency situations where safety is at risk.",
    },
    {
      id: 5,
      category: "features",
      question: "What types of stress relief games are available?",
      answer:
        "We offer several evidence-based stress relief activities including guided breathing exercises (4-7-8 technique), memory matching games for focus improvement, and color therapy sessions. These activities are designed to provide immediate stress relief and help develop coping skills.",
    },
    {
      id: 6,
      category: "general",
      question: "Is BrightMind free to use?",
      answer:
        "Yes, BrightMind's core features are completely free, including mental health assessments, basic resources, stress relief games, and AI chat support. We believe mental health support should be accessible to everyone regardless of financial circumstances.",
    },
    {
      id: 7,
      category: "features",
      question: "How does the AI chatbot work?",
      answer:
        "Our AI chatbot provides immediate support and resources based on your input. It can recognize crisis situations, provide coping strategies, and connect you with appropriate resources. However, it's not a replacement for human professional support and has limitations in complex situations.",
    },
    {
      id: 8,
      category: "privacy",
      question: "Can I delete my account and data?",
      answer:
        "Yes, you have complete control over your data. You can delete your account and all associated data at any time through your profile settings or by contacting our support team. Some anonymized data may be retained for research purposes as outlined in our Privacy Policy.",
    },
    {
      id: 9,
      category: "general",
      question: "What should I do in a mental health crisis?",
      answer:
        "If you're experiencing thoughts of self-harm or suicide, please seek immediate help: Call 988 (National Suicide Prevention Lifeline), text HOME to 741741 (Crisis Text Line), or contact emergency services (911). BrightMind's crisis resources page also provides additional emergency contacts.",
    },
    {
      id: 10,
      category: "features",
      question: "How often should I take the mental health assessments?",
      answer:
        "We recommend taking assessments every 2-4 weeks to track your progress, or whenever you notice significant changes in your mood or mental state. Regular monitoring can help you and your healthcare providers understand patterns and adjust treatment approaches.",
    },
    {
      id: 11,
      category: "general",
      question: "Can family members or friends use my account?",
      answer:
        "Each person should have their own individual account for privacy and accuracy reasons. Mental health assessments and recommendations are personalized, and sharing accounts could compromise the effectiveness of the tools and your privacy.",
    },
    {
      id: 12,
      category: "privacy",
      question: "Do you share data with insurance companies?",
      answer:
        "No, we never share your personal mental health data with insurance companies or employers without your explicit written consent. Your privacy is protected, and we comply with all relevant privacy laws including HIPAA, GDPR, and CCPA.",
    },
  ]

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Find answers to common questions about BrightMind and mental health support
            </p>
          </div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search questions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>

                  {/* Category Filter */}
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Badge
                        key={category.id}
                        variant={selectedCategory === category.id ? "default" : "outline"}
                        className="cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900"
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        <category.icon className="h-3 w-3 mr-1" />
                        {category.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            <AnimatePresence>
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader className="cursor-pointer" onClick={() => toggleItem(faq.id)}>
                      <CardTitle className="flex items-center justify-between">
                        <span className="text-left pr-4">{faq.question}</span>
                        {openItems.includes(faq.id) ? (
                          <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        )}
                      </CardTitle>
                    </CardHeader>
                    <AnimatePresence>
                      {openItems.includes(faq.id) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CardContent className="pt-0">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                          </CardContent>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No Results */}
          {filteredFAQs.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Try adjusting your search terms or category filter
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Contact Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <Card className="shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
                <p className="text-blue-100 mb-6">
                  Our support team is here to help you 24/7. Don't hesitate to reach out.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="text-center">
                    <div className="font-semibold">Email Support</div>
                    <div className="text-blue-100">support@brightmind.com</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">Crisis Support</div>
                    <div className="text-blue-100">Call 988 or Text HOME to 741741</div>
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
