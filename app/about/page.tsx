"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Shield, Award, Target, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Clinical Psychologist",
      description: "15+ years in mental health research and therapy",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Michael Chen",
      role: "Technology Director",
      description: "Expert in healthcare technology and AI applications",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Psychiatrist",
      description: "Specialist in anxiety and depression treatment",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "David Kim",
      role: "UX Designer",
      description: "Focused on accessible and inclusive design",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Compassion First",
      description:
        "Every feature is designed with empathy and understanding for those struggling with mental health challenges.",
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description:
        "Your mental health data is sacred. We use industry-leading security measures to protect your information.",
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description: "Mental health affects everyone. We create a welcoming space for all backgrounds and experiences.",
    },
    {
      icon: Award,
      title: "Evidence-Based",
      description: "All our tools and resources are grounded in scientific research and clinical best practices.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About BrightMind</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to make mental health support accessible, personalized, and effective for everyone. Our
              platform combines cutting-edge technology with evidence-based therapeutic approaches.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="shadow-lg h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-6 w-6 mr-2 text-blue-600" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    To democratize mental health support by providing accessible, evidence-based tools and resources
                    that empower individuals to understand, manage, and improve their mental wellbeing. We believe
                    everyone deserves quality mental health support, regardless of their location or circumstances.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="shadow-lg h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lightbulb className="h-6 w-6 mr-2 text-yellow-600" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    A world where mental health support is as accessible as physical healthcare, where stigma is
                    eliminated, and where every person has the tools and resources they need to thrive mentally and
                    emotionally. We envision a future where seeking help is seen as a sign of strength.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Our Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <Card className="shadow-lg hover:shadow-xl transition-shadow h-full">
                    <CardHeader className="text-center">
                      <value.icon className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                      <CardTitle className="text-lg">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-16"
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Our Story</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    BrightMind was born from a simple yet powerful realization: mental health support shouldn't be a
                    luxury available only to a few. Our founders, a team of mental health professionals and technology
                    experts, witnessed firsthand the barriers that prevent people from accessing the help they need.
                  </p>
                  <p>
                    In 2023, we set out to bridge this gap by creating a platform that combines the latest in
                    psychological research with intuitive technology. We wanted to create something that could provide
                    immediate support while also connecting people with professional resources when needed.
                  </p>
                  <p>
                    Today, BrightMind serves thousands of users worldwide, providing personalized mental health
                    assessments, evidence-based coping tools, and connections to professional support. But we're just
                    getting started. Every day, we work to expand our reach and improve our platform based on user
                    feedback and the latest research.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                >
                  <Card className="shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 text-center">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                      />
                      <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                      <Badge variant="secondary" className="mb-3">
                        {member.role}
                      </Badge>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{member.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <Card className="shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-center mb-8">Our Impact</h2>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">50K+</div>
                    <div className="text-blue-100">Users Supported</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">1M+</div>
                    <div className="text-blue-100">Assessments Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-blue-100">Support Available</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">95%</div>
                    <div className="text-blue-100">User Satisfaction</div>
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
