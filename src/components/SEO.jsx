import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Jaideep - Full Stack Developer | MERN Stack | React Developer',
  description = 'Full Stack Developer specializing in MERN stack. Building modern web applications with React, Node.js, Express, and MongoDB.',
  canonicalUrl = '',
  ogType = 'website',
  ogImage = 'https://jaideep-o1z3.onrender.com/images/bg15.jpg',
  keywords = 'Full Stack Developer, MERN Stack, React Developer, JavaScript, Node.js, MongoDB, Portfolio',
}) => {
  const siteUrl = 'https://jaideep-o1z3.onrender.com';
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl.startsWith('/') ? '' : '/'}${canonicalUrl}` : siteUrl;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.ico" sizes="16x16" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
};

export default SEO;
