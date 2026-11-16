// Shared JSON-LD structured data. The homepage and /web-design-tampa both emit
// the ProfessionalService (LocalBusiness subtype) block, so it lives here once.

export const SITE = "https://trackt.tech";

// Public contact address. Matches the email shown on /privacy and elsewhere on
// the site — keep the schema and the visible contact info in agreement.
export const CONTACT_EMAIL = "daniel@trackt.tech";

const cities = ["Tampa", "St. Petersburg", "Brandon", "Clearwater", "Wesley Chapel", "Riverview", "Lakeland", "Sarasota"];

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  name: "Trackt Tech",
  url: SITE,
  publisher: { "@id": `${SITE}/#business` },
};

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE}/#business`,
  name: "Trackt Tech",
  legalName: "Trackt Tech LLC",
  url: SITE,
  logo: `${SITE}/logo/trackt-logo.png`,
  image: `${SITE}/og-image.png`,
  email: CONTACT_EMAIL,
  description:
    "Tampa Bay web design and custom software studio. Hand-coded websites, custom software integrations, and tech audits for small businesses.",
  address: { "@type": "PostalAddress", addressLocality: "Tampa", addressRegion: "FL", addressCountry: "US" },
  areaServed: [
    ...cities.map((name) => ({ "@type": "City", name: `${name}, FL` })),
    { "@type": "Place", name: "Tampa Bay, FL" },
    { "@type": "State", name: "Florida" },
  ],
  priceRange: "$$",
  founder: { "@type": "Person", name: "Daniel", jobTitle: "Web Developer & Tech Consultant" },
  knowsAbout: ["Web design", "Web development", "Local SEO", "Custom software", "Workflow automation", "Shopify"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Design & Software Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Website Design & Development", description: "Fast, mobile-first, hand-coded business websites, landing pages, and eCommerce." },
        priceSpecification: { "@type": "PriceSpecification", minPrice: 350, priceCurrency: "USD" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Custom Software & Integrations", description: "Web apps, customer portals, internal tools, and API integrations." },
        priceSpecification: { "@type": "PriceSpecification", minPrice: 500, priceCurrency: "USD" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Tech Audits & Automation", description: "Workflow and tech stack audits with an action plan, plus automations that save time." },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Monthly Website Maintenance", description: "Month-to-month plans covering monitoring, backups, updates, and local search work." },
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          minPrice: 65,
          priceCurrency: "USD",
          unitText: "MONTH",
        },
      },
    ],
  },
};

export const toJsonLd = (...blocks: object[]) => JSON.stringify(blocks);
