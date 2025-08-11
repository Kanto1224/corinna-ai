import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/context/them-provider'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://chatvise.de'),
  title: {
    default: 'Chatvise - KI-gestützter Chatbot für Ihre Website | 24/7 Kundensupport',
    template: '%s | Chatvise'
  },
  description: 'Automatisieren Sie Ihren Kundensupport mit Chatvise - dem intelligenten KI-Chatbot. Lead-Generierung, 24/7 Verfügbarkeit und nahtlose Website-Integration. Kostenlos starten!',
  keywords: ['KI Chatbot', 'Kundensupport', 'Automatisierung', 'Lead-Generierung', 'Website Integration', 'AI Assistant', 'Customer Service'],
  authors: [{ name: 'Chester Roussos', url: 'https://chatvise.de' }],
  creator: 'Chatvise',
  publisher: 'Chatvise',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://chatvise.de',
    title: 'Chatvise - KI-gestützter Chatbot für Ihre Website',
    description: 'Automatisieren Sie Ihren Kundensupport mit unserem intelligenten KI-Chatbot. 24/7 Verfügbarkeit, Lead-Generierung und nahtlose Integration.',
    siteName: 'Chatvise',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Chatvise - KI Chatbot für Websites',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chatvise - KI-gestützter Chatbot für Ihre Website',
    description: 'Automatisieren Sie Ihren Kundensupport mit unserem intelligenten KI-Chatbot. 24/7 Verfügbarkeit, Lead-Generierung und nahtlose Integration.',
    images: ['/images/logo.png'],
    creator: '@chatvise',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://chatvise.de',
  },
  category: 'technology',
  classification: 'Business',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="de">
        <head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/images/logo.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#f97316" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Chatvise" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="msapplication-TileColor" content="#f97316" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        </head>
        <body className={jakarta.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
