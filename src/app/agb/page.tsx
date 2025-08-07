import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'AGB - Chatvise',
  description: 'Allgemeine Geschäftsbedingungen',
}

export default function AGBPage() {
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
          
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Allgemeine Geschäftsbedingungen</h1>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <p className="text-gray-600 text-lg">
              AGB Inhalte werden hier eingefügt.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}