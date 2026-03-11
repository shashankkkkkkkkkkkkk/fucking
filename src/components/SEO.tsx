import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  schema?: any;
}

export const SEO: React.FC<SEOProps> = ({
  title = "FenX AI | Autonomous AI Systems For Modern Businesses",
  description = "FenX AI builds intelligent automation that captures, follows up, and converts customers automatically. The future of autonomous business systems.",
  canonical = "https://fenx.ai",
  ogType = "website",
  ogImage = "/fenx.png",
  twitterCard = "summary_large_image",
  schema
}) => {
  const siteTitle = title.includes("FenX AI") ? title : `${title} | FenX AI`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="FenX AI" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export const defaultSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FenX AI",
  "url": "https://fenx.ai",
  "logo": "/fenx.png",
  "founder": {
    "@type": "Person",
    "name": "Shashank Thamali",
    "jobTitle": "Founder & CEO"
  },
  "sameAs": [
    "https://twitter.com/fenxai",
    "https://linkedin.com/company/fenxai"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-234-567-890",
    "contactType": "customer service",
    "areaServed": ["US", "AE", "IN", "GB", "SG"],
    "availableLanguage": "en"
  }
};

export const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "FenX AI Platform",
  "operatingSystem": "Web",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "128"
  }
};
