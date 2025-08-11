import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung - Chatvise',
  description: 'Datenschutzerklärung und Datenschutzhinweise',
}

export default function DatenschutzPage() {
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
          
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg space-y-8">
            
            {/* Einleitung */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded space-y-3">
              <p className="text-gray-600">
                Soweit nachstehend keine anderen Angaben gemacht werden, ist die Bereitstellung Ihrer personenbezogenen 
                Daten weder gesetzlich oder vertraglich vorgeschrieben, noch für einen Vertragsabschluss erforderlich. 
                Sie sind zur Bereitstellung der Daten nicht verpflichtet. Eine Nichtbereitstellung hat keine Folgen. 
                Dies gilt nur soweit bei den nachfolgenden Verarbeitungsvorgängen keine anderweitige Angabe gemacht wird.
              </p>
              <p className="text-gray-600">
                <span className="font-medium">"Personenbezogene Daten"</span> sind alle Informationen, die sich auf eine 
                identifizierte oder identifizierbare natürliche Person beziehen.
              </p>
            </div>

            {/* Server-Logfiles */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">Server-Logfiles</h2>
              <div className="space-y-3 text-gray-600">
                <p>
                  Sie können unsere Webseiten besuchen, ohne Angaben zu Ihrer Person zu machen.
                </p>
                <p>
                  Bei jedem Zugriff auf unsere Website werden an uns oder unseren Webhoster / IT-Dienstleister 
                  Nutzungsdaten durch Ihren Internet Browser übermittelt und in Protokolldaten (sog. Server-Logfiles) 
                  gespeichert. Zu diesen gespeicherten Daten gehören z.B. der Name der aufgerufenen Seite, Datum und 
                  Uhrzeit des Abrufs, die IP-Adresse, die übertragene Datenmenge und der anfragende Provider.
                </p>
                <p>
                  Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO aus unserem überwiegenden 
                  berechtigten Interesse an der Gewährleistung eines störungsfreien Betriebs unserer Website sowie 
                  zur Verbesserung unseres Angebotes.
                </p>
              </div>
            </section>

            {/* Kontakt */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">Kontakt</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Verantwortlicher</h3>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    <p className="font-semibold text-gray-800">Chester Roussos</p>
                    <p className="text-gray-600">Klarweg 27</p>
                    <p className="text-gray-600">85399 Hallbergmoos</p>
                    <p className="text-gray-600">Deutschland</p>
                    <p className="text-gray-600">
                      <a href="tel:01721686476" className="text-orange hover:text-orange/80 transition-colors">
                        01721686476
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <a href="mailto:chesterroussos.business@gmail.com" 
                         className="text-orange hover:text-orange/80 transition-colors break-all">
                        chesterroussos.business@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Initiativ-Kontaktaufnahme des Kunden per E-Mail</h3>
                  <div className="space-y-3 text-gray-600">
                    <p>
                      Wenn Sie per E-Mail initiativ mit uns in Geschäftskontakt treten, erheben wir Ihre personenbezogenen 
                      Daten (Name, E-Mail-Adresse, Nachrichtentext) nur in dem von Ihnen zur Verfügung gestellten Umfang. 
                      Die Datenverarbeitung dient der Bearbeitung und Beantwortung Ihrer Kontaktanfrage.
                    </p>
                    <p>
                      Wenn die Kontaktaufnahme der Durchführung vorvertraglicher Maßnahmen (bspw. Beratung bei Kaufinteresse, 
                      Angebotserstellung) dient oder einen bereits zwischen Ihnen und uns geschlossenen Vertrag betrifft, 
                      erfolgt diese Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO.
                    </p>
                    <p>
                      Erfolgt die Kontaktaufnahme aus anderen Gründen, erfolgt diese Datenverarbeitung auf Grundlage des 
                      Art. 6 Abs. 1 lit. f DSGVO aus unserem überwiegenden berechtigten Interesse an der Bearbeitung und 
                      Beantwortung Ihrer Anfrage.
                    </p>
                    <p>
                      Ihre E-Mail-Adresse nutzen wir nur zur Bearbeitung Ihrer Anfrage. Ihre Daten werden anschließend unter 
                      Beachtung gesetzlicher Aufbewahrungsfristen gelöscht, sofern Sie der weitergehenden Verarbeitung und 
                      Nutzung nicht zugestimmt haben.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Kundenkonto */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">Kundenkonto & Bestellungen</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Kundenkonto</h3>
                  <p className="text-gray-600">
                    Bei der Eröffnung eines Kundenkontos erheben wir Ihre personenbezogenen Daten in dem dort angegebenen 
                    Umfang. Die Datenverarbeitung dient dem Zweck, Ihr Einkaufserlebnis zu verbessern und die Bestellabwicklung 
                    zu vereinfachen. Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. a DSGVO mit Ihrer 
                    Einwilligung. Sie können Ihre Einwilligung jederzeit durch Mitteilung an uns widerrufen, ohne dass die 
                    Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung berührt wird. 
                    Ihr Kundenkonto wird anschließend gelöscht.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">
                    Erhebung, Verarbeitung und Weitergabe personenbezogener Daten bei Bestellungen
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>
                      Bei der Bestellung erheben und verarbeiten wir Ihre personenbezogenen Daten nur, soweit dies zur 
                      Erfüllung und Abwicklung Ihrer Bestellung sowie zur Bearbeitung Ihrer Anfragen erforderlich ist. 
                      Die Bereitstellung der Daten ist für den Vertragsschluss erforderlich. Eine Nichtbereitstellung hat 
                      zur Folge, dass kein Vertrag geschlossen werden kann. Die Verarbeitung erfolgt auf Grundlage des 
                      Art. 6 Abs. 1 lit. b DSGVO.
                    </p>
                    <p>
                      Eine Weitergabe Ihrer Daten erfolgt dabei beispielsweise an Versandunternehmen, Dropshipping- bzw. 
                      Fulfillment-Anbieter, Zahlungsdienstleister, Diensteanbieter für die Bestellabwicklung und IT-Dienstleister. 
                      In allen Fällen beachten wir strikt die gesetzlichen Vorgaben. Der Umfang der Datenübermittlung 
                      beschränkt sich auf ein Mindestmaß.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Bewertungen & Werbung */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">Bewertungen & Werbung</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Websitelogo für Google Kundenrezensionen</h3>
                  <div className="space-y-3 text-gray-600">
                    <p>
                      Auf unserer Webseite ist das Websitelogo für Google Kundenrezensionen der Google LLC 
                      (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; „Google") eingebunden.
                    </p>
                    <p>
                      Die Einbindung dient dem Zweck, Anzahl und Ergebnis unsere bisher über Google erhaltenen Bewertungen 
                      anzuzeigen und mit der Teilnahme an diesem Programm zu werben.
                    </p>
                    <p>
                      Um das Logo auf unserer Website anzuzeigen und Ihnen bei Google personalisierte Werbeanzeigen 
                      anzuzeigen, setzt Google Cookies ein. Dabei kann u.a. Ihre IP-Adresse verarbeitet und an Google 
                      übermittelt werden.
                    </p>
                    <p>
                      Nähere Informationen zu Nutzungsbedingungen und Datenschutz bei Verwendung von Google Kundenrezensionen 
                      finden Sie unter{' '}
                      <a href="https://www.google.com/shopping/customerreviews/static/tos/de/1_01_tos.html" 
                         className="text-orange hover:text-orange/80 transition-colors break-all">
                        Google Kundenrezensionen
                      </a>{' '}
                      sowie unter{' '}
                      <a href="https://policies.google.com/privacy?hl=de" 
                         className="text-orange hover:text-orange/80 transition-colors">
                        Google Datenschutz
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">
                    Verwendung der E-Mail-Adresse für die Zusendung von Direktwerbung
                  </h3>
                  <p className="text-gray-600">
                    Wir nutzen Ihre E-Mail-Adresse, die wir im Rahmen des Verkaufes einer Ware oder Dienstleistung 
                    erhalten haben, für die elektronische Übersendung von Werbung für eigene Waren oder Dienstleistungen, 
                    die denen ähnlich sind, die Sie bereits bei uns erworben haben, soweit Sie dieser Verwendung nicht 
                    widersprochen haben. Sie können dieser Verwendung Ihrer E-Mail-Adresse jederzeit durch Mitteilung 
                    an uns widersprechen.
                  </p>
                </div>
              </div>
            </section>

            {/* Zahlungsdienstleister */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">Zahlungsdienstleister</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Verwendung von PayPal Check-Out</h3>
                  <div className="space-y-3 text-gray-600">
                    <p>
                      Wir verwenden auf unserer Website den Zahlungsdienst PayPal Check-Out der PayPal (Europe) S.à.r.l. 
                      et Cie, S.C.A. (22-24 Boulevard Royal L-2449, Luxemburg; "PayPal").
                    </p>
                    <p>
                      Mit Auswahl und Nutzung von Zahlung via PayPal werden die zur Zahlungsabwicklung erforderlichen 
                      Daten an PayPal übermittelt, um den Vertrag mit Ihnen mit der gewählten Zahlart erfüllen zu können. 
                      Diese Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO.
                    </p>
                    <p>
                      Bei einzelnen Zahlungsarten wie Kreditkarte via PayPal, Lastschrift via PayPal oder „Später bezahlen" 
                      via PayPal behält sich PayPal das Recht vor, ggf. eine Bonitätsauskunft einzuholen.
                    </p>
                    <p>
                      Nähere Informationen zur Datenverarbeitung bei Verwendung von PayPal finden Sie in der dazugehörigen 
                      Datenschutzerklärung unter{' '}
                      <a href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full" 
                         className="text-orange hover:text-orange/80 transition-colors break-all">
                        PayPal Datenschutz
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Verwendung des Zahlungsdienstleisters Stripe</h3>
                  <div className="space-y-3 text-gray-600">
                    <p>
                      Wir verwenden auf unserer Website den Zahlungsdienst Stripe der Stripe Payments Europe Ltd., 
                      1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland).
                    </p>
                    <p>
                      Mit Auswahl und Nutzung von Stripe werden die zur Zahlungsabwicklung erforderlichen Daten an 
                      Stripe übermittelt, um den Vertrag mit Ihnen mit der gewählten Zahlart erfüllen zu können. 
                      Diese Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO.
                    </p>
                    <p>
                      Alle Stripe-Transaktionen unterliegen der Stripe-Datenschutzerklärung. Diese finden Sie unter{' '}
                      <a href="https://stripe.com/de/privacy" 
                         className="text-orange hover:text-orange/80 transition-colors">
                        Stripe Datenschutz
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Google Fonts */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">Verwendung von Google Fonts</h2>
              <div className="space-y-3 text-gray-600">
                <p>
                  Wir verwenden auf unserer Website Google Fonts der Google Ireland Limited 
                  (Gordon House, Barrow Street, Dublin 4, Irland; "Google").
                </p>
                <p>
                  Die Datenverarbeitung dient dem Zweck der einheitlichen Darstellung von Schriftarten auf unserer Website. 
                  Um die Schriftarten zu laden, wird beim Seitenaufruf eine Verbindung zu Servern von Google hergestellt.
                </p>
                <p>
                  Ihre Daten werden gegebenenfalls in die USA übermittelt. Für die USA ist ein Angemessenheitsbeschluss 
                  der EU-Kommission vorhanden, das Trans-Atlantic Data Privacy Framework (TADPF).
                </p>
                <p>
                  Nähere Informationen zur Datenverarbeitung und zum Datenschutz finden Sie unter{' '}
                  <a href="https://www.google.de/intl/de/policies/" 
                     className="text-orange hover:text-orange/80 transition-colors">
                    Google Datenschutz
                  </a>{' '}
                  sowie unter{' '}
                  <a href="https://developers.google.com/fonts/faq" 
                     className="text-orange hover:text-orange/80 transition-colors">
                    Google Fonts FAQ
                  </a>
                </p>
              </div>
            </section>

            {/* Betroffenenrechte und Speicherdauer */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">Betroffenenrechte und Speicherdauer</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Dauer der Speicherung</h3>
                  <p className="text-gray-600">
                    Nach vollständiger Vertragsabwicklung werden die Daten zunächst für die Dauer der Gewährleistungsfrist, 
                    danach unter Berücksichtigung gesetzlicher, insbesondere steuer- und handelsrechtlicher Aufbewahrungsfristen 
                    gespeichert und dann nach Fristablauf gelöscht, sofern Sie der weitergehenden Verarbeitung und Nutzung 
                    nicht zugestimmt haben.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Rechte der betroffenen Person</h3>
                  <div className="space-y-3 text-gray-600">
                    <p>
                      Ihnen stehen bei Vorliegen der gesetzlichen Voraussetzungen folgende Rechte nach Art. 15 bis 20 DSGVO zu: 
                      Recht auf Auskunft, auf Berichtigung, auf Löschung, auf Einschränkung der Verarbeitung, auf Datenübertragbarkeit.
                    </p>
                    <p>
                      Außerdem steht Ihnen nach Art. 21 Abs. 1 DSGVO ein Widerspruchsrecht gegen die Verarbeitungen zu, 
                      die auf Art. 6 Abs. 1 f DSGVO beruhen, sowie gegen die Verarbeitung zum Zwecke von Direktwerbung.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Beschwerderecht bei der Aufsichtsbehörde</h3>
                  <div className="space-y-3 text-gray-600">
                    <p>
                      Sie haben gemäß Art. 77 DSGVO das Recht, sich bei der Aufsichtsbehörde zu beschweren, wenn Sie der 
                      Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten nicht rechtmäßig erfolgt.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800 mb-2">
                        Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)
                      </p>
                      <p>Promenade 18</p>
                      <p>91522 Ansbach</p>
                      <p>Tel.: +49 981 1800930</p>
                      <p>Fax: +49 981 180093800</p>
                      <p>
                        E-Mail:{' '}
                        <a href="mailto:poststelle@lda.bayern.de" 
                           className="text-orange hover:text-orange/80 transition-colors">
                          poststelle@lda.bayern.de
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Widerspruchsrecht</h3>
                  <div className="space-y-3 text-gray-600">
                    <p>
                      Beruhen die hier aufgeführten personenbezogenen Datenverarbeitungen auf Grundlage unseres berechtigten 
                      Interesses nach Art. 6 Abs. 1 lit. f DSGVO, haben Sie das Recht aus Gründen, die sich aus Ihrer 
                      besonderen Situation ergeben, jederzeit diesen Verarbeitungen mit Wirkung für die Zukunft zu widersprechen.
                    </p>
                    <p>
                      Nach erfolgtem Widerspruch wird die Verarbeitung der betroffenen Daten beendet, es sei denn, wir können 
                      zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihren Interessen, Rechten und 
                      Freiheiten überwiegen.
                    </p>
                    <p className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
                      Erfolgt die personenbezogene Datenverarbeitung zu Zwecken der Direktwerbung, können Sie dieser 
                      Verarbeitung jederzeit durch Mitteilung an uns widersprechen. Nach erfolgtem Widerspruch beenden 
                      wir die Verarbeitung der betroffenen Daten zum Zwecke der Direktwerbung.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="border-t-2 border-gray-200 pt-6">
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Letzte Aktualisierung:</span> 07.08.2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}