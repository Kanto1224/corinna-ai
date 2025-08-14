import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'AGB - Chatvise',
  description: 'Allgemeine Geschäftsbedingungen und Kundeninformationen',
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
          
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Allgemeine Geschäftsbedingungen und Kundeninformationen
          </h1>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg space-y-12">
            
            {/* Teil I - AGB */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-orange pb-3">
                I. Allgemeine Geschäftsbedingungen
              </h2>

              {/* § 1 Grundlegende Bestimmungen */}
              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  § 1 Grundlegende Bestimmungen
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <span className="font-medium">(1)</span> Die nachstehenden Geschäftsbedingungen gelten für Verträge, 
                    die Sie mit uns als Anbieter (Chester Roussos) über die Internetseite{' '}
                    <a href="https://chatvise.de" className="text-orange hover:text-orange/80 transition-colors">
                      https://chatvise.de
                    </a>{' '}
                    schließen. Soweit nicht anders vereinbart, wird der Einbeziehung gegebenenfalls von Ihnen 
                    verwendeter eigener Bedingungen widersprochen.
                  </p>
                  <p>
                    <span className="font-medium">(2)</span> Verbraucher im Sinne der nachstehenden Regelungen ist jede 
                    natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer 
                    gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden kann. Unternehmer 
                    ist jede natürliche oder juristische Person oder eine rechtsfähige Personengesellschaft, die bei 
                    Abschluss eines Rechtsgeschäfts in Ausübung ihrer selbständigen beruflichen oder gewerblichen 
                    Tätigkeit handelt.
                  </p>
                </div>
              </section>

              {/* § 2 Zustandekommen des Vertrages */}
              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  § 2 Zustandekommen des Vertrages
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <span className="font-medium">(1)</span> Gegenstand des Vertrages ist der Verkauf von digitalen 
                    Inhalten (Daten, die in digitaler Form erstellt und bereitgestellt werden).
                  </p>
                  <p>
                    <span className="font-medium">(2)</span> Bereits mit dem Einstellen des jeweiligen digitalen Inhaltes 
                    auf unserer Internetseite, unterbreiten wir Ihnen ein verbindliches Angebot zum Abschluss eines 
                    Vertrages über das Online-Warenkorbsystem zu den in der Artikelbeschreibung angegebenen Bedingungen.
                  </p>
                  <div>
                    <p className="mb-2">
                      <span className="font-medium">(3)</span> Der Vertrag kommt über das Online-Warenkorbsystem wie folgt zustande:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-3 ml-4">
                      <p>
                        Die zum Kauf beabsichtigten digitalen Inhalte werden im &bdquo;Warenkorb&ldquo; abgelegt. Über die 
                        entsprechende Schaltfläche in der Navigationsleiste können Sie den &bdquo;Warenkorb&ldquo; aufrufen und 
                        dort jederzeit Änderungen vornehmen. Nach Anklicken der Schaltfläche &ldquo;Kasse&rdquo; oder &ldquo;Weiter zur 
                        Bestellung&rdquo; (oder ähnliche Bezeichnung) und der Eingabe der persönlichen Daten sowie der 
                        Zahlungsbedingungen werden Ihnen abschließend die Bestelldaten als Bestellübersicht angezeigt.
                      </p>
                      <p>
                        Soweit Sie als Zahlungsart ein Sofortzahl-System (z.B. PayPal (Express/Plus/Checkout), Amazon Pay, 
                        Sofort) nutzen, werden Sie entweder auf die Bestellübersichtsseite in unserem Online-Shop geführt 
                        oder auf die Internetseite des Anbieters des Sofortzahl-Systems weitergeleitet.
                      </p>
                      <p>
                        Erfolgt eine Weiterleitung zu dem jeweiligen Sofortzahl-System, nehmen Sie dort die entsprechende 
                        Auswahl bzw. Eingabe Ihrer Daten vor. Abschließend werden Ihnen auf der Internetseite des Anbieters 
                        des Sofortzahl-Systems oder nachdem Sie zurück in unseren Online-Shop geleitet wurden, die 
                        Bestelldaten als Bestellübersicht angezeigt.
                      </p>
                      <p>
                        Vor Absenden der Bestellung haben Sie die Möglichkeit, die Angaben in der Bestellübersicht nochmals 
                        zu überprüfen, zu ändern (auch über die Funktion &bdquo;zurück&ldquo; des Internetbrowsers) bzw. die Bestellung 
                        abzubrechen.
                      </p>
                      <p>
                        Mit dem Absenden der Bestellung über die entsprechende Schaltfläche (&ldquo;zahlungspflichtig bestellen&rdquo;, 
                        &ldquo;kaufen&rdquo; / &ldquo;jetzt kaufen&rdquo;, &ldquo;kostenpflichtig bestellen&rdquo;, &ldquo;bezahlen&rdquo; / &ldquo;jetzt bezahlen&rdquo; oder ähnliche 
                        Bezeichnung) erklären Sie rechtsverbindlich die Annahme des Angebotes, wodurch der Vertrag zustande kommt.
                      </p>
                    </div>
                  </div>
                  <p>
                    <span className="font-medium">(4)</span> Die Abwicklung der Bestellung und Übermittlung aller im 
                    Zusammenhang mit dem Vertragsschluss erforderlichen Informationen erfolgt per E-Mail zum Teil 
                    automatisiert. Sie haben deshalb sicherzustellen, dass die von Ihnen bei uns hinterlegte 
                    E-Mail-Adresse zutreffend ist, der Empfang der E-Mails technisch sichergestellt und insbesondere 
                    nicht durch SPAM-Filter verhindert wird.
                  </p>
                </div>
              </section>

              {/* § 3 Nutzungslizenz bei digitalen Inhalten */}
              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  § 3 Nutzungslizenz bei digitalen Inhalten
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <span className="font-medium">(1)</span> Die angebotenen digitalen Inhalte sind urheberrechtlich 
                    geschützt. Sie erhalten zu jedem bei uns erworbenen digitalen Inhalt eine Nutzungslizenz durch 
                    den jeweiligen Lizenzgeber. Art und Umfang der Nutzungslizenz ergeben sich aus den im jeweiligen 
                    Angebot genannten Lizenzbestimmungen.
                  </p>
                  <div>
                    <p className="mb-2">
                      <span className="font-medium">(2)</span> Soweit im jeweiligen Angebot nichts anderes angegeben ist, 
                      erhalten Sie eine einfache Nutzungslizenz. Diese umfasst ein nicht ausschließliches, zeitlich auf 
                      die im Angebot angegebene Nutzungsdauer beschränktes Recht zur Nutzung, insbesondere die Erlaubnis, 
                      eine Kopie des digitalen Inhaltes für Ihren persönlichen Gebrauch auf Ihrem Computer bzw. sonstigem 
                      elektronischen Gerät abzuspeichern und/oder auszudrucken.
                    </p>
                    <p className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mt-3">
                      Sie sind nicht berechtigt, die vertragsgegenständlichen digitalen Inhalte oder Teile davon zu 
                      vermieten oder weder entgeltlich noch unentgeltlich unterlizenzieren, öffentlich wiedergeben 
                      oder in sonstiger Weise zugänglich zu machen oder sonst Dritten zur Verfügung stellen.
                    </p>
                  </div>
                </div>
              </section>

              {/* § 4 Vertragslaufzeit / Kündigung */}
              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  § 4 Vertragslaufzeit / Kündigung bei Abonnement-Verträgen
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <span className="font-medium">(1)</span> Der zwischen Ihnen und uns geschlossene Abonnement-Vertrag 
                    hat eine unbestimmte Laufzeit. Der Vertrag kann von beiden Parteien mit einer Frist von einem Monat 
                    zum Monatsende (soweit im jeweiligen Angebot nichts anderes geregelt ist) gekündigt werden.
                  </p>
                  <p>
                    <span className="font-medium">(2)</span> Das Recht zur fristlosen Kündigung aus wichtigem Grund 
                    bleibt hiervon unberührt.
                  </p>
                  <p>
                    <span className="font-medium">(3)</span> Jede Kündigung muss entweder in Textform (z.B. E-Mail) 
                    oder über die auf unserer Internetpräsenz eingebundene Kündigungsschaltfläche (&ldquo;Verträge hier kündigen&rdquo; 
                    oder ähnliche Bezeichnung) erklärt und übermittelt werden.
                  </p>
                </div>
              </section>

              {/* § 5 Besondere Vereinbarungen zu Zahlungsarten */}
              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  § 5 Besondere Vereinbarungen zu angebotenen Zahlungsarten
                </h3>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      (1) Zahlung über &ldquo;PayPal&rdquo; / &ldquo;PayPal Checkout&rdquo;
                    </h4>
                    <p className="ml-4">
                      Bei Auswahl einer Zahlungsart, die über &ldquo;PayPal&rdquo; / &ldquo;PayPal Checkout&rdquo; angeboten wird, erfolgt die 
                      Zahlungsabwicklung über den Zahlungsdienstleister PayPal (Europe) S.à.r.l. et Cie, S.C.A. 
                      (22-24 Boulevard Royal L-2449, Luxemburg; &ldquo;PayPal&rdquo;). Die einzelnen Zahlungsarten über &ldquo;PayPal&rdquo; 
                      werden Ihnen unter einer entsprechend bezeichneten Schaltfläche auf unserer Internetpräsenz sowie 
                      im Online-Bestellvorgang angezeigt. Für die Zahlungsabwicklung kann sich &ldquo;PayPal&rdquo; weiterer 
                      Zahlungsdienste bedienen; soweit hierfür besondere Zahlungsbedingungen gelten, werden Sie auf 
                      diese gesondert hingewiesen. Nähere Informationen zu &ldquo;PayPal&rdquo; finden Sie unter{' '}
                      <a href="https://www.paypal.com/de/webapps/mpp/ua/legalhub-full" 
                         className="text-orange hover:text-orange/80 transition-colors break-all">
                        https://www.paypal.com/de/webapps/mpp/ua/legalhub-full
                      </a>.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      (2) Zahlung über &ldquo;Stripe&rdquo;
                    </h4>
                    <p className="ml-4">
                      Bei Auswahl einer Zahlungsart, die über &ldquo;Stripe&rdquo; angeboten wird, erfolgt die Zahlungsabwicklung 
                      über den Zahlungsdienstleister Stripe Payments Europe Limited (1 Grand Canal Street Lower, 
                      Grand Canal Dock, Dublin, D02 H210, Ireland; &ldquo;Stripe&rdquo;). Die einzelnen Zahlungsarten über &ldquo;Stripe&rdquo; 
                      werden Ihnen unter einer entsprechend bezeichneten Schaltfläche auf unserer Internetpräsenz sowie 
                      im Online-Bestellvorgang angezeigt. Für die Zahlungsabwicklung kann sich &ldquo;Stripe&rdquo; weiterer 
                      Zahlungsdienste bedienen; soweit hierfür besondere Zahlungsbedingungen gelten, werden Sie auf 
                      diese gesondert hingewiesen. Nähere Informationen zu &ldquo;Stripe&rdquo; finden Sie unter{' '}
                      <a href="https://stripe.com/de" 
                         className="text-orange hover:text-orange/80 transition-colors">
                        https://stripe.com/de
                      </a>.
                    </p>
                  </div>
                </div>
              </section>

              {/* § 6 Zurückbehaltungsrecht */}
              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  § 6 Zurückbehaltungsrecht
                </h3>
                <p className="text-gray-600">
                  Ein Zurückbehaltungsrecht können Sie nur ausüben, soweit es sich um Forderungen aus demselben 
                  Vertragsverhältnis handelt.
                </p>
              </section>

              {/* § 7 Gewährleistung */}
              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  § 7 Gewährleistung
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <span className="font-medium">(1)</span> Es bestehen die gesetzlichen Mängelhaftungsrechte.
                  </p>
                  <p>
                    <span className="font-medium">(2)</span> Soweit ein Merkmal des digitalen Inhalts von den objektiven 
                    Anforderungen abweicht, gilt die Abweichung nur dann als vereinbart, wenn Sie vor Abgabe der 
                    Vertragserklärung durch uns über selbige in Kenntnis gesetzt wurden und die Abweichung ausdrücklich 
                    und gesondert zwischen den Vertragsparteien vereinbart wurde.
                  </p>
                  <div>
                    <p className="mb-2">
                      <span className="font-medium">(3)</span> Soweit Sie Unternehmer sind, gilt abweichend von den 
                      vorstehenden Gewährleistungsregelungen:
                    </p>
                    <div className="ml-4 space-y-2">
                      <p>
                        <span className="font-medium">a)</span> Als Beschaffenheit des digitalen Inhalts gelten nur unsere 
                        eigenen Angaben und die Produktbeschreibung des Herstellers als vereinbart, nicht jedoch sonstige 
                        Werbung, öffentliche Anpreisungen und Äußerungen des Herstellers.
                      </p>
                      <p>
                        <span className="font-medium">b)</span> Bei Mängeln leisten wir nach unserer Wahl Gewähr durch 
                        Nachbesserung oder Nachlieferung. Schlägt die Mangelbeseitigung fehl, können Sie nach Ihrer Wahl 
                        Minderung verlangen oder vom Vertrag zurücktreten. Die Mängelbeseitigung gilt nach erfolglosem 
                        zweiten Versuch als fehlgeschlagen, wenn sich nicht insbesondere aus der Art des digitalen Inhalts 
                        oder des Mangels oder den sonstigen Umständen etwas anderes ergibt.
                      </p>
                      <div>
                        <p>
                          <span className="font-medium">c)</span> Die Gewährleistungsfrist beträgt ein Jahr ab Ablieferung 
                          des digitalen Inhalts. Die Fristverkürzung gilt nicht:
                        </p>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                          <li>
                            für uns zurechenbare schuldhaft verursachte Schäden aus der Verletzung des Lebens, des 
                            Körpers oder der Gesundheit und bei vorsätzlich oder grob fahrlässig verursachten sonstigen Schäden;
                          </li>
                          <li>
                            soweit wir den Mangel arglistig verschwiegen oder eine Garantie für die Beschaffenheit des 
                            digitalen Inhalts übernommen haben;
                          </li>
                          <li>
                            bei Sachen, die entsprechend ihrer üblichen Verwendungsweise für ein Bauwerk verwendet worden 
                            sind und dessen Mangelhaftigkeit verursacht haben;
                          </li>
                          <li>
                            bei gesetzlichen Rückgriffsansprüchen, die Sie im Zusammenhang mit Mängelrechten gegen uns haben.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* § 8 Rechtswahl */}
              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  § 8 Rechtswahl
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <span className="font-medium">(1)</span> Es gilt deutsches Recht. Bei Verbrauchern gilt diese 
                    Rechtswahl nur, soweit hierdurch der durch zwingende Bestimmungen des Rechts des Staates des 
                    gewöhnlichen Aufenthaltes des Verbrauchers gewährte Schutz nicht entzogen wird (Günstigkeitsprinzip).
                  </p>
                  <p>
                    <span className="font-medium">(2)</span> Die Bestimmungen des UN-Kaufrechts finden ausdrücklich 
                    keine Anwendung.
                  </p>
                </div>
              </section>
            </div>

            <div className="border-t-2 border-gray-200"></div>

            {/* Teil II - Kundeninformationen */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-orange pb-3">
                II. Kundeninformationen
              </h2>

              {/* 1. Identität des Verkäufers */}
              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  1. Identität des Verkäufers
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-gray-600">
                  <p className="font-semibold text-gray-800">Chester Roussos</p>
                  <p>Klarweg 27</p>
                  <p>85399 Hallbergmoos</p>
                  <p>Deutschland</p>
                  <p>
                    Telefon:{' '}
                    <a href="tel:01721686476" className="text-orange hover:text-orange/80 transition-colors">
                      01721686476
                    </a>
                  </p>
                  <p>
                    E-Mail:{' '}
                    <a href="mailto:chesterroussos.business@gmail.com" 
                       className="text-orange hover:text-orange/80 transition-colors break-all">
                      chesterroussos.business@gmail.com
                    </a>
                  </p>
                </div>
                <p className="text-gray-600 mt-4">
                  Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor 
                  Verbraucherschlichtungsstellen teilzunehmen.
                </p>
              </section>

              {/* 2. Informationen zum Zustandekommen des Vertrages */}
              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  2. Informationen zum Zustandekommen des Vertrages
                </h3>
                <p className="text-gray-600">
                  Die technischen Schritte zum Vertragsschluss, der Vertragsschluss selbst und die 
                  Korrekturmöglichkeiten erfolgen nach Maßgabe der Regelungen &ldquo;Zustandekommen des Vertrages&rdquo; 
                  unserer Allgemeinen Geschäftsbedingungen (Teil I.).
                </p>
              </section>

              {/* 3. Vertragssprache, Vertragstextspeicherung */}
              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  3. Vertragssprache, Vertragstextspeicherung
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <span className="font-medium">3.1.</span> Vertragssprache ist deutsch.
                  </p>
                  <p>
                    <span className="font-medium">3.2.</span> Der vollständige Vertragstext wird von uns nicht 
                    gespeichert. Vor Absenden der Bestellung über das Online - Warenkorbsystem können die Vertragsdaten 
                    über die Druckfunktion des Browsers ausgedruckt oder elektronisch gesichert werden. Nach Zugang 
                    der Bestellung bei uns werden die Bestelldaten, die gesetzlich vorgeschriebenen Informationen bei 
                    Fernabsatzverträgen und die Allgemeinen Geschäftsbedingungen nochmals per E-Mail an Sie übersandt.
                  </p>
                </div>
              </section>

              {/* 4. Wesentliche Merkmale */}
              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  4. Wesentliche Merkmale der Ware oder Dienstleistung
                </h3>
                <p className="text-gray-600">
                  Die wesentlichen Merkmale der Ware und/oder Dienstleistung finden sich im jeweiligen Angebot.
                </p>
              </section>

              {/* 5. Preise und Zahlungsmodalitäten */}
              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  5. Preise und Zahlungsmodalitäten
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <span className="font-medium">5.1.</span> Die in den jeweiligen Angeboten angeführten Preise sowie 
                    die Versandkosten stellen Gesamtpreise dar. Sie beinhalten alle Preisbestandteile einschließlich 
                    aller anfallenden Steuern.
                  </p>
                  <p>
                    <span className="font-medium">5.2.</span> Es fallen keine Versandkosten an.
                  </p>
                  <p>
                    <span className="font-medium">5.3.</span> Die Ihnen zur Verfügung stehenden Zahlungsarten sind unter 
                    einer entsprechend bezeichneten Schaltfläche auf unserer Internetpräsenz oder im jeweiligen Angebot 
                    ausgewiesen.
                  </p>
                  <p>
                    <span className="font-medium">5.4.</span> Soweit bei den einzelnen Zahlungsarten nicht anders 
                    angegeben, sind die Zahlungsansprüche aus dem geschlossenen Vertrag sofort zur Zahlung fällig.
                  </p>
                </div>
              </section>

              {/* 6. Bereitstellung */}
              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  6. Bereitstellung
                </h3>
                <p className="text-gray-600">
                  <span className="font-medium">6.1.</span> Die Bedingungen für die Bereitstellung, den 
                  Bereitstellungstermin sowie gegebenenfalls bestehenden Bereitstellungsbeschränkungen finden sich 
                  unter einer entsprechend bezeichneten Schaltfläche auf unserer Internetpräsenz oder im jeweiligen 
                  Angebot.
                </p>
              </section>

              {/* 7. Gesetzliches Mängelhaftungsrecht */}
              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  7. Gesetzliches Mängelhaftungsrecht
                </h3>
                <p className="text-gray-600">
                  Die Mängelhaftung richtet sich nach der Regelung &ldquo;Gewährleistung&rdquo; in unseren Allgemeinen 
                  Geschäftsbedingungen (Teil I).
                </p>
              </section>

              {/* 8. Vertragslaufzeit / Kündigung */}
              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  8. Vertragslaufzeit / Kündigung
                </h3>
                <p className="text-gray-600">
                  Informationen zur Laufzeit des Vertrages sowie den Kündigungsbedingungen finden Sie in der 
                  Regelung &ldquo;Vertragslaufzeit / Kündigung bei Abonnement-Verträgen&rdquo; in unseren Allgemeinen 
                  Geschäftsbedingungen (Teil I) sowie im jeweiligen Angebot.
                </p>
              </section>
            </div>

            {/* Footer Information */}
            <div className="border-t-2 border-gray-200 pt-8">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <p className="text-sm text-gray-600">
                  Diese AGB und Kundeninformationen wurden von den auf IT-Recht spezialisierten Juristen des 
                  Händlerbundes erstellt und werden permanent auf Rechtskonformität geprüft. Die Händlerbund 
                  Management AG garantiert für die Rechtssicherheit der Texte und haftet im Falle von Abmahnungen. 
                  Nähere Informationen dazu finden Sie unter:{' '}
                  <a href="https://www.haendlerbund.de/de/leistungen/rechtssicherheit/agb-service" 
                     className="text-orange hover:text-orange/80 transition-colors break-all">
                    https://www.haendlerbund.de/de/leistungen/rechtssicherheit/agb-service
                  </a>
                </p>
                <p className="text-sm text-gray-500 mt-3">
                  <span className="font-semibold">Letzte Aktualisierung:</span> 07.08.2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
