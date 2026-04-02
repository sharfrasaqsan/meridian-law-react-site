import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, canonical, ogType = 'website' }) {
  const fullTitle = `${title} | Meridian Law Group — UK Startup & Technology Solicitors`
  const siteUrl = 'https://meridianlaw.co.uk' // Placeholder
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl

  return (
    <Helmet>
      {/* Title */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Meridian Law Group" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Keywords */}
      <meta name="keywords" content="London startup law firm, tech solicitors UK, venture capital lawyers London, company incorporation UK, SEIS EIS legal advice, software scaling legal, UK GDPR compliance, commercial contracts London" />
    </Helmet>
  )
}
