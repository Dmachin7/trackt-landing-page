// Client work. Drives the homepage carousel (#demos), the /portfolio hub, and
// each /portfolio/[slug] case study page. Facts here come from the client
// work itself — don't add invented results or metrics.

export interface Project {
  slug: string;
  title: string;
  badge: string;
  accent: string;
  category: string;
  blurb: string;
  img: string;
  imgAlt: string;
  imgW: number;
  imgH: number;
  href: string; // live client site
  liveLabel: string; // domain as shown to visitors
  cta: string;
  // Case-study page
  pageTitle: string;
  pageDescription: string;
  h1: string;
  about: string;
  built: string[];
  stack: string[];
}

export const projects: Project[] = [
  {
    slug: "km-executive-transportation",
    title: "KM Executive Transportation",
    badge: "Live Client",
    accent: "#A8862F",
    category: "Luxury Transportation · Tampa Bay",
    blurb: "A chauffeur service with online booking, live mileage pricing, deposits, saved cards, and an admin dashboard.",
    img: "/images/demos/km-executive-demo.jpg",
    imgAlt: "KM Executive Transportation website screenshot",
    imgW: 1400,
    imgH: 875,
    href: "https://www.kmexecutivetransportation.com/",
    liveLabel: "kmexecutivetransportation.com",
    cta: "View live site",
    pageTitle: "KM Executive Transportation Website | Trackt Tech Portfolio",
    pageDescription: "Case study: a Tampa Bay luxury car service website with online booking, live mileage pricing, deposits, and an admin dashboard — built by Trackt Tech.",
    h1: "KM Executive Transportation — Tampa Luxury Car Service Website",
    about:
      "KM Executive Transportation is a chauffeur and executive car service operating across Tampa Bay. They needed more than a brochure site: clients had to be able to price a ride, book it, and pay a deposit without a phone call, and the business needed one place to manage it all.",
    built: [
      "Online booking flow customers can finish in a few minutes",
      "Live mileage-based pricing so quotes are instant and consistent",
      "Deposits and saved cards at checkout",
      "Admin dashboard for managing rides and bookings",
      "A polished, mobile-first design that matches a luxury brand",
    ],
    stack: ["Custom web app", "Online payments", "Admin dashboard", "Mobile-first"],
  },
  {
    slug: "birdeye-promotions",
    title: "BirdEye Promotions",
    badge: "Live Client",
    accent: "#DC2626",
    category: "Aerial Videography · South Tampa, FL",
    blurb: "An FAA-certified drone videography company needing a cinematic portfolio and an easy quote request.",
    img: "/images/demos/birdeye-demo.jpg",
    imgAlt: "BirdEye Promotions drone videography website screenshot",
    imgW: 1400,
    imgH: 875,
    href: "https://www.birdeyepromotions.com/",
    liveLabel: "birdeyepromotions.com",
    cta: "View live site",
    pageTitle: "Bird Eye Promotions Website | Trackt Tech Portfolio",
    pageDescription: "Case study: a cinematic website for BirdEye Promotions, an FAA-certified aerial videography and drone company in South Tampa — built by Trackt Tech.",
    h1: "Bird Eye Promotions — Tampa Aerial Photography Website",
    about:
      "BirdEye Promotions is an FAA-certified aerial videography and drone services company based in South Tampa. Their work is visual, so the website had to show it off — and turn someone watching a reel into someone requesting a quote.",
    built: [
      "Full custom website built around their aerial footage",
      "Cinematic portfolio and service showcase",
      "Simple quote-request flow so leads come in ready to book",
      "Fast loading and mobile-first, even with heavy visual content",
      "On-page SEO for Tampa aerial and drone search terms",
    ],
    stack: ["Hand-coded website", "Video portfolio", "Quote request form", "Local SEO"],
  },
  {
    slug: "newell-family-enterprise",
    title: "Newell Family Enterprise",
    badge: "Live Client",
    accent: "#16A34A",
    category: "Soft Washing · Spring Hill, FL",
    blurb: "A soft washing company needing instant trust, a before & after gallery, and a fast quote request flow.",
    img: "/images/demos/newell-demo.jpg",
    imgAlt: "Newell Family Enterprise soft washing website screenshot",
    imgW: 1400,
    imgH: 875,
    href: "https://newell-family-enterprise.vercel.app/",
    liveLabel: "newell-family-enterprise.vercel.app",
    cta: "View live site",
    pageTitle: "Newell Family Enterprise Website | Trackt Tech Portfolio",
    pageDescription: "Case study: a website for Newell Family Enterprise, a family-run soft washing company in Spring Hill, FL, with a before & after gallery and fast quote requests.",
    h1: "Newell Family Enterprise — Business Website by Trackt Tech",
    about:
      "Newell Family Enterprise is a family-run soft washing company in Spring Hill, Florida. Homeowners hiring someone to wash their house want to trust them first, so the site leads with real results and makes asking for a quote effortless.",
    built: [
      "Trust-first homepage that explains the service in seconds",
      "Before & after gallery showing real jobs",
      "Fast quote request flow that works well on phones",
      "Clear service area and contact details for local customers",
      "Mobile-first, hand-coded build — no page builder",
    ],
    stack: ["Hand-coded website", "Before & after gallery", "Quote request form", "Mobile-first"],
  },
  {
    slug: "arthurs-1of1-bracelets",
    title: "Arthur's 1of1 Bracelets",
    badge: "Live Client",
    accent: "#A855F7",
    category: "Custom Jewelry · Shopify",
    blurb: "A custom bracelet configurator with live Shopify checkout for a Tampa handmade jewelry brand.",
    img: "/images/demos/arthurs1of1-demo.jpg",
    imgAlt: "Arthur's 1of1 bracelet configurator screenshot",
    imgW: 1400,
    imgH: 766,
    href: "https://arthurs1of1.trackt.tech",
    liveLabel: "arthurs1of1.trackt.tech",
    cta: "View live site",
    pageTitle: "Arthur's 1of1 Bracelets Website | Trackt Tech Portfolio",
    pageDescription: "Case study: a custom bracelet configurator with live Shopify checkout for Arthur's 1of1, a Tampa handmade jewelry brand — built by Trackt Tech.",
    h1: "Arthur's 1of1 Bracelets — Tampa E-commerce Website by Trackt Tech",
    about:
      "Arthur's 1of1 is a Tampa handmade jewelry brand where every bracelet is one of a kind. A standard product page couldn't capture that, so customers design their own bracelet and buy it in the same flow.",
    built: [
      "Interactive bracelet configurator customers use to design their own piece",
      "Live Shopify checkout connected to the configurator",
      "Product presentation that fits a handmade, one-of-one brand",
      "Fast and mobile-first, where most shoppers buy",
    ],
    stack: ["Custom configurator", "Shopify integration", "eCommerce", "Mobile-first"],
  },
];
