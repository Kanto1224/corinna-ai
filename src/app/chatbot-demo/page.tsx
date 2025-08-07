'use client'
import React, { useState, useEffect } from 'react'
import { BotIcon } from '@/icons/bot-icon'
import { Send, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion, AnimatePresence } from 'framer-motion'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

const DemoChatBot = () => {
  const [isOpen, setIsOpen] = useState(true) // Start with chat open for demo
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hallo! Willkommen bei der Fahrschule Schmidt! 🚗\n\nIch bin Ihr AI-Assistent für alle Fragen rund um den Führerschein.\n\n**Ich helfe bei:**\n• Preisen und Paketen\n• Terminen und Anmeldung\n• Fahrstunden\n\nWie kann ich helfen?'
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [demoCompleted, setDemoCompleted] = useState(false)
  const [isDemoRunning, setIsDemoRunning] = useState(true)
  const [fakeTyping, setFakeTyping] = useState('')
  const [showFakeTyping, setShowFakeTyping] = useState(false)

  // Helper function to simulate typing in input field
  const simulateTyping = (text: string, callback: () => void) => {
    setShowFakeTyping(true)
    setFakeTyping('')
    let currentText = ''
    let index = 0
    
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        currentText += text[index]
        setFakeTyping(currentText)
        index++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setShowFakeTyping(false)
          setFakeTyping('')
          callback()
        }, 500)
      }
    }, 100) // Typing speed
  }

  // Auto-demo conversation with fake messages
  useEffect(() => {
    const runDemoConversation = async () => {
      // First user message after 3 seconds (slower)
      setTimeout(() => {
        simulateTyping('Was kostet der Führerschein?', () => {
          const userMessage1: Message = {
            role: 'user',
            content: 'Was kostet der Führerschein?'
          }
          setMessages(prev => [...prev, userMessage1])
          
          // Show typing, then AI response (longer delays)
          setTimeout(() => {
            setIsTyping(true)
            setTimeout(() => {
              const aiMessage1: Message = {
                role: 'assistant',
                content: '**🚗 Führerschein Klasse B - Komplettpaket:**\n\n• **Preis: 2.890€** (alles inklusive)\n• 14 Theorie-Doppelstunden\n• 12 Pflichtstunden + individuelle Fahrstunden\n• Alle Prüfungsgebühren enthalten\n\n**💸 Ratenzahlung möglich!**\n\nHaben Sie noch Fragen zu unserem Angebot?'
              }
              setMessages(prev => [...prev, aiMessage1])
              setIsTyping(false)
              
              // Second user message after longer pause
              setTimeout(() => {
                simulateTyping('Wie lange dauert es normalerweise?', () => {
                  const userMessage2: Message = {
                    role: 'user',
                    content: 'Wie lange dauert es normalerweise?'
                  }
                  setMessages(prev => [...prev, userMessage2])
                  
                  // Show typing, then second AI response
                  setTimeout(() => {
                    setIsTyping(true)
                    setTimeout(() => {
                      const aiMessage2: Message = {
                        role: 'assistant',
                        content: '**⏱️ Typische Ausbildungsdauer:**\n\n• **Normal-Kurs: 3-4 Monate**\n• **Intensiv-Kurs: 2 Wochen** (3.490€)\n\n**📚 Theorie:** Ca. 2-3 Wochen\n**🚗 Praxis:** Durchschnittlich 25-30 Fahrstunden\n\n**🎯 Sie bestimmen das Tempo!**\n\nMöchten Sie einen Beratungstermin vereinbaren?'
                      }
                      setMessages(prev => [...prev, aiMessage2])
                      setIsTyping(false)
                      
                      // Enable real AI without completion message
                      setTimeout(() => {
                        setDemoCompleted(true)
                        setIsDemoRunning(false)
                      }, 1500)
                    }, 2500) // Longer typing delay
                  }, 1200)
                })
              }, 4000) // Longer pause between messages
            }, 2500) // Longer typing delay
          }, 1000)
        })
      }, 3000) // Slower start
    }

    runDemoConversation()
  }, [])

  // Auto-scroll messages to bottom
  useEffect(() => {
    const container = document.getElementById('messages-container')
    if (container) {
      container.scrollTop = container.scrollHeight
    }
  }, [messages, isTyping])

  // Real AI API call function
  const callAIApi = async (message: string, chatHistory: Message[]) => {
    try {
      const response = await fetch('/api/chatbot-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          chatHistory: chatHistory.map(msg => ({ role: msg.role, content: msg.content }))
        })
      })

      const data = await response.json()
      return data.response
    } catch (error) {
      console.error('AI API Error:', error)
      return 'Entschuldigung, ich habe gerade technische Probleme. Können Sie Ihre Frage bitte wiederholen? 🔧'
    }
  }

  // Only use real AI for actual user input (not demo messages)

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      role: 'user',
      content: inputValue
    }

    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    const currentInput = inputValue
    setInputValue('')
    setIsTyping(true)

    // Only use real AI after demo is completed, otherwise show a message
    if (!demoCompleted) {
      setTimeout(() => {
        const aiMessage: Message = {
          role: 'assistant',
          content: 'Einen Moment bitte! Ich bereite mich noch vor... 🤖\n\nLassen Sie die Demo-Unterhaltung zu Ende laufen, dann können Sie gerne Ihre eigenen Fragen stellen!'
        }
        setMessages(prev => [...prev, aiMessage])
        setIsTyping(false)
      }, 1000)
      return
    }

    // Get real AI response for user input
    const aiResponse = await callAIApi(currentInput, updatedMessages)
    
    setTimeout(() => {
      const aiMessage: Message = {
        role: 'assistant',
        content: aiResponse
      }
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 800) // Realistic typing delay
  }

  return (
    <div className="h-screen flex flex-col justify-end items-end gap-4 bg-transparent">
      {/* Chat Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-2xl w-96 h-[500px] flex flex-col border border-gray-200"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-orange to-orange/80 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Fahrschule Schmidt</h3>
              <p className="text-sm opacity-90">Online - Ihr Führerschein-Berater</p>
            </div>
            {/* Removed X button during demo */}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3" id="messages-container">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-4 rounded-2xl text-sm ${
                    message.role === 'user'
                      ? 'bg-orange text-white rounded-br-sm'
                      : 'bg-gray-50 text-gray-800 rounded-bl-sm border border-gray-200'
                  }`}
                >
                  <div className="whitespace-pre-wrap leading-relaxed">
                    {message.content.split('\n').map((line, lineIndex) => {
                      // Handle bullet points
                      if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
                        return (
                          <div key={lineIndex} className="flex items-start gap-2 my-1">
                            <span className="text-orange font-bold mt-0.5">•</span>
                            <span>
                              {line.trim().substring(1).trim().split(/(\*\*[^*]+?\*\*)/g).map((part, partIndex) => {
                                if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
                                  return (
                                    <strong key={partIndex} className="font-bold text-orange">
                                      {part.slice(2, -2)}
                                    </strong>
                                  )
                                }
                                return <span key={partIndex}>{part}</span>
                              })}
                            </span>
                          </div>
                        )
                      }
                      // Handle lines with bold text
                      else if (line.includes('**')) {
                        return (
                          <div key={lineIndex} className={lineIndex === 0 ? '' : 'mt-2'}>
                            {line.split(/(\*\*[^*]+?\*\*)/g).map((part, partIndex) => {
                              if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
                                return (
                                  <strong key={partIndex} className="font-bold text-orange">
                                    {part.slice(2, -2)}
                                  </strong>
                                )
                              }
                              return <span key={partIndex}>{part}</span>
                            })}
                          </div>
                        )
                      }
                      // Regular lines
                      else if (line.trim()) {
                        return (
                          <div key={lineIndex} className={lineIndex === 0 ? '' : 'mt-2'}>
                            {line}
                          </div>
                        )
                      }
                      // Empty lines for spacing
                      else {
                        return <div key={lineIndex} className="h-2"></div>
                      }
                    })}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-2xl rounded-bl-sm text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <Input
                value={showFakeTyping ? fakeTyping : inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={demoCompleted ? "Stellen Sie Ihre Frage..." : "Demo läuft - bitte warten..."}
                className="flex-1"
                readOnly={showFakeTyping || isDemoRunning}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage()
                  }
                }}
              />
              <Button
                onClick={handleSendMessage}
                className="bg-orange hover:bg-orange/90 text-white p-2"
                disabled={!inputValue.trim() || !demoCompleted}
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Floating Chat Icon */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "backOut" }}
          className="relative"
        >
          <div
            className="w-16 h-16 bg-gradient-to-br from-orange to-orange/80 rounded-full shadow-lg cursor-pointer flex items-center justify-center hover:scale-110 transition-transform duration-200"
            onClick={() => setIsOpen(true)}
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          
          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">1</span>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default DemoChatBot