'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, Home, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

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

        {/* Error Icon */}
        <div className="flex justify-center">
          <div className="bg-red-100 border border-red-200 rounded-full p-6">
            <AlertTriangle className="w-16 h-16 text-red-500" />
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Etwas ist schief gelaufen
          </h1>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            Ein unerwarteter Fehler ist aufgetreten. Wir arbeiten daran, das Problem zu beheben. 
            Versuchen Sie es erneut oder kehren Sie zur Startseite zurück.
          </p>
          {process.env.NODE_ENV === 'development' && error.message && (
            <details className="mt-4 p-4 bg-red-50 rounded-lg text-left">
              <summary className="cursor-pointer font-medium text-red-800">
                Technische Details (nur in der Entwicklung sichtbar)
              </summary>
              <p className="mt-2 text-sm text-red-700 font-mono">
                {error.message}
              </p>
            </details>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            onClick={reset}
            className="bg-gradient-to-r from-orange to-orange/80 hover:from-orange/90 hover:to-orange/70 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-orange/25 hover:shadow-orange/40 transition-all duration-300 group"
          >
            <RefreshCw className="mr-2 w-5 h-5" />
            Erneut versuchen
          </Button>
          
          <Link href="/">
            <Button 
              variant="outline"
              size="lg"
              className="bg-white/70 backdrop-blur-sm border-2 border-gray-200 hover:border-orange/50 px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 group"
            >
              <Home className="mr-2 w-5 h-5" />
              Zur Startseite
            </Button>
          </Link>
        </div>

        {/* Contact Info */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Problem weiterhin vorhanden?
          </h3>
          <p className="text-gray-600 mb-4">
            Kontaktieren Sie unser Support-Team für weitere Hilfe.
          </p>
          <a 
            href="mailto:chesterroussos.business@gmail.com?subject=Fehler auf Chatvise Website"
            className="inline-flex items-center text-orange hover:text-orange/80 transition-colors font-medium"
          >
            chesterroussos.business@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}