'use client'

import Link from 'next/link'
import { ArrowLeft, Home, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50/30 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-3 mb-8">
          <Image
            src="/images/logo.png"
            alt="Chatvise Logo"
            width={60}
            height={60}
            className="w-15 h-15"
          />
          <span className="text-3xl font-bold bg-gradient-to-r from-orange to-orange/70 bg-clip-text text-transparent">
            Chatvise
          </span>
        </Link>

        {/* 404 Animation/Graphic */}
        <div className="relative">
          <div className="text-9xl font-bold text-orange/20 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white rounded-full p-6 shadow-lg border-2 border-orange/20">
              <Search className="w-12 h-12 text-orange" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Seite nicht gefunden
          </h1>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            Die Seite, nach der Sie suchen, existiert nicht oder wurde verschoben. 
            Keine Sorge - unser KI-Chatbot kann Ihnen weiterhelfen!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-orange to-orange/80 hover:from-orange/90 hover:to-orange/70 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-orange/25 hover:shadow-orange/40 transition-all duration-300 group"
            >
              <Home className="mr-2 w-5 h-5" />
              Zur Startseite
            </Button>
          </Link>
          
          <Button 
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
            className="bg-white/70 backdrop-blur-sm border-2 border-gray-200 hover:border-orange/50 px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 group"
          >
            <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Zurück
          </Button>
        </div>

        {/* Popular Links */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Beliebte Bereiche
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link 
              href="/auth/sign-up"
              className="p-3 rounded-lg hover:bg-orange/5 transition-colors text-left group"
            >
              <span className="text-orange font-medium group-hover:text-orange/80">
                Kostenlos registrieren
              </span>
            </Link>
            <Link 
              href="/impressum"
              className="p-3 rounded-lg hover:bg-orange/5 transition-colors text-left group"
            >
              <span className="text-orange font-medium group-hover:text-orange/80">
                Impressum
              </span>
            </Link>
            <Link 
              href="/datenschutz"
              className="p-3 rounded-lg hover:bg-orange/5 transition-colors text-left group"
            >
              <span className="text-orange font-medium group-hover:text-orange/80">
                Datenschutz
              </span>
            </Link>
            <Link 
              href="/agb"
              className="p-3 rounded-lg hover:bg-orange/5 transition-colors text-left group"
            >
              <span className="text-orange font-medium group-hover:text-orange/80">
                AGB
              </span>
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-sm text-gray-500">
          <p>
            Benötigen Sie Hilfe? Kontaktieren Sie uns unter{' '}
            <a 
              href="mailto:chesterroussos.business@gmail.com" 
              className="text-orange hover:text-orange/80 transition-colors"
            >
              chesterroussos.business@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}