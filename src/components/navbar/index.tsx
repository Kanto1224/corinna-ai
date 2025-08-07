'use client'

import Image from 'next/image'
import * as React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function NavBar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-lg'
          : 'backdrop-blur-md bg-white/50'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Chatvise Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-orange to-orange/70 bg-clip-text text-transparent">
              Chatvise
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 justify-center flex-1">
            <li>
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-orange transition-colors font-medium"
              >
                Start
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-700 hover:text-orange transition-colors font-medium"
              >
                Funktionen
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-orange transition-colors font-medium"
              >
                Preise
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('kontakt')}
                className="text-gray-700 hover:text-orange transition-colors font-medium"
              >
                Kontakt
              </button>
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/auth/sign-in">
              <Button variant="ghost" className="font-medium">
                Anmelden
              </Button>
            </Link>
            <Link href="/auth/sign-up">
              <Button className="bg-gradient-to-r from-orange to-orange/80 hover:from-orange/90 hover:to-orange/70 text-white font-medium px-6 shadow-lg shadow-orange/20">
                Kostenlos testen
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden backdrop-blur-xl bg-white/90 border-t border-white/20"
          >
            <div className="container mx-auto px-4 py-4">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection('hero')}
                    className="block w-full text-left py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                  >
                    Start
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('features')}
                    className="block w-full text-left py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                  >
                    Funktionen
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('pricing')}
                    className="block w-full text-left py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                  >
                    Preise
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('kontakt')}
                    className="block w-full text-left py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                  >
                    Kontakt
                  </button>
                </li>
              </ul>
              <div className="flex flex-col gap-2 mt-4">
                <Link href="/auth/sign-in">
                  <Button variant="outline" className="w-full font-medium">
                    Anmelden
                  </Button>
                </Link>
                <Link href="/auth/sign-up">
                  <Button className="w-full bg-gradient-to-r from-orange to-orange/80 hover:from-orange/90 hover:to-orange/70 text-white font-medium shadow-lg shadow-orange/20">
                    Kostenlos testen
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default NavBar