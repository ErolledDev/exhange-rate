// SEO helper functions

// Generate structured data for currency exchange website
function generateStructuredData(pageType, data = {}) {
  let structuredData = {};

  switch (pageType) {
    case 'home':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'name': 'Global Exchange - Currency Converter and Exchange Rates',
        'description': 'Convert currencies and check live exchange rates with our free online currency converter. Real-time data and historical charts.',
        'url': window.location.origin,
        'potentialAction': {
          '@type': 'SearchAction',
          'target': `${window.location.origin}?search={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      };
      break;

    case 'rates':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'FinancialProduct',
        'name': 'Global Exchange Rates',
        'description': 'Live exchange rates for all major world currencies. Updated regularly with reliable market data.',
        'provider': {
          '@type': 'Organization',
          'name': 'Global Exchange',
          'url': window.location.origin
        }
      };
      break;

    case 'calculator':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'FinancialProduct',
        'name': 'Currency Exchange Calculator',
        'description': 'Free online currency converter with live exchange rates. Convert between all major world currencies instantly.',
        'provider': {
          '@type': 'Organization',
          'name': 'Global Exchange',
          'url': window.location.origin
        }
      };
      break;

    case 'about':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        'name': 'About Global Exchange',
        'description': 'Learn about Global Exchange, the leading provider of currency conversion tools and exchange rate data.',
        'publisher': {
          '@type': 'Organization',
          'name': 'Global Exchange',
          'logo': {
            '@type': 'ImageObject',
            'url': `${window.location.origin}/images/logo.png`
          }
        }
      };
      break;

    case 'contact':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        'name': 'Contact Global Exchange',
        'description': 'Contact our team with questions about currency exchange rates, our services, or for support.',
        'publisher': {
          '@type': 'Organization',
          'name': 'Global Exchange',
          'contactPoint': {
            '@type': 'ContactPoint',
            'telephone': '+1-234-567-8901',
            'contactType': 'customer service',
            'email': 'support@globalexchange.com',
            'availableLanguage': ['English']
          }
        }
      };
      break;

    default:
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': data.title || 'Global Exchange',
        'description': data.description || 'Currency exchange rates and converter'
      };
  }

  return `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`;
}

// Generate meta tags for SEO
function generateMetaTags(page, data = {}) {
  const pageInfo = {
    home: {
      title: 'Global Exchange - Live Currency Rates & Converter',
      description: 'Access real-time currency exchange rates and convert between world currencies with our free online converter. Updated daily with reliable market data.',
      keywords: 'currency converter, exchange rates, forex, currency calculator, money converter, live rates',
      canonical: '/'
    },
    rates: {
      title: 'Exchange Rates - Live Currency Rates | Global Exchange',
      description: 'Live exchange rates for all major global currencies. View real-time currency rates and historical data from a trusted source.',
      keywords: 'exchange rates, currency rates, live rates, forex rates, major currencies, currency values',
      canonical: '/rates'
    },
    history: {
      title: 'Historical Currency Rates & Charts | Global Exchange',
      description: 'Track historical exchange rate trends with interactive charts and data for all major world currencies. Visualize currency performance over time.',
      keywords: 'historical exchange rates, currency history, exchange rate trends, currency charts, rate analysis',
      canonical: '/history'
    },
    about: {
      title: 'About Global Exchange | Currency Conversion Experts',
      description: 'Learn about Global Exchange, our mission to provide accurate currency data, and how we help users make informed financial decisions.',
      keywords: 'about global exchange, currency experts, exchange rate provider, financial tools',
      canonical: '/about'
    },
    contact: {
      title: 'Contact Us | Global Exchange Support',
      description: 'Get in touch with our team for questions about currency exchange rates, technical support, or business inquiries.',
      keywords: 'contact global exchange, currency support, exchange rate help, customer service',
      canonical: '/contact'
    },
    faq: {
      title: 'FAQ | Frequently Asked Questions | Global Exchange',
      description: 'Find answers to common questions about currency exchange, conversion rates, and using our tools effectively.',
      keywords: 'currency FAQ, exchange rate questions, converter help, global exchange support',
      canonical: '/faq'
    },
    terms: {
      title: 'Terms of Service | Global Exchange',
      description: 'Read our terms of service and learn about the rules governing the use of Global Exchange currency conversion tools.',
      keywords: 'terms of service, terms and conditions, usage terms, legal terms',
      canonical: '/terms'
    },
    privacy: {
      title: 'Privacy Policy | Global Exchange',
      description: 'Our privacy policy explains how we collect, use, and protect your personal information when using our currency services.',
      keywords: 'privacy policy, data protection, personal information, cookies policy',
      canonical: '/privacy'
    },
    disclaimer: {
      title: 'Disclaimer | Global Exchange',
      description: 'Important disclaimers regarding the accuracy and use of currency exchange rates and conversion information on our website.',
      keywords: 'currency disclaimer, exchange rate accuracy, liability disclaimer, financial information',
      canonical: '/disclaimer'
    },
    guide: {
      title: 'Currency Exchange Guide | Global Exchange',
      description: 'Learn how to use our currency tools, understand exchange rates, and make the most of our conversion features.',
      keywords: 'currency guide, exchange rate guide, converter tutorial, forex help',
      canonical: '/guide'
    }
  };

  // Override with custom data if provided
  const info = { ...pageInfo[page], ...data };

  return `
    <title>${info.title}</title>
    <meta name="description" content="${info.description}">
    <meta name="keywords" content="${info.keywords}">
    <link rel="canonical" href="${window.location.origin}${info.canonical}">
    <meta property="og:title" content="${info.title}">
    <meta property="og:description" content="${info.description}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${window.location.origin}${info.canonical}">
    <meta property="og:image" content="${window.location.origin}/images/og-image.jpg">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${info.title}">
    <meta name="twitter:description" content="${info.description}">
    <meta name="twitter:image" content="${window.location.origin}/images/twitter-image.jpg">
  `;
}

// Update document head with SEO metadata
function updateSEO(pageType, data = {}) {
  // Remove existing SEO elements to avoid duplication
  const existingCanonical = document.querySelector('link[rel="canonical"]');
  if (existingCanonical) existingCanonical.remove();

  // Generate new metadata
  const metaTags = generateMetaTags(pageType, data);
  const structuredData = generateStructuredData(pageType, data);

  // Add to document head
  const seoContainer = document.createElement('div');
  seoContainer.innerHTML = metaTags + structuredData;

  Array.from(seoContainer.children).forEach((node) => {
    document.head.appendChild(node);
  });

  console.log(`SEO updated for ${pageType} page`);
}

// Export functions
window.seoHelpers = {
  updateSEO,
  generateStructuredData,
  generateMetaTags
};