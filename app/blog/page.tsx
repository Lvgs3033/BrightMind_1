"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowRight, Heart, Brain, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: "Understanding the Connection Between Physical and Mental Health",
    excerpt:
      "Discover how your physical health directly impacts your mental wellbeing and learn practical strategies to improve both simultaneously.",
    author: "Dr. Sarah Johnson",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Wellness",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  }

  const blogPosts = [
    {
      id: 2,
      title: "5 Evidence-Based Techniques for Managing Anxiety",
      excerpt:
        "Learn practical, scientifically-backed methods to reduce anxiety and regain control of your daily life.",
      author: "Dr. Michael Chen",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Anxiety",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "The Science of Sleep and Mental Health",
      excerpt:
        "Explore the crucial relationship between quality sleep and mental wellness, plus tips for better sleep hygiene.",
      author: "Dr. Emily Rodriguez",
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "Sleep",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      title: "Building Resilience: Bouncing Back from Life's Challenges",
      excerpt:
        "Discover how to develop mental resilience and cope effectively with stress, setbacks, and unexpected changes.",
      author: "Dr. Sarah Johnson",
      date: "December 8, 2024",
      readTime: "9 min read",
      category: "Resilience",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 5,
      title: "Mindfulness in Daily Life: Simple Practices for Better Mental Health",
      excerpt:
        "Learn how to incorporate mindfulness into your routine with easy, practical exercises that fit any schedule.",
      author: "David Kim",
      date: "December 5, 2024",
      readTime: "5 min read",
      category: "Mindfulness",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 6,
      title: "Breaking the Stigma: Talking About Mental Health",
      excerpt:
        "How to have meaningful conversations about mental health and create supportive environments for everyone.",
      author: "Dr. Emily Rodriguez",
      date: "December 3, 2024",
      readTime: "6 min read",
      category: "Awareness",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 7,
      title: "The Role of Nutrition in Mental Wellness",
      excerpt:
        "Understand how your diet affects your mood and mental health, with practical nutrition tips for better wellbeing.",
      author: "Dr. Michael Chen",
      date: "December 1, 2024",
      readTime: "8 min read",
      category: "Nutrition",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const categories = [
    { name: "All", count: 12, icon: Brain },
    { name: "Anxiety", count: 3, icon: Heart },
    { name: "Depression", count: 4, icon: Brain },
    { name: "Wellness", count: 2, icon: Lightbulb },
    { name: "Mindfulness", count: 2, icon: Heart },
    { name: "Sleep", count: 1, icon: Brain },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Mental Health Blog</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Expert insights, practical tips, and evidence-based information to support your mental health journey
            </p>
          </div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="mb-4 bg-blue-600">{featuredPost.category}</Badge>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button asChild>
                    <Link href={`/blog/${featuredPost.id}`}>
                      Read Full Article
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-1"
            >
              <Card className="shadow-lg sticky top-8">
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      >
                        <Button
                          variant="ghost"
                          className="w-full justify-between hover:bg-blue-50 dark:hover:bg-blue-900/20"
                        >
                          <div className="flex items-center">
                            <category.icon className="h-4 w-4 mr-2" />
                            {category.name}
                          </div>
                          <Badge variant="secondary">{category.count}</Badge>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <Card className="shadow-lg hover:shadow-xl transition-shadow h-full">
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <Badge variant="secondary" className="w-fit mb-2">
                          {post.category}
                        </Badge>
                        <CardTitle className="text-lg hover:text-blue-600 transition-colors">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                          <User className="h-3 w-3 mr-1" />
                          <span className="mr-3">{post.author}</span>
                          <Calendar className="h-3 w-3 mr-1" />
                          <span className="mr-3">{post.date}</span>
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/blog/${post.id}`}>
                            Read More
                            <ArrowRight className="h-3 w-3 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Load More */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-center mt-12"
              >
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-16"
          >
            <Card className="shadow-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
                <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                  Get the latest mental health insights, tips, and resources delivered to your inbox. Join our community
                  of people committed to better mental wellness.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
                  />
                  <Button className="bg-white text-purple-600 hover:bg-gray-100">Subscribe</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
