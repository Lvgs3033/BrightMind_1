"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Bot, User, Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const botResponses = {
  greeting: [
    "Hello! I'm here to support you. How are you feeling today?",
    "Hi there! I'm your mental health support companion. What's on your mind?",
    "Welcome! I'm here to listen and help. How can I support you today?",
  ],
  anxiety: [
    "I understand you're feeling anxious. Try the 4-7-8 breathing technique: breathe in for 4, hold for 7, exhale for 8. Would you like me to guide you through it?",
    "Anxiety can be overwhelming. Remember that this feeling is temporary. Have you tried our breathing exercises or stress relief games?",
    "It's okay to feel anxious. You're not alone. Let's focus on some grounding techniques. Can you name 5 things you can see around you?",
  ],
  depression: [
    "I hear that you're going through a difficult time. Your feelings are valid, and it's brave of you to reach out. Have you considered speaking with a professional counselor?",
    "Depression can make everything feel heavy. Remember that small steps count. Have you done anything today that brought you even a tiny bit of joy?",
    "Thank you for sharing with me. Depression is treatable, and you deserve support. Would you like some resources for professional help?",
  ],
  crisis: [
    "I'm concerned about you. If you're having thoughts of self-harm, please reach out to a crisis helpline immediately: Call 988 or text HOME to 741741. You matter, and help is available.",
    "Your safety is the most important thing right now. Please contact emergency services (911) or a crisis helpline (988) immediately. You don't have to go through this alone.",
    "I want you to know that you're important and your life has value. Please reach out for immediate help: Crisis Text Line (741741) or National Suicide Prevention Lifeline (988).",
  ],
  resources: [
    "Here are some helpful resources: Our stress relief games, professional contact information, and recommended books and videos. What type of support interests you most?",
    "I can help you find resources! We have breathing exercises, memory games, and connections to mental health professionals. What would be most helpful right now?",
    "There are many ways to get support. Would you like me to suggest some coping strategies, professional resources, or self-care activities?",
  ],
  encouragement: [
    "You're taking positive steps by being here and seeking support. That shows real strength and self-awareness.",
    "Remember that healing isn't linear. Be patient and kind with yourself as you navigate this journey.",
    "You've made it through difficult times before, and you have the strength to get through this too. I believe in you.",
  ],
}

export function ChatBot({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your BrightMind support companion. I'm here to listen and provide resources for mental health support.\n\n⚠️ IMPORTANT NOTICE: This AI is for support only and cannot replace professional help. If you're in crisis, call 988 (Suicide & Crisis Lifeline) or 911 immediately.\n\nHow are you feeling today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    // Crisis keywords
    if (
      message.includes("suicide") ||
      message.includes("kill myself") ||
      message.includes("end it all") ||
      message.includes("self-harm")
    ) {
      return botResponses.crisis[Math.floor(Math.random() * botResponses.crisis.length)]
    }

    // Anxiety keywords
    if (
      message.includes("anxious") ||
      message.includes("anxiety") ||
      message.includes("panic") ||
      message.includes("worried") ||
      message.includes("nervous")
    ) {
      return botResponses.anxiety[Math.floor(Math.random() * botResponses.anxiety.length)]
    }

    // Depression keywords
    if (
      message.includes("depressed") ||
      message.includes("depression") ||
      message.includes("sad") ||
      message.includes("hopeless") ||
      message.includes("empty")
    ) {
      return botResponses.depression[Math.floor(Math.random() * botResponses.depression.length)]
    }

    // Resource requests
    if (
      message.includes("help") ||
      message.includes("resource") ||
      message.includes("support") ||
      message.includes("what can you do")
    ) {
      return botResponses.resources[Math.floor(Math.random() * botResponses.resources.length)]
    }

    // Greetings
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)]
    }

    // Default encouraging response
    return botResponses.encouragement[Math.floor(Math.random() * botResponses.encouragement.length)]
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot thinking time
    setTimeout(
      () => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: getBotResponse(inputValue),
          sender: "bot",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botResponse])
        setIsTyping(false)
      },
      1000 + Math.random() * 2000,
    )
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md h-[600px] flex flex-col p-0">
        <DialogHeader className="p-4 border-b">
          <DialogTitle className="flex items-center">
            <Bot className="h-5 w-5 mr-2 text-blue-600" />
            BrightMind Support
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`flex items-start space-x-2 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${message.sender === "user" ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-700"}`}
                    >
                      {message.sender === "user" ? (
                        <User className="h-4 w-4 text-white" />
                      ) : (
                        <Bot className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                      )}
                    </div>
                    <div
                      className={`rounded-lg p-3 ${message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 dark:bg-gray-800"}`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${message.sender === "user" ? "text-blue-100" : "text-gray-500"}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {isTyping && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </ScrollArea>

        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              disabled={isTyping}
            />
            <Button onClick={handleSendMessage} disabled={isTyping || !inputValue.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            ⚠️ This AI is for support only and cannot replace professional help. If you're in crisis, call 988 (Suicide &
            Crisis Lifeline) or 911 immediately.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
