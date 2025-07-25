    import React from 'react';
    import { Helmet } from 'react-helmet-async';

    const SEO = ({
      title = "Victor A. | Fullstack Developer & Designer", // Default title for your portfolio
      description = "I'm Victor, a fullstack developer and designer building high-impact, elegant digital experiences with React, Node.js, Firebase, and Tailwind CSS. Open for internships and freelance projects.", // Default description
      name = "Victor Achede", // Your full name
      type = "website", // Type of content (e.g., website, article, profile)
      keywords = "Victor Achede, fullstack developer, web developer, React, Node.js, Firebase, Tailwind CSS, portfolio, web design, freelance, internships, Nigeria, Asuir", // Relevant keywords for your site
      ogImage = "/og.png", // Path to your Open Graph image in the public folder
      ogUrl = "https://portfolio-chi-sandy-8tknwzpa5s.vercel.app/", // Your website's live Vercel URL (IMPORTANT: REPLACE THIS!)
    }) => {
      // Ensure the ogUrl is a full absolute URL for social media crawlers
      const absoluteOgUrl = ogUrl.startsWith('http') ? ogUrl : `https://${ogUrl}`;
      // Construct absolute path for OG image, assuming it's in the public folder
      const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `${absoluteOgUrl}${ogImage}`;

      return (
        <Helmet>
          {/* Primary Meta Tags for SEO */}
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <link rel="canonical" href={absoluteOgUrl} /> {/* Canonical URL helps SEO avoid duplicate content issues */}

          {/* Open Graph / Facebook / LinkedIn / WhatsApp */}
          <meta property="og:type" content={type} />
          <meta property="og:url" content={absoluteOgUrl} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={absoluteOgImage} />
          <meta property="og:image:width" content="1200" /> {/* Recommended OG image width */}
          <meta property="og:image:height" content="630" /> {/* Recommended OG image height */}

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" /> {/* Use summary_large_image for large image previews */}
          <meta name="twitter:creator" content={`@${name.replace(/\s/g, '')}`} /> {/* Your Twitter handle if you have one, e.g., @VictorAchede */}
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={absoluteOgImage} />

          {/* Favicons (assuming you placed generated files directly in public/ folder) */}
          {/* These links are relative to your public folder */}
          <link rel="icon" href="/favicon.ico" sizes="any" /> {/* Standard .ico favicon */}
          <link rel="icon" href="/favicon 16x16.png" type="image/svg+xml" /> {/* Modern SVG favicon */}
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> {/* Apple touch icon for iOS devices */}
          <link rel="manifest"/> {/* Web app manifest for progressive web apps */}

          {/* Add any other specific meta tags here if needed */}
        </Helmet>
      );
    };

    export default SEO;
    