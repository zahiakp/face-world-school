'use client'; // Mark this as a Client Component

import Head from 'next/head';
import { usePathname } from 'next/navigation'; // Import from next/navigation

type SeoProps = {
  title: string;
  description: string;
  ogImage?: string;
};

const SEO: React.FC<SeoProps> = ({ title, description, ogImage }) => {
  const pathname = usePathname(); // Get the current path
  const siteUrl = 'https://faceschool.in'; // Your primary domain
  const canonicalUrl = `${siteUrl}${pathname === '/' ? '' : pathname}`;

  const fullTitle = `${title} | Face World Leadership School`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      {ogImage && <meta property="twitter:image" content={ogImage} />}
    </Head>
  );
};

export default SEO;
