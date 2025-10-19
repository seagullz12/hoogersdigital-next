export default function Head() {
  const siteTitle = 'Hoogers Digital';
  const siteDescription = 'AI, Analytics, Digital Strategy & Automation';
  const siteUrl = 'https://hoogersdigital.nl';
  const ogImage = 'https://hoogersdigital.nl/default-og.png';

  return (
    <>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />

      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={siteTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={ogImage} />
    </>
  );
}