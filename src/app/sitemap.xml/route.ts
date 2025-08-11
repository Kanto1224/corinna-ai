export async function GET() {
  const baseUrl = 'https://chatvise.de'
  
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: '1.0',
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date().toISOString(),
      changeFreq: 'yearly',
      priority: '0.5',
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date().toISOString(),
      changeFreq: 'yearly',
      priority: '0.5',
    },
    {
      url: `${baseUrl}/agb`,
      lastModified: new Date().toISOString(),
      changeFreq: 'yearly',
      priority: '0.5',
    },
    {
      url: `${baseUrl}/wiederrufsrecht`,
      lastModified: new Date().toISOString(),
      changeFreq: 'yearly',
      priority: '0.5',
    },
    {
      url: `${baseUrl}/zahlungen-versand`,
      lastModified: new Date().toISOString(),
      changeFreq: 'yearly',
      priority: '0.5',
    },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}