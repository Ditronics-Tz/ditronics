/**
 * Central site configuration for Ditronics.
 * Edit company details, contact info, and navigation in one place.
 */

export const siteConfig = {
  name: "Ditronics",
  legalName: "Ditronics Technologies Ltd",
  tagline: "Transforming Ideas into Technology Solutions",
  description:
    "Ditronics is a Tanzanian technology company building custom software, mobile apps, IoT systems, cloud solutions, and IT infrastructure that help businesses and institutions grow and innovate.",
  url: "https://www.ditronics.co.tz",
  locale: "en_TZ",
  // Realistic placeholders — replace with verified details before launch.
  contact: {
    email: "info@ditronics.co.tz",
    salesEmail: "sales@ditronics.co.tz",
    supportEmail: "support@ditronics.co.tz",
    phone: "+255 22 213 4567",
    phoneHref: "tel:+255222134567",
    whatsapp: "+255 754 100 200",
    whatsappNumber: "255754100200",
    address: {
      line1: "Mlimani City Office Tower, 8th Floor",
      line2: "Sam Nujoma Road, Ubungo",
      city: "Dar es Salaam",
      country: "Tanzania",
    },
    hours: [
      { days: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
      { days: "Saturday", time: "9:00 AM – 1:00 PM" },
      { days: "Sunday & Public Holidays", time: "Closed (24/7 support for SLA clients)" },
    ],
    // OpenStreetMap embed centred on Dar es Salaam.
    mapEmbedSrc:
      "https://www.openstreetmap.org/export/embed.html?bbox=39.18%2C-6.80%2C39.30%2C-6.74&layer=mapnik&marker=-6.7717%2C39.2400",
    mapLink: "https://www.openstreetmap.org/?mlat=-6.7717&mlon=39.2400#map=14/-6.7717/39.2400",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/ditronics-tz",
    facebook: "https://www.facebook.com/ditronicstz",
    instagram: "https://www.instagram.com/ditronicstz",
    twitter: "https://x.com/ditronicstz",
  },
} as const;

export type NavLink = {
  title: string;
  href: string;
  description?: string;
};

export const mainNav: NavLink[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Industries", href: "/industries" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export const footerNav = {
  company: [
    { title: "About Us", href: "/about" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Industries", href: "/industries" },
    { title: "Blog & Insights", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ],
  services: [
    { title: "Software Development", href: "/services/software-development" },
    { title: "Mobile App Development", href: "/services/mobile-development" },
    { title: "IoT Solutions", href: "/services/iot-solutions" },
    { title: "Cloud Solutions", href: "/services/cloud-solutions" },
    { title: "Cybersecurity", href: "/services/cybersecurity" },
    { title: "IT Consultancy", href: "/services/it-consultancy" },
  ],
  resources: [
    { title: "Case Studies", href: "/portfolio" },
    { title: "Industries We Serve", href: "/industries" },
    { title: "Technology Insights", href: "/blog" },
    { title: "Get a Quote", href: "/contact" },
  ],
};
