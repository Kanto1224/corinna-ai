import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Widerrufsrecht - Chatvise',
  description: 'Widerrufsbelehrung für Verbraucher und digitale Inhalte',
}

export default function WiderrufsrechtPage() {
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
          
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Widerrufsrecht für Verbraucher</h1>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg space-y-8">
            
            {/* Einleitung */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
              <p className="text-gray-600">
                <span className="font-medium">Verbraucher</span> ist jede natürliche Person, die ein Rechtsgeschäft zu 
                Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbstständigen beruflichen 
                Tätigkeit zugerechnet werden können.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-orange pb-3">
              Widerrufsbelehrung für digitale Inhalte
            </h2>

            {/* Widerrufsrecht */}
            <section className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Widerrufsrecht</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
                </p>
                <p>
                  Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
                </p>
                <p>
                  Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Chester Roussos, Klarweg 27, 85399 Hallbergmoos, 
                  Telefonnummer:{' '}
                  <a href="tel:01721686476" className="text-orange hover:text-orange/80 transition-colors">
                    01721686476
                  </a>, E-Mail-Adresse:{' '}
                  <a href="mailto:chesterroussos.business@gmail.com" 
                     className="text-orange hover:text-orange/80 transition-colors break-all">
                    chesterroussos.business@gmail.com
                  </a>) mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder eine E-Mail) 
                  über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte 
                  Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
                </p>
                <p>
                  Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des 
                  Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
                </p>
              </div>
            </section>

            {/* Folgen des Widerrufs */}
            <section className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Folgen des Widerrufs</h3>
              <p className="text-gray-600">
                Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, 
                einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass 
                Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), 
                unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über 
                Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe 
                Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde 
                ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.
              </p>
            </section>

            {/* Erlöschensgründe */}
            <section className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Erlöschensgründe</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Das Widerrufsrecht erlischt bei einem Vertrag über die Bereitstellung von nicht auf einem körperlichen 
                  Datenträger befindlichen digitalen Inhalten, der den Verbraucher zur Zahlung eines Preises verpflichtet, 
                  wenn der Verbraucher:
                </p>
                <div className="ml-6 space-y-3">
                  <p>
                    <span className="font-medium text-gray-800">1.</span> ausdrücklich zugestimmt hat, dass der 
                    Unternehmer mit der Vertragserfüllung vor Ablauf der Widerrufsfrist beginnt und
                  </p>
                  <p>
                    <span className="font-medium text-gray-800">2.</span> seine Kenntnis davon bestätigt hat, dass 
                    durch seine Zustimmung mit Beginn der Vertragserfüllung sein Widerrufsrecht erlischt und
                  </p>
                  <div>
                    <p>
                      <span className="font-medium text-gray-800">3.</span> der Unternehmer dem Verbraucher eine 
                      Bestätigung des Vertrags, innerhalb einer angemessenen Frist nach Vertragsschluss, spätestens 
                      jedoch bei Bereitstellung der nicht auf einem körperlichen Datenträger befindlichen digitalen 
                      Inhalte, auf einem dauerhaften Datenträger zur Verfügung gestellt hat:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>in der der Vertragsinhalt wiedergegeben ist und</li>
                      <li>
                        auf der festgehalten ist, dass der Verbraucher vor Vertragserfüllung ausdrücklich zugestimmt 
                        hat, dass der Unternehmer mit der Vertragserfüllung vor Ablauf der Widerrufsfrist beginnt, 
                        und seine Kenntnis davon bestätigt hat, dass er durch seine Zustimmung mit Beginn der 
                        Vertragserfüllung sein Widerrufsrecht verliert.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <div className="border-t-2 border-gray-200"></div>

            {/* Muster-Widerrufsformular */}
            <section className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Muster-Widerrufsformular</h3>
              
              <p className="text-gray-600 italic">
                (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.)
              </p>

              <div className="bg-gray-50 border-2 border-dashed border-gray-300 p-6 rounded-lg space-y-4">
                <div className="space-y-4 text-gray-700">
                  <p>
                    <span className="font-medium">- An:</span> Chester Roussos, Klarweg 27, 85399 Hallbergmoos, 
                    E-Mail-Adresse:{' '}
                    <a href="mailto:chesterroussos.business@gmail.com" 
                       className="text-orange hover:text-orange/80 transition-colors break-all">
                      chesterroussos.business@gmail.com
                    </a>
                  </p>
                  
                  <p>
                    <span className="font-medium">- Hiermit widerrufe(n) ich/ wir (*)</span> den von mir/ uns (*) 
                    abgeschlossenen Vertrag über den Kauf der folgenden Waren (*) / die Erbringung der folgenden 
                    Dienstleistung (*)
                  </p>
                  
                  <p>
                    <span className="font-medium">- Bestellt am (*) / erhalten am (*):</span> ___________________
                  </p>
                  
                  <p>
                    <span className="font-medium">- Name des/ der Verbraucher(s):</span> ___________________
                  </p>
                  
                  <p>
                    <span className="font-medium">- Anschrift des/ der Verbraucher(s):</span> ___________________
                  </p>
                  
                  <p>
                    <span className="font-medium">- Unterschrift des/ der Verbraucher(s)</span> (nur bei Mitteilung auf Papier): 
                    ___________________
                  </p>
                  
                  <p>
                    <span className="font-medium">- Datum:</span> ___________________
                  </p>
                </div>
                
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500">(*) Unzutreffendes streichen.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}