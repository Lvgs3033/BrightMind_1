"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, AlertTriangle, Shield, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Terms of Service</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              Please read these terms carefully before using BrightMind
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: December 2024</p>
          </div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <Card className="shadow-lg border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
                      Important Medical Disclaimer
                    </h3>
                    <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">
                      BrightMind is not a substitute for professional medical advice, diagnosis, or treatment. Our
                      platform provides educational resources and support tools only. Always seek the advice of
                      qualified mental health professionals for any questions regarding mental health conditions. If you
                      are experiencing a mental health crisis, please contact emergency services immediately.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-6 w-6 mr-3 text-blue-600" />
                    1. Acceptance of Terms
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    By accessing and using BrightMind, you accept and agree to be bound by the terms and provision of
                    this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                  <p>
                    These Terms of Service constitute a legally binding agreement between you and BrightMind. Your use
                    of our platform indicates your acceptance of these terms.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Service Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>2. Service Description</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>BrightMind provides:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Mental health screening and assessment tools</li>
                    <li>• Educational resources and self-help materials</li>
                    <li>• Stress relief games and interactive activities</li>
                    <li>• AI-powered support chatbot for immediate assistance</li>
                    <li>• Connections to professional mental health resources</li>
                    <li>• Progress tracking and personalized recommendations</li>
                  </ul>
                  <p>
                    Our services are designed to supplement, not replace, professional mental health care. We strongly
                    encourage users to seek professional help when needed.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* User Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-6 w-6 mr-3 text-blue-600" />
                    3. User Responsibilities
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>As a user of BrightMind, you agree to:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Provide accurate and truthful information in assessments</li>
                    <li>• Use the platform responsibly and for its intended purpose</li>
                    <li>• Respect the privacy and confidentiality of other users</li>
                    <li>• Not share your account credentials with others</li>
                    <li>• Seek professional help for serious mental health concerns</li>
                    <li>• Report any technical issues or security concerns promptly</li>
                    <li>• Comply with all applicable laws and regulations</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Privacy and Data */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-6 w-6 mr-3 text-blue-600" />
                    4. Privacy and Data Protection
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    Your privacy is paramount to us. Our collection, use, and protection of your personal information is
                    governed by our Privacy Policy, which is incorporated into these Terms by reference. By using
                    BrightMind, you consent to our data practices as described in our Privacy Policy.
                  </p>
                  <p>
                    We implement industry-standard security measures to protect your mental health data, including
                    encryption, secure storage, and limited access controls. However, no system is completely secure,
                    and we cannot guarantee absolute security.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Limitations and Disclaimers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>5. Limitations and Disclaimers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    BrightMind is provided "as is" without warranties of any kind. We make no guarantees about the
                    effectiveness of our tools or resources for any particular individual.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Our assessments are screening tools, not diagnostic instruments</li>
                    <li>• AI chatbot responses are automated and not professional advice</li>
                    <li>• Platform availability may be interrupted for maintenance or technical issues</li>
                    <li>• We are not liable for decisions made based on platform content</li>
                    <li>• Emergency situations require immediate professional intervention</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Termination */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>6. Account Termination</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    You may terminate your account at any time by contacting our support team or using the account
                    deletion feature. Upon termination:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Your access to the platform will be immediately revoked</li>
                    <li>• Personal data will be deleted according to our retention policy</li>
                    <li>• Some anonymized data may be retained for research purposes</li>
                    <li>• We reserve the right to terminate accounts for violations of these terms</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Changes to Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>7. Changes to Terms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    We reserve the right to modify these Terms of Service at any time. Changes will be effective
                    immediately upon posting to our platform. We will notify users of material changes via email or
                    platform notification.
                  </p>
                  <p>
                    Your continued use of BrightMind after changes are posted constitutes acceptance of the modified
                    terms. If you do not agree to the changes, you should discontinue use of the platform.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <Card className="shadow-lg bg-blue-50 dark:bg-blue-900/20">
                <CardHeader>
                  <CardTitle>8. Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    If you have questions about these Terms of Service, please contact us:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Legal Department</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Email: legal@brightmind.com
                        <br />
                        Phone: 1-800-BRIGHT-1
                        <br />
                        Address: 123 Mental Health Ave, Suite 100
                        <br />
                        Wellness City, WC 12345
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">General Support</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Email: support@brightmind.com
                        <br />
                        Phone: 1-800-SUPPORT
                        <br />
                        Available: 24/7
                        <br />
                        Response time: Within 24 hours
                      </p>
                    </div>
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
