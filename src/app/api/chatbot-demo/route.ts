import { NextRequest, NextResponse } from 'next/server'
import OpenAi from 'openai'

const openai = new OpenAi({
  apiKey: process.env.OPEN_AI_KEY,
})

export async function POST(req: NextRequest) {
  try {
    const { message, chatHistory } = await req.json()

    // Add context from fake conversation to help AI understand the ongoing context
    const contextualHistory = [
      {
        role: 'assistant',
        content: 'Hallo! Willkommen bei der Fahrschule Schmidt! 🚗\n\nIch bin Ihr AI-Assistent für alle Fragen rund um den Führerschein.\n\n**Ich helfe bei:**\n• Preisen und Paketen\n• Terminen und Anmeldung\n• Fahrstunden\n\nWie kann ich helfen?'
      },
      {
        role: 'user',
        content: 'Was kostet der Führerschein?'
      },
      {
        role: 'assistant',
        content: '**🚗 Führerschein Klasse B - Komplettpaket:**\n\n• **Preis: 2.890€** (alles inklusive)\n• 14 Theorie-Doppelstunden\n• 12 Pflichtstunden + individuelle Fahrstunden\n• Alle Prüfungsgebühren enthalten\n\n**💸 Ratenzahlung möglich!**\n\nHaben Sie noch Fragen zu unserem Angebot?'
      },
      {
        role: 'user',
        content: 'Wie lange dauert es normalerweise?'
      },
      {
        role: 'assistant',
        content: '**⏱️ Typische Ausbildungsdauer:**\n\n• **Normal-Kurs: 3-4 Monate**\n• **Intensiv-Kurs: 2 Wochen** (3.490€)\n\n**📚 Theorie:** Ca. 2-3 Wochen\n**🚗 Praxis:** Durchschnittlich 25-30 Fahrstunden\n\n**🎯 Sie bestimmen das Tempo!**\n\nMöchten Sie einen Beratungstermin vereinbaren?'
      },
      ...chatHistory.slice(5) // Remove the first 5 messages to avoid duplication, keep any additional real conversation
    ]

    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `
          Du bist ein professioneller AI-Assistent für die Fahrschule Schmidt. 
          
          **Deine Aufgaben:**
          - Beantworte alle Fragen zu Führerschein, Fahrstunden, Preisen und Services
          - Bleibe immer freundlich, professionell und hilfsbereit
          - Verwende Emojis sparsam aber passend
          - Strukturiere deine Antworten übersichtlich mit Aufzählungen wenn nötig
          - Du hattest bereits eine Unterhaltung über Preise (2.890€) und Dauer (3-4 Monate), berücksichtige das in deinen Antworten
          
          **Wichtige Informationen zur Fahrschule Schmidt:**
          
          **🚗 PREISE & PAKETE:**
          - Führerschein Klasse B: 2.890€ (komplett)
          - Intensivkurs (2 Wochen): 3.490€  
          - Theorie + Praxis + alle Gebühren inklusive
          
          **📚 THEORIE:**
          - 14 Doppelstunden erforderlich
          - Unterricht: Mo-Do, 19:00 Uhr
          - Kursbeginn jeden Montag
          - Prüfung nach ca. 2 Wochen möglich
          
          **🚙 FAHRSTUNDEN:**  
          - Mindestens 12 Pflichtstunden
          - Durchschnitt: 25-30 Stunden total
          - Fahrstunde à 45 Minuten
          - Flexible Terminvereinbarung
          
          **⏰ ÖFFNUNGSZEITEN:**
          - Mo-Fr: 9:00-18:00 Uhr
          - Sa: 9:00-14:00 Uhr  
          - So: geschlossen
          
          **📍 STANDORT:**
          - Hauptstraße 123, 12345 Musterstadt
          - Neben dem Rathaus
          - Kostenlose Parkplätze vorhanden
          
          **💳 ZAHLUNGSMÖGLICHKEITEN:**
          - Ratenzahlung möglich
          - Kreditkarte, PayPal, Überweisung
          - Sofortige Anmeldung online möglich
          
          Wenn Kunden einen Termin vereinbaren möchten, biete konkrete Zeiten an.
          Bei Zahlungsfragen, erwähne den Online-Zahlungslink.
          Halte Antworten präzise aber vollständig.
          `
        },
        ...contextualHistory,
        {
          role: 'user',
          content: message
        }
      ],
      model: 'gpt-3.5-turbo',
      max_tokens: 500,
      temperature: 0.7,
    })

    const aiResponse = chatCompletion.choices[0].message.content

    return NextResponse.json({ 
      response: aiResponse,
      success: true 
    })

  } catch (error) {
    console.error('OpenAI API Error:', error)
    
    // Fallback response if OpenAI fails
    const fallbackResponses = [
      "Entschuldigung, ich habe gerade technische Probleme. Können Sie Ihre Frage bitte wiederholen? 🔧",
      "Es tut mir leid, momentan kann ich nicht richtig antworten. Versuchen Sie es gleich nochmal! ⚠️",
      "Ich habe ein kleines technisches Problem. Ihre Frage ist aber wichtig - bitte fragen Sie nochmal! 🛠️"
    ]
    
    return NextResponse.json({ 
      response: fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)],
      success: false 
    })
  }
}