import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Impressum - Chatvise',
  description: 'Impressum und Angaben gemäß § 5 TMG',
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zur Startseite
              </Button>
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Gesetzliche Anbieterkennung</h2>
              <div className="space-y-2 text-gray-600">
                <p className="font-semibold text-gray-800">Chester Roussos</p>
                <p>Chatvise</p>
                <p>Klarweg 27</p>
                <p>85399 Hallbergmoos</p>
                <p>Deutschland</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Kontakt</h2>
              <div className="space-y-2 text-gray-600">
                <p>
                  <span className="font-medium">Telefon:</span>{' '}
                  <a href="tel:01721686476" className="text-orange hover:text-orange/80 transition-colors">
                    01721686476
                  </a>
                </p>
                <p>
                  <span className="font-medium">E-Mail:</span>{' '}
                  <a href="mailto:chesterroussos.business@gmail.com" className="text-orange hover:text-orange/80 transition-colors">
                    chesterroussos.business@gmail.com
                  </a>
                </p>
                <p>
                  <span className="font-medium">Webseite:</span>{' '}
                  <a href="https://chatvise.de" className="text-orange hover:text-orange/80 transition-colors">
                    Chatvise Chatbot
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Umsatzsteuer-Identifikationsnummer</h2>
              <p className="text-gray-600">
                <span className="font-medium">USt-IdNr.:</span> DE370022008
              </p>
            </section>

            <section className="border-t pt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Hinweis zur Umsatzsteuer</h2>
              <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">
                Aufgrund des Kleinunternehmerstatus wird in der Rechnung keine MwSt. ausgewiesen 
                (umsatzsteuerfrei gem. § 19 Abs. 1 UStG).
              </p>
            </section>

            <section className="border-t pt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Streitschlichtung</h2>
              <p className="text-gray-600">
                Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor 
                Verbraucherschlichtungsstellen teilzunehmen.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}