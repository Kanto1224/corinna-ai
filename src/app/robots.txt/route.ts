export async function GET() {
  const robotsContent = `User-agent: *
Allow: /
Disallow: /auth/
Disallow: /(dashboard)/
Disallow: /portal/
Disallow: /api/
Disallow: /chatbot-demo

# Allow access to legal pages
Allow: /impressum
Allow: /datenschutz
Allow: /agb
Allow: /wiederrufsrecht
Allow: /zahlungen-versand

Sitemap: https://chatvise.de/sitemap.xml`

  return new Response(robotsContent, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}