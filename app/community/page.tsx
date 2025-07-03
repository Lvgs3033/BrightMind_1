"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, MessageCircle, Heart, Calendar, MapPin, Star } from "lucide-react"
import { motion } from "framer-motion"

export default function CommunityPage() {
  const supportGroups = [
    {
      id: 1,
      name: "Anxiety Support Circle",
      description: "A safe space to share experiences and coping strategies for managing anxiety.",
      members: 1247,
      category: "Anxiety",
      meetingTime: "Tuesdays 7:00 PM EST",
      format: "Virtual",
      moderator: "Dr. Sarah Johnson"
    },
    {
      id: 2,
      name: "Depression Recovery Group",
      description: "Supporting each other through the journey of depression recovery and healing.",
      members: 892,
      category: "Depression",
      meetingTime: "Thursdays 6:30 PM EST",
      format: "Virtual",
      moderator: "Dr. Michael Chen"
    },
    {
      id: 3,
      name: "Young Adults Mental Health",
      description: "Peer support for young adults (18-25) navigating mental health challenges.",
      members: 634,
      category: "Young Adults",
      meetingTime: "Sundays 4:00 PM EST",
      format: "Virtual",
      moderator: "Alex Thompson, LCSW"
    },
    {
      id: 4,
      name: "Mindfulness & Meditation",
      description: "Practice mindfulness together and learn meditation techniques for mental wellness.",
      members: 1156,
      category: "Mindfulness",
      meetingTime: "Saturdays 10:00 AM EST",
      format: "Virtual",
      moderator: "Dr. Emily Rodriguez"
    }
  ]

  const recentPosts = [
    {
      id: 1,
      author: "Sarah M.",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "2 hours ago",
      content: "Had a really tough day with anxiety, but I used the breathing techniques we discussed last week and it really helped. Thank you all for the support! 💙",
      likes: 12,
      replies: 5,
      group: "Anxiety Support Circle"
    },
    {
      id: 2,
      author: "Mike R.",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "4 hours ago",
      content: "Celebrating 30 days of consistent self-care routine! Small steps really do make a difference. Keep going everyone! 🌟",
      likes: 28,
      replies: 8,
      group: "Depression Recovery Group"
    },
    {
      id: 3,
      author: "Emma L.",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "6 hours ago",
      content: "Does anyone have tips for managing work stress? Starting my first job next week and feeling overwhelmed.",
      likes: 7,
      replies: 12,
      group: "Young Adults Mental Health"
    }
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Mental Health Awareness Workshop",
      date: "December 20, 2024",
      time: "2:00 PM - 4:00 PM EST",
      type: "Workshop",
      presenter: "Dr. Sarah Johnson",
      description: "Learn about recognizing mental health signs and supporting loved ones."
    },
    {
      id: 2,
      title: "Guided Meditation Session",
      date: "December 22, 2024",
      time: "7:00 PM - 8:00 PM EST",
      type: "Meditation",
      presenter: "Dr. Emily Rodriguez",
      description: "Join us for a calming guided meditation session to end the week peacefully."
    },
    {
      id: 3,
      title: "Coping Strategies Q&A",
      date: "December 25, 2024",
      time: "3:00 PM - 4:30 PM EST",
      type: "Q&A Session",
      presenter: "Dr. Michael Chen",
      description: "Ask questions about coping strategies and get expert advice."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Community Support
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Connect with others who understand your journey. Join support groups, share experiences, and find strength in community.
            </p>
          </div>

          {/* Community Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">4,000+</div>
                    <div className="text-blue-100">Community Members</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">12</div>
                    <div className="text-blue-100">Support Groups</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">150+</div>
                    <div className="text-blue-100">Weekly Sessions</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-blue-100">Peer Support</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Support Groups */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Users className="h-6 w-6 mr-2" />
                  Support Groups
                </h2>
                <div className="space-y-6">
                  {supportGroups.map((group, index) => (
                    <motion.div
                      key={group.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    >
                      <Card className="shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                          <div className="flex justify-between items-start mb-2">
                            <Badge variant="secondary">{group.category}</Badge>
                            <div className="flex items-center text-sm text-gray-500">
                              <Users className="h-4 w-4 mr-1" />
                              {group.members} members
                            </div>
                          </div>
                          <CardTitle className="text-lg">{group.name}</CardTitle>
                          <p className="text-gray-600 dark:text-gray-300">{group.description}</p>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-4">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2" />
                              {group.meetingTime}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              {group.format}
                            </div>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 mr-2" />
                              Moderated by {group.moderator}
                            </div>
                          </div>
                          <Button className="w-full">Join Group</Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Recent Community Posts */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <MessageCircle className="h-6 w-6 mr-2" />
                  Recent Community Posts
                </h2>
                <div className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                    >
                      <Card className="shadow-lg">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <Avatar>
                              <AvatarImage src={post.avatar || "/placeholder.svg"} />
                              <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <div>
                                  <span className="font-semibold">{post.author}</span>
                                  <span className="text-sm text-gray-500 ml-2">{post.time}</span>
                                </div>
                                <Badge variant="outline" className="text-xs">
                                  {post.group}
                                </Badge>
                              </div>
                              <p className="text-gray-700 dark:text-gray-300 mb-3">
                                {post.content}
                              </p>
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <button className="flex items-center hover:text-red-500 transition-colors">
                                  <Heart className="h-4 w-4 mr-1" />
                                  {post.likes}
                                </button>
                                <button className="flex items-center hover:text-blue-500 transition-colors">
                                  <MessageCircle className="h-4 w-4 mr-1" />
                                  {post.replies}
                                </button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-6"\
