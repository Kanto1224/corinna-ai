'use client'

import NavBar from '@/components/navbar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { pricingCards, features } from '@/constants/landing-page'
import { motion } from 'framer-motion'
import { 
  ArrowRightCircleIcon, 
  Check, 
  Zap, 
  MessageCircle,
  Clock,
  Target,
  Calendar,
  CreditCard,
  UserCheck
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
// Removed fake demo chatbot import

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const iconMap = {
  MessageCircle,
  Clock,
  Target,
  Calendar,
  CreditCard,
  UserCheck
}

export default function Home() {

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
      <NavBar />
      
      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[600px]">
            
            {/* Left Column - Content */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-8 lg:pr-8"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange/10 to-orange/5 backdrop-blur-sm border border-orange/20 rounded-full px-6 py-3"
              >
                <Zap className="w-4 h-4 text-orange" />
                <span className="text-orange font-semibold text-sm">
                  KI-gestützter Verkaufs- und Beratungs-Assistent
                </span>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                    AI Chatbot für
                  </span>
                  <br />
                  <span className="shimmer-text">
                    Ihre Website
                  </span>
                </h1>
                
                                 <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                   Integrieren Sie unseren intelligenten Chatbot in <span className="text-orange font-semibold">jede beliebige Website</span>. 
                   <br /><br />
                   Automatisieren Sie <span className="text-orange font-semibold">Kundensupport</span>, Beratungsgespräche, generieren Sie Leads und steigern Sie Ihren Umsatz - 24/7 verfügbar.
                 </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/sign-up">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-orange to-orange/80 hover:from-orange/90 hover:to-orange/70 text-white font-semibold px-8 py-4 rounded-full shadow-xl shadow-orange/25 hover:shadow-orange/40 transition-all duration-300 group text-lg"
                  >
                    Kostenlos starten
                    <ArrowRightCircleIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white/70 backdrop-blur-sm border-2 border-gray-200 hover:border-orange/50 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300"
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Funktionen ansehen
                </Button>
              </motion.div>

              {/* Key Features */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="font-medium">Einfache Integration</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="font-medium">24/7 verfügbar</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="font-medium">Mehrsprachig</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Live Demo */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Animated Light Source */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                className="absolute inset-0 bg-gradient-to-br from-orange/20 via-orange/10 to-transparent rounded-3xl blur-3xl -z-10"
                style={{
                  background: 'radial-gradient(ellipse at 70% 80%, rgba(249, 115, 22, 0.3) 0%, rgba(249, 115, 22, 0.1) 40%, transparent 70%)'
                }}
              />
              
              {/* Pulsing Ambient Light */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.6, 0.4, 0.6] }}
                transition={{ 
                  duration: 4, 
                  delay: 1,
                  repeat: Infinity, 
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-orange/10 via-transparent to-orange/5 rounded-3xl blur-2xl -z-10"
              />

              {/* Website Mockup Container */}
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-6 shadow-2xl">
                {/* Browser Header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="bg-white rounded-full px-4 py-1 ml-4 text-sm text-gray-600 flex-1 max-w-xs">
                    fahrschule-schmidt.de
                  </div>
                </div>
                
                {/* Website Content Simulation */}
                <div className="bg-white rounded-2xl p-6 min-h-[500px] relative shadow-lg">
                  <div className="max-w-md mx-auto">
                    <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                    <div className="space-y-2 mb-6">
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="h-2 bg-gray-300 rounded w-2/3 mb-2"></div>
                        <div className="h-2 bg-gray-200 rounded w-full mb-1"></div>
                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="h-2 bg-gray-300 rounded w-2/3 mb-2"></div>
                        <div className="h-2 bg-gray-200 rounded w-full mb-1"></div>
                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    </div>
                  </div>

                  {/* Live Chatbot Demo */}
                  <div className="absolute bottom-4 right-4">
                    <iframe
                      src="/chatbot-demo"
                      className="w-96 h-[500px] border-none rounded-2xl shadow-2xl"
                      title="Live AI Chatbot Demo"
                    />
                  </div>

                </div>
              </div>

              {/* Enhanced Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 1.2 }}
                className="absolute -top-4 -left-4 w-20 h-20 bg-orange/15 rounded-full blur-xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.8, delay: 1.5 }}
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange/10 rounded-full blur-2xl"
              />
              
              {/* Additional Subtle Light Spots */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 2.5, delay: 2 }}
                className="absolute top-1/3 -left-8 w-16 h-16 bg-gradient-to-r from-orange/20 to-transparent rounded-full blur-xl"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 3, delay: 2.5 }}
                className="absolute bottom-1/4 -right-6 w-24 h-24 bg-gradient-to-l from-orange/15 to-transparent rounded-full blur-2xl"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Features Section - Modernized */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Warum <span className="text-orange">Chatvise</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mehr Support, mehr Kunden, mehr Umsatz
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap]
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <div className="group relative">
                    {/* Floating card effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange/5 to-orange/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                    
                    <Card className="relative h-full min-h-[280px] bg-white/80 backdrop-blur-xl border-0 shadow-lg shadow-gray-100/50 hover:shadow-2xl hover:shadow-orange/10 transition-all duration-500 group-hover:-translate-y-2 rounded-3xl overflow-hidden flex flex-col">
                      {/* Gradient border effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange/20 via-transparent to-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                      
                      <CardHeader className="text-center pb-6 relative z-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange/10 to-orange/5 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-orange" />
                        </div>
                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange transition-colors duration-300">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="relative z-10 flex-1 flex items-center">
                        <CardDescription className="text-gray-600 text-center leading-relaxed text-base">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>


      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transparente Preise für jeden Bedarf
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kostenlos starten, passenden Plan wählen
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {pricingCards.map((card, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className={`h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col ${
                  card.title === 'Professional' ? 'ring-2 ring-orange scale-105' : ''
                }`}>
                  {card.title === 'Professional' && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange to-orange/80 text-white text-center py-2 text-sm font-semibold">
                      Empfohlen
                    </div>
                  )}
                  <CardHeader className={`${card.title === 'Professional' ? 'pt-12' : ''} flex-shrink-0`}>
                    <CardTitle className="text-2xl font-bold text-center">
                      {card.title}
                    </CardTitle>
                    <CardDescription className="text-center text-gray-600">
                      {card.description}
                    </CardDescription>
                    <div className="text-center py-4">
                      <span className="text-5xl font-bold text-gray-900">{card.price}</span>
                      {card.duration && (
                        <span className="text-gray-600 ml-2">/ {card.duration}</span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow">
                    {card.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter className="pt-6 flex-shrink-0 mt-auto">
                    <Link href={`/auth/sign-up?plan=${card.title.toLowerCase()}`} className="w-full">
                      <Button 
                        className={`w-full font-semibold py-3 rounded-full transition-all duration-300 ${
                          card.title === 'Professional'
                            ? 'bg-gradient-to-r from-orange to-orange/80 hover:from-orange/90 hover:to-orange/70 text-white shadow-lg shadow-orange/25'
                            : 'bg-gray-900 hover:bg-gray-800 text-white'
                        }`}
                      >
                        {card.title === 'Starter' ? 'Kostenlos starten' : 'Plan wählen'}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

             {/* Kontakt Section */}
       <section id="kontakt" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
         <div className="container mx-auto max-w-6xl">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="text-center mb-16"
           >
             <h2 className="text-4xl font-bold text-gray-900 mb-6">
               Kontakt aufnehmen
             </h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               Fragen? Wir helfen gerne weiter.
             </p>
           </motion.div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
             {/* Contact Info */}
             <motion.div
               initial={{ opacity: 0, x: -60 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="lg:col-span-1 space-y-8"
             >
               <div>
                 <h3 className="text-2xl font-bold text-gray-900 mb-6">Sprechen Sie mit uns</h3>
                 <div className="space-y-6">
                   <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                     <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                       <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                       </svg>
                     </div>
                     <div>
                       <p className="font-semibold text-gray-900">E-Mail</p>
                       <p className="text-gray-600">info@chatvise.de</p>
                     </div>
                   </div>
                   
                   <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                     <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                       <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                       </svg>
                     </div>
                     <div>
                       <p className="font-semibold text-gray-900">Telefon</p>
                       <p className="text-gray-600">+49 (0) 123 456 789</p>
                     </div>
                   </div>
                 </div>
               </div>

               {/* Social Media */}
               <div>
                 <h4 className="text-lg font-semibold text-gray-900 mb-4">Folgen Sie uns</h4>
                 <div className="flex gap-4">
                   <a 
                     href="#" 
                     className="w-12 h-12 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors"
                     aria-label="YouTube"
                   >
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                     </svg>
                   </a>
                   <a 
                     href="#" 
                     className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center text-white transition-all"
                     aria-label="Instagram"
                   >
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                     </svg>
                   </a>
                   <a 
                     href="#" 
                     className="w-12 h-12 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center text-white transition-colors"
                     aria-label="TikTok"
                   >
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                     </svg>
                   </a>
                 </div>
               </div>
             </motion.div>

             {/* Team Profiles */}
             <motion.div
               initial={{ opacity: 0, x: 60 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="lg:col-span-2"
             >
               
                               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                  {/* Chester Roussos Profile */}
                  <div className="flex flex-col items-center text-center space-y-4 p-6 bg-gray-50 rounded-xl h-full">
                   <div className="w-32 h-32 rounded-full border-4 border-orange bg-gradient-to-br from-orange/10 to-orange/5 flex items-center justify-center overflow-hidden">
                     <svg className="w-16 h-16 text-orange/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                     </svg>
                   </div>
                   <div className="space-y-2">
                     <div className="flex items-center justify-center gap-2">
                       <h4 className="text-xl font-bold text-gray-900">Chester Roussos</h4>
                       <a 
                         href="https://twitter.com/chesterroussos" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-gray-600 hover:text-orange transition-colors"
                       >
                         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                         </svg>
                       </a>
                     </div>
                     <p className="text-orange font-semibold text-sm">Gründer & CEO</p>
                     <p className="text-gray-600 text-sm leading-relaxed">
                       Erfahrener Unternehmer mit Expertise in Finanzen. 
                       Führt Chatvise mit der Vision, Kundensupport zu revolutionieren.
                     </p>
                   </div>
                 </div>

                                   {/* Fabian Duwe Profile */}
                  <div className="flex flex-col items-center text-center space-y-4 p-6 bg-gray-50 rounded-xl h-full">
                   <div className="w-32 h-32 rounded-full border-4 border-orange bg-gradient-to-br from-orange/10 to-orange/5 flex items-center justify-center overflow-hidden">
                     <svg className="w-16 h-16 text-orange/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                     </svg>
                   </div>
                   <div className="space-y-2">
                     <div className="flex items-center justify-center gap-2">
                       <h4 className="text-xl font-bold text-gray-900">Fabian Duwe</h4>
                       <a 
                         href="https://twitter.com/fabianduwe" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-gray-600 hover:text-orange transition-colors"
                       >
                         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                         </svg>
                       </a>
                     </div>
                     <p className="text-orange font-semibold text-sm">Entwickler & Lead Developer</p>
                     <p className="text-gray-600 text-sm leading-relaxed">
                       Leidenschaftlicher Entwickler mit jahrelanger Erfahrung in KI und Webentwicklung. 
     
                     </p>
                   </div>
                 </div>
               </div>
             </motion.div>
           </div>
         </div>
       </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
                         <div className="md:col-span-2">
                               <Link href="/" className="flex items-center gap-3 mb-6">
                  <div className="bg-white rounded-lg">
                    <Image
                      src="/images/logo.png"
                      alt="Chatvise Logo"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                 <span className="text-2xl font-bold text-white">
                   Chatvise
                 </span>
               </Link>
              <p className="text-gray-400 mb-6 max-w-md">
                Ihr intelligenter KI-Chatbot für automatisierten Kundensupport, Lead-Generierung und Umsatzsteigerung. 24/7 verfügbar, einfach zu integrieren.
              </p>
              <div className="flex gap-4">
                <Link href="/auth/sign-up">
                  <Button className="bg-gradient-to-r from-orange to-orange/80 hover:from-orange/90 hover:to-orange/70 text-white font-medium px-6 rounded-full">
                    Kostenlos testen
                  </Button>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Navigation</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-orange transition-colors"
                  >
                    Start
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-orange transition-colors"
                  >
                    Funktionen
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-orange transition-colors"
                  >
                    Preise
                  </button>
                </li>
                <li>
                  <Link href="/auth/sign-in" className="text-gray-400 hover:text-orange transition-colors">
                    Anmelden
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Rechtliches</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/impressum" className="text-gray-400 hover:text-orange transition-colors">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link href="/wiederrufsrecht" className="text-gray-400 hover:text-orange transition-colors">
                    Wiederrufsrecht
                  </Link>
                </li>
                <li>
                  <Link href="/agb" className="text-gray-400 hover:text-orange transition-colors">
                    Allgemeine Geschäftsbedingungen
                  </Link>
                </li>
                <li>
                  <Link href="/zahlungen-versand" className="text-gray-400 hover:text-orange transition-colors">
                    Zahlungen und Versand
                  </Link>
                </li>
                <li>
                  <Link href="/datenschutz" className="text-gray-400 hover:text-orange transition-colors">
                    Datenschutzerklärung
                  </Link>
                </li>
              </ul>
            </div>
          </div>

                     {/* Bottom Bar */}
           <div className="border-t border-gray-800 mt-12 pt-8 flex justify-center">
             <p className="text-gray-400 text-sm">
               © 2025 Chatvise. Alle Rechte vorbehalten.
             </p>
           </div>
        </div>
      </footer>
    </main>
  )
}