export type Industry = {
  slug: string;
  name: string;
  icon: string;
  summary: string;
  challenges: string[];
  solutions: string[];
  benefits: string[];
};

export const industries: Industry[] = [
  {
    slug: "government",
    name: "Government & Public Sector",
    icon: "Landmark",
    summary:
      "Digital services and secure systems that help public institutions serve citizens efficiently.",
    challenges: [
      "Paper-based, slow service delivery to citizens",
      "Siloed systems across departments",
      "Strict requirements for data security and accountability",
    ],
    solutions: [
      "E-government portals and citizen service platforms",
      "System integration across departments and agencies",
      "Secure data centres, networks and cybersecurity",
    ],
    benefits: [
      "Faster, more transparent service delivery",
      "Lower operating costs and less paperwork",
      "Improved accountability and reporting",
    ],
  },
  {
    slug: "education",
    name: "Education",
    icon: "GraduationCap",
    summary:
      "Learning platforms, school management and connectivity for institutions of every size.",
    challenges: [
      "Manual student records and administration",
      "Limited access to digital learning resources",
      "Unreliable campus connectivity",
    ],
    solutions: [
      "School & university management systems",
      "E-learning platforms and student portals",
      "Campus networking and computer labs",
    ],
    benefits: [
      "Streamlined administration and reporting",
      "Broader access to quality learning content",
      "Reliable connectivity for staff and students",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "HeartPulse",
    summary:
      "Health information systems and connected devices that improve care and efficiency.",
    challenges: [
      "Fragmented patient records",
      "Cold-chain and equipment monitoring gaps",
      "Pressure to reduce costs while improving care",
    ],
    solutions: [
      "Electronic health & hospital management systems",
      "IoT cold-chain and equipment monitoring",
      "Secure networks and patient data protection",
    ],
    benefits: [
      "Better-informed, faster clinical decisions",
      "Reduced losses of medicines and vaccines",
      "Improved patient experience and safety",
    ],
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    icon: "Sprout",
    summary:
      "Smart farming, traceability and market platforms that boost yields and incomes.",
    challenges: [
      "Limited visibility of field and crop conditions",
      "Weak supply-chain traceability",
      "Difficulty reaching markets and buyers",
    ],
    solutions: [
      "IoT soil, weather and irrigation monitoring",
      "Farm management and traceability systems",
      "Mobile platforms linking farmers to markets",
    ],
    benefits: [
      "Higher yields through data-driven decisions",
      "Reduced post-harvest losses",
      "Better prices and market access for farmers",
    ],
  },
  {
    slug: "logistics",
    name: "Logistics & Transport",
    icon: "Truck",
    summary:
      "Fleet tracking, route optimisation and visibility across your supply chain.",
    challenges: [
      "Limited visibility of vehicles and cargo",
      "Fuel theft and inefficient routing",
      "Manual, error-prone dispatch and proof of delivery",
    ],
    solutions: [
      "GPS fleet & asset tracking",
      "Route optimisation and dispatch systems",
      "Warehouse and inventory management",
    ],
    benefits: [
      "Lower fuel and operating costs",
      "Faster, more reliable deliveries",
      "Real-time visibility for you and your customers",
    ],
  },
  {
    slug: "retail",
    name: "Retail & E-commerce",
    icon: "ShoppingBag",
    summary:
      "Point of sale, inventory and online stores that grow sales across channels.",
    challenges: [
      "Disconnected sales, stock and accounting",
      "Limited online presence",
      "Difficulty understanding customer behaviour",
    ],
    solutions: [
      "POS and inventory management systems",
      "E-commerce stores with mobile money & card payments",
      "Loyalty programmes and analytics",
    ],
    benefits: [
      "Accurate stock and fewer lost sales",
      "New revenue from online channels",
      "Insight-driven marketing and merchandising",
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: "Factory",
    summary:
      "Industrial IoT, ERP and automation that raise output and reduce downtime.",
    challenges: [
      "Unplanned equipment downtime",
      "Limited visibility of production and inventory",
      "Manual quality and maintenance processes",
    ],
    solutions: [
      "Industrial IoT and equipment monitoring",
      "ERP and production management systems",
      "Predictive maintenance and quality dashboards",
    ],
    benefits: [
      "Higher uptime and productivity",
      "Lower maintenance and inventory costs",
      "Consistent quality and traceability",
    ],
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    icon: "Banknote",
    summary:
      "Secure platforms for banks, SACCOs, microfinance and fintech across Tanzania.",
    challenges: [
      "Rising security and compliance demands",
      "Need for digital, mobile-first services",
      "Legacy systems that are hard to scale",
    ],
    solutions: [
      "Core banking, SACCO & microfinance systems",
      "Mobile & internet banking with mobile money",
      "Cybersecurity, monitoring and compliance support",
    ],
    benefits: [
      "Secure, compliant operations",
      "Modern digital services that grow membership",
      "Scalable platforms ready for the future",
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
