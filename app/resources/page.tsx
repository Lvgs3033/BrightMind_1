"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Video, ExternalLink, Heart, Brain, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function ResourcesPage() {
  const books = [
    {
      title: "Feeling Good: The New Mood Therapy",
      author: "David D. Burns, M.D.",
      category: "Depression",
      description:
        "The classic guide to cognitive behavioral therapy techniques for overcoming depression and anxiety.",
      rating: 4.8,
      link: "https://www.amazon.com/Feeling-Good-New-Mood-Therapy/dp/0380810336",
    },
    {
      title: "The Anxiety and Worry Workbook",
      author: "David A. Clark, Ph.D.",
      category: "Anxiety",
      description: "Practical cognitive behavioral strategies for managing anxiety and excessive worry.",
      rating: 4.6,
      link: "https://www.amazon.com/Anxiety-Worry-Workbook-Cognitive-Behavioral/dp/1606235117",
    },
    {
      title: "Mind Over Mood",
      author: "Dennis Greenberger & Christine A. Padesky",
      category: "General",
      description: "Change how you feel by changing the way you think - a comprehensive CBT workbook.",
      rating: 4.7,
      link: "https://www.amazon.com/Mind-Over-Mood-Second-Depression/dp/1462520421",
    },
    {
      title: "The Mindful Way Through Depression",
      author: "Mark Williams, John Teasdale, Zindel Segal, Jon Kabat-Zinn",
      category: "Mindfulness",
      description: "Freeing yourself from chronic unhappiness through mindfulness-based cognitive therapy.",
      rating: 4.5,
      link: "https://www.amazon.com/Mindful-Way-through-Depression-Unhappiness/dp/1593851286",
    },
  ]

  const videos = [
    {
      title: "10-Minute Meditation for Anxiety",
      channel: "Headspace",
      category: "Meditation",
      description: "Guided meditation specifically designed to reduce anxiety and promote calm.",
      duration: "10:32",
      views: "2.1M",
      link: "https://www.youtube.com/watch?v=ZToicYcHIOU",
    },
    {
      title: "CBT Techniques for Depression",
      channel: "Therapy in a Nutshell",
      category: "Education",
      description: "Learn practical cognitive behavioral therapy techniques you can use daily.",
      duration: "15:45",
      views: "1.8M",
      link: "https://www.youtube.com/watch?v=0ViaCs0k2jM",
    },
    {
      title: "Breathing Exercises for Panic Attacks",
      channel: "Psych2Go",
      category: "Coping Skills",
      description: "Quick and effective breathing techniques to manage panic attacks and anxiety.",
      duration: "8:20",
      views: "950K",
      link: "https://www.youtube.com/watch?v=tEmt1Znux58",
    },
    {
      title: "Understanding Depression: Symptoms and Treatment",
      channel: "Mayo Clinic",
      category: "Education",
      description: "Comprehensive overview of depression from medical professionals.",
      duration: "12:15",
      views: "1.2M",
      link: "https://www.youtube.com/watch?v=z-IR48Mb3W0",
    },
  ]

  const apps = [
    {
      name: "Headspace",
      category: "Meditation",
      description: "Guided meditation and mindfulness exercises for stress reduction and better sleep.",
      platform: "iOS, Android, Web",
      price: "Free with premium options",
    },
    {
      name: "Calm",
      category: "Sleep & Relaxation",
      description: "Sleep stories, meditation, and relaxation techniques for better mental health.",
      platform: "iOS, Android, Web",
      price: "Free with premium options",
    },
    {
      name: "Sanvello",
      category: "Anxiety & Depression",
      description: "Mood tracking, coping toolbox, and guided lessons for anxiety and depression.",
      platform: "iOS, Android",
      price: "Free with premium options",
    },
    {
      name: "Youper",
      category: "AI Therapy",
      description: "AI-powered emotional health assistant that provides personalized support.",
      platform: "iOS, Android",
      price: "Free with premium options",
    },
  ]

  const hotlines = [
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      description: "24/7 crisis support for people in suicidal crisis or emotional distress.",
      availability: "24/7",
    },
    {
      name: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "Free, 24/7 support for people in crisis via text message.",
      availability: "24/7",
    },
    {
      name: "SAMHSA National Helpline",
      number: "1-800-662-4357",
      description: "Treatment referral and information service for mental health and substance abuse.",
      availability: "24/7",
    },
    {
      name: "National Alliance on Mental Illness",
      number: "1-800-950-6264",
      description: "Support, education, and advocacy for individuals and families affected by mental illness.",
      availability: "Mon-Fri 10am-10pm ET",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Mental Health Resources</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Curated collection of books, videos, apps, and support services to help you on your mental health journey
            </p>
          </div>

          {/* Crisis Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="shadow-lg border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
              <CardHeader>
                <CardTitle className="flex items-center text-red-800 dark:text-red-200">
                  <Phone className="h-6 w-6 mr-2" />
                  Crisis Support - Available 24/7
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {hotlines.map((hotline, index) => (
                    <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{hotline.name}</h4>
                      <p className="text-lg font-bold text-red-600 dark:text-red-400 mb-2">{hotline.number}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{hotline.description}</p>
                      <Badge variant="outline" className="text-xs">
                        {hotline.availability}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Books Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <BookOpen className="h-8 w-8 mr-3 text-blue-600" />
              Recommended Books
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {books.map((book, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="shadow-lg hover:shadow-xl transition-shadow h-full">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary">{book.category}</Badge>
                        <div className="flex items-center">
                          <span className="text-yellow-500 mr-1">★</span>
                          <span className="text-sm font-medium">{book.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{book.title}</CardTitle>
                      <p className="text-sm text-gray-600 dark:text-gray-400">by {book.author}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{book.description}</p>
                      <Button asChild className="w-full">
                        <a href={book.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View on Amazon
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Videos Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <Video className="h-8 w-8 mr-3 text-red-600" />
              Educational Videos
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {videos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                >
                  <Card className="shadow-lg hover:shadow-xl transition-shadow h-full">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary">{video.category}</Badge>
                        <div className="text-sm text-gray-500">{video.duration}</div>
                      </div>
                      <CardTitle className="text-lg">{video.title}</CardTitle>
                      <p className="text-sm text-gray-600 dark:text-gray-400">by {video.channel}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">{video.description}</p>
                      <p className="text-sm text-gray-500 mb-4">{video.views} views</p>
                      <Button asChild className="w-full bg-transparent" variant="outline">
                        <a href={video.link} target="_blank" rel="noopener noreferrer">
                          <Video className="h-4 w-4 mr-2" />
                          Watch on YouTube
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Apps Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <Brain className="h-8 w-8 mr-3 text-purple-600" />
              Mental Health Apps
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {apps.map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                >
                  <Card className="shadow-lg hover:shadow-xl transition-shadow h-full">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary">{app.category}</Badge>
                        <Badge variant="outline">{app.price}</Badge>
                      </div>
                      <CardTitle className="text-lg">{app.name}</CardTitle>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{app.platform}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300">{app.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <Card className="shadow-lg bg-gradient-to-r from-green-600 to-teal-600 text-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Heart className="h-8 w-8 mr-3" />
                  Professional Support
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Find a Therapist</h3>
                    <ul className="space-y-2 text-green-100">
                      <li>• Psychology Today Therapist Directory</li>
                      <li>• SAMHSA Treatment Locator</li>
                      <li>• Your insurance provider's directory</li>
                      <li>• Community mental health centers</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Online Therapy Platforms</h3>
                    <ul className="space-y-2 text-green-100">
                      <li>• BetterHelp - Licensed therapists online</li>
                      <li>• Talkspace - Text and video therapy</li>
                      <li>• MDLIVE - Mental health professionals</li>
                      <li>• Amwell - Telehealth therapy sessions</li>
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
