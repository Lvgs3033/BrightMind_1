"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, UserCheck, Database, Globe } from "lucide-react"
import { motion } from "framer-motion"

export default function PrivacyPage() {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Assessment responses and mental health screening data",
        "Account information (name, email, age range)",
        "Usage data and interaction patterns with our platform",
        "Device information and technical data for security purposes",
        "Communication records when you contact our support team",
      ],
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: [
        "Provide personalized mental health assessments and recommendations",
        "Connect you with appropriate resources and professional help",
        "Improve our platform and develop new features",
        "Send important updates about your account and our services",
        "Ensure platform security and prevent misuse",
      ],
    },
    {
      icon: Shield,
      title: "Data Protection & Security",
      content: [
        "End-to-end encryption for all sensitive mental health data",
        "HIPAA-compliant security measures and protocols",
        "Regular security audits and vulnerability assessments",
        "Secure data centers with 24/7 monitoring",
        "Multi-factor authentication and access controls",
      ],
    },
    {
      icon: Eye,
      title: "Information Sharing",
      content: [
        "We never sell your personal information to third parties",
        "Mental health data is only shared with your explicit consent",
        "Anonymous, aggregated data may be used for research purposes",
        "Legal compliance may require disclosure in specific circumstances",
        "Emergency situations where immediate safety is at risk",
      ],
    },
    {
      icon: UserCheck,
      title: "Your Rights & Controls",
      content: [
        "Access and download all your personal data",
        "Correct or update your information at any time",
        "Delete your account and all associated data",
        "Opt-out of non-essential communications",
        "Request data portability to another service",
      ],
    },
    {
      icon: Globe,
      title: "International Users",
      content: [
        "GDPR compliance for European Union users",
        "CCPA compliance for California residents",
        "Data localization options for specific regions",
        "Cross-border data transfer protections",
        "Local privacy law compliance where applicable",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              Your privacy and mental health data security are our top priorities
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: December 2024</p>
          </div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  At BrightMind, we understand that mental health information is deeply personal and sensitive. This
                  Privacy Policy explains how we collect, use, protect, and share your information when you use our
                  mental health support platform. We are committed to maintaining the highest standards of privacy and
                  security for all our users.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Privacy Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <section.icon className="h-6 w-6 mr-3 text-blue-600" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Data Retention */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-8"
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Data Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    We retain your personal information only as long as necessary to provide our services and fulfill
                    the purposes outlined in this policy:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Account information: Retained while your account is active</li>
                    <li>• Assessment data: Retained for up to 7 years for continuity of care</li>
                    <li>• Usage data: Anonymized after 2 years for analytics purposes</li>
                    <li>• Communication records: Retained for 3 years for support purposes</li>
                  </ul>
                  <p>
                    You can request deletion of your data at any time by contacting our support team or using the
                    account deletion feature in your profile settings.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8"
          >
            <Card className="shadow-lg bg-blue-50 dark:bg-blue-900/20">
              <CardHeader>
                <CardTitle>Questions About Privacy?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    If you have any questions about this Privacy Policy or how we handle your data, please don't
                    hesitate to contact us:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Privacy Officer</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Email: privacy@brightmind.com
                        <br />
                        Phone: 1-800-PRIVACY
                        <br />
                        Response time: Within 48 hours
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Data Protection</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Email: security@brightmind.com
                        <br />
                        For security concerns or data breaches
                        <br />
                        Available 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Updates Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-8"
          >
            <Card className="shadow-lg border-yellow-200 dark:border-yellow-800">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Policy Updates</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                      requirements. We will notify you of any material changes via email or through our platform. Your
                      continued use of BrightMind after such changes constitutes acceptance of the updated policy.
                    </p>
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
