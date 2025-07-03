"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Clock, AlertCircle, Heart, Upload } from "lucide-react"
import { motion } from "framer-motion"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })
  const [attachment, setAttachment] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value)
      })

      if (attachment) {
        formDataToSend.append("attachment", attachment)
      }

      const response = await fetch("http://localhost:3020/api/contact", {
        method: "POST",
        body: formDataToSend,
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: "Message Sent Successfully!",
          description: result.message,
        })
        // Reset form
        setFormData({ name: "", company: "", email: "", phone: "", message: "" })
        setAttachment(null)
        // Reset file input
        const fileInput = document.getElementById("attachment") as HTMLInputElement
        if (fileInput) fileInput.value = ""
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error submitting contact form:", error)
      toast({
        title: "Connection Error",
        description: "Unable to send message. Please check if the server is running on http://localhost:3020",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setAttachment(file)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get Professional Help</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Connect with mental health professionals and crisis support services. You don't have to face this alone.
            </p>
          </div>

          {/* Crisis Alert */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <Card className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
                      Crisis Support Available 24/7
                    </h3>
                    <p className="text-red-700 dark:text-red-300 mb-4">
                      If you're having thoughts of self-harm or suicide, please reach out immediately:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span className="font-semibold">Crisis Text Line: Text HOME to 741741</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span className="font-semibold">National Suicide Prevention Lifeline: 988</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Request Professional Support</CardTitle>
                  <CardDescription>
                    Fill out this form and we'll connect you with appropriate mental health resources
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your company or organization"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Share what you're going through and what kind of help you're looking for..."
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="attachment">Attachment (Optional)</Label>
                      <div className="flex items-center space-x-2">
                        <Input
                          id="attachment"
                          type="file"
                          onChange={handleFileChange}
                          className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                        <Upload className="h-4 w-4 text-gray-400" />
                      </div>
                      {attachment && <p className="text-sm text-gray-600 mt-1">Selected: {attachment.name}</p>}
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Request"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information & Resources */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Contact Info */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-red-500" />
                    BrightMind Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Support Line</p>
                      <p className="text-gray-600 dark:text-gray-400">(555) 123-MIND</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Email Support</p>
                      <p className="text-gray-600 dark:text-gray-400">support@brightmind.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-gray-600 dark:text-gray-400">Within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Local Resources */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Find Local Help</CardTitle>
                  <CardDescription>Professional mental health services in your area</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Psychology Today</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Find therapists, psychiatrists, and support groups near you
                    </p>
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://www.psychologytoday.com" target="_blank" rel="noopener noreferrer">
                        Find Therapists
                      </a>
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">SAMHSA Treatment Locator</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Government resource for finding treatment facilities
                    </p>
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://findtreatment.samhsa.gov" target="_blank" rel="noopener noreferrer">
                        Find Treatment
                      </a>
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Crisis Text Line</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Free, 24/7 support via text message</p>
                    <Button size="sm" variant="outline">
                      Text HOME to 741741
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Insurance & Payment */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Payment & Insurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <p>• Most insurance plans cover mental health services</p>
                    <p>• Many therapists offer sliding scale fees</p>
                    <p>• Employee Assistance Programs (EAP) often provide free sessions</p>
                    <p>• Community mental health centers offer low-cost options</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
