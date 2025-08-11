import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Zahlungen und Versand - Chatvise',
  description: 'Zahlungsarten und Versandinformationen',
}

export default function ZahlungenVersandPage() {
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
          
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Zahlungen und Versand</h1>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg space-y-8">
            
            {/* Allgemeine Bedingungen */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">Allgemeine Bedingungen</h2>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <p className="text-gray-600 font-medium">
                  Die Nutzung der Plattform erfordert einen registrierten Account.
                </p>
              </div>
            </section>

            {/* Bereitstellung von digitalen Inhalten */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">Bereitstellung von digitalen Inhalten</h2>
              <div className="space-y-4 text-gray-600">
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                  <p className="font-medium text-green-800">
                    Für digitale Inhalte (Daten, die in digitaler Form erstellt und bereitgestellt werden) 
                    fallen keine Versandkosten an.
                  </p>
                </div>
                <p>
                  Der Zugriff auf digitale Inhalte erfolgt über ein persönliches Dashboard auf unserer Website.
                </p>
                <p>
                  Nach Abschluss eines kostenpflichtigen Abonnements wird der erweiterte Funktionsumfang 
                  des Chatbots automatisch freigeschaltet.
                </p>
              </div>
            </section>

            {/* Akzeptierte Zahlungsmöglichkeiten */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">Akzeptierte Zahlungsmöglichkeiten</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* PayPal Checkout */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">PP</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-3">Über PayPal Checkout</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-orange rounded-full mr-3"></span>
                      Zahlung per PayPal
                    </li>
                  </ul>
                </div>

                {/* Stripe */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-3">Über Stripe</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-orange rounded-full mr-3"></span>
                      Zahlung per Sofortüberweisung (über Klarna)
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-orange rounded-full mr-3"></span>
                      Zahlung per SEPA-Lastschrift (über Klarna)
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-orange rounded-full mr-3"></span>
                      Zahlung per Kreditkarte (über Klarna)
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-orange rounded-full mr-3"></span>
                      Zahlung per Rechnung (über Klarna)
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-orange rounded-full mr-3"></span>
                      Zahlung per Ratenkauf (über Klarna)
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-orange rounded-full mr-3"></span>
                      Zahlung per Kreditkarte
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-orange rounded-full mr-3"></span>
                      Zahlung per Apple Pay
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-orange rounded-full mr-3"></span>
                      Zahlung per Google Pay
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-orange rounded-full mr-3"></span>
                      Zahlung per SEPA-Lastschrift
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Kontakt */}
            <section className="border-t-2 border-gray-200 pt-6">
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
                <p className="text-gray-700">
                  <span className="font-medium">Bei Fragen</span> finden Sie unsere Kontaktdaten im{' '}
                  <Link href="/impressum" className="text-orange hover:text-orange/80 transition-colors font-medium">
                    Impressum
                  </Link>.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}