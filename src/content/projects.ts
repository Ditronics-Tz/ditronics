export type Project = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  /** short tagline for cards */
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  technologies: string[];
  metrics: { value: string; label: string }[];
  /** tailwind gradient classes for the cover (fallback behind the image) */
  gradient: string;
  /** cover image URL */
  image?: string;
  featured?: boolean;
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=60`;

export const projectCategories = [
  "All",
  "Software",
  "Mobile",
  "IoT",
  "Cloud",
  "Networking",
] as const;

export const projects: Project[] = [
  {
    slug: "national-logistics-tracking",
    title: "Fleet & Cargo Tracking Platform",
    client: "Serengeti Logistics",
    industry: "Logistics & Transport",
    category: "IoT",
    summary:
      "Real-time GPS tracking and route optimisation across a 200-vehicle fleet.",
    challenge:
      "A national logistics operator had no real-time visibility of its fleet, leading to fuel losses, late deliveries and frequent customer disputes over cargo location.",
    solution:
      "We deployed GPS/GSM tracking devices across 200 vehicles and built a cloud platform with live maps, geofencing, fuel monitoring and automated delivery alerts, integrated with their dispatch workflow.",
    outcome:
      "Within six months the company cut fuel costs significantly, improved on-time deliveries and gave customers a self-service portal to track shipments in real time.",
    technologies: ["IoT", "Node.js", "React", "PostgreSQL", "AWS", "GPS/GSM"],
    metrics: [
      { value: "200+", label: "Vehicles connected" },
      { value: "22%", label: "Lower fuel cost" },
      { value: "98%", label: "On-time deliveries" },
    ],
    gradient: "from-brand-blue to-brand-cyan",
    image: unsplash("1586528116311-ad8dd3c8310d"),
    featured: true,
  },
  {
    slug: "microfinance-core-platform",
    title: "Digital Microfinance Platform",
    client: "Umoja SACCO",
    industry: "Financial Services",
    category: "Software",
    summary:
      "A core lending and savings platform with mobile money and a member app.",
    challenge:
      "A growing SACCO managed members on spreadsheets and paper, making loan processing slow, error-prone and impossible to scale across new branches.",
    solution:
      "We built a secure core platform for savings, loans and accounting, integrated M-Pesa and Tigo Pesa, and delivered a member mobile app for self-service deposits, statements and loan applications.",
    outcome:
      "Loan approval time dropped from days to minutes, membership grew rapidly across new branches, and reconciliation became fully automated.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Flutter", "Mobile Money"],
    metrics: [
      { value: "5x", label: "Faster loan approvals" },
      { value: "40k+", label: "Members served" },
      { value: "100%", label: "Automated reconciliation" },
    ],
    gradient: "from-brand-indigo to-brand-blue",
    image: unsplash("1554224155-6726b3ff858f"),
    featured: true,
  },
  {
    slug: "hospital-management-system",
    title: "Hospital Management System",
    client: "Afya Bora Health Group",
    industry: "Healthcare",
    category: "Software",
    summary:
      "An integrated EHR and hospital management system across multiple facilities.",
    challenge:
      "A multi-facility health group had fragmented patient records and manual billing, causing long waits, lost records and revenue leakage.",
    solution:
      "We implemented an electronic health record and hospital management system covering registration, consultations, pharmacy, lab, billing and reporting, connected across all facilities over a secure network.",
    outcome:
      "Patient wait times fell, records became instantly accessible across sites, and management gained real-time visibility into operations and revenue.",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Networking"],
    metrics: [
      { value: "35%", label: "Shorter wait times" },
      { value: "6", label: "Facilities connected" },
      { value: "Zero", label: "Lost records" },
    ],
    gradient: "from-brand-cyan to-brand-indigo",
    image: unsplash("1538108149393-fbbd81895907"),
    featured: true,
  },
  {
    slug: "agri-iot-monitoring",
    title: "Smart Farm Monitoring",
    client: "Kilimo Smart Farms",
    industry: "Agriculture",
    category: "IoT",
    summary:
      "Soil, weather and irrigation sensors feeding a mobile dashboard for farmers.",
    challenge:
      "A commercial farm relied on guesswork for irrigation and lost crops to unexpected conditions, with no data to optimise water and inputs.",
    solution:
      "We deployed low-power soil-moisture, temperature and weather sensors with a solar gateway, feeding a mobile dashboard with alerts and automated irrigation recommendations.",
    outcome:
      "The farm reduced water usage, improved yields and could act on field conditions in real time from any phone.",
    technologies: ["IoT", "LoRa", "Flutter", "Node.js", "Azure"],
    metrics: [
      { value: "30%", label: "Less water used" },
      { value: "18%", label: "Higher yield" },
      { value: "24/7", label: "Field monitoring" },
    ],
    gradient: "from-brand-cyan to-brand-blue",
    image: unsplash("1500382017468-9049fed747ef"),
  },
  {
    slug: "retail-pos-ecommerce",
    title: "Omnichannel Retail Platform",
    client: "Bidhaa Retail",
    industry: "Retail & E-commerce",
    category: "Software",
    summary:
      "Unified POS, inventory and an online store with mobile money checkout.",
    challenge:
      "A retail chain ran disconnected POS systems with no online presence and constant stock discrepancies between branches.",
    solution:
      "We delivered a unified POS and inventory system with centralised stock control, plus an e-commerce store supporting mobile money and card payments and a loyalty programme.",
    outcome:
      "Stock accuracy improved dramatically, a new online sales channel opened, and management gained one view of sales across all branches.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Mobile Money", "AWS"],
    metrics: [
      { value: "+27%", label: "Revenue growth" },
      { value: "99%", label: "Stock accuracy" },
      { value: "12", label: "Branches unified" },
    ],
    gradient: "from-brand-blue to-brand-indigo",
    image: unsplash("1556740758-90de374c12ad"),
  },
  {
    slug: "campus-network-upgrade",
    title: "University Campus Network",
    client: "Mwanga University",
    industry: "Education",
    category: "Networking",
    summary:
      "Campus-wide fibre, enterprise Wi-Fi and secure segmented network.",
    challenge:
      "A growing university campus suffered from unreliable connectivity, dead zones and an insecure flat network shared by staff, students and admin systems.",
    solution:
      "We designed and installed structured fibre cabling, enterprise Wi-Fi with full coverage, and a segmented, firewalled network separating administrative, academic and guest traffic.",
    outcome:
      "The campus gained fast, reliable, secure connectivity everywhere, supporting e-learning and thousands of concurrent users.",
    technologies: ["Networking", "Enterprise Wi-Fi", "Firewalls", "Fibre"],
    metrics: [
      { value: "100%", label: "Campus coverage" },
      { value: "5,000+", label: "Concurrent users" },
      { value: "3", label: "Secure network zones" },
    ],
    gradient: "from-brand-indigo to-brand-cyan",
    image: unsplash("1558494949-ef010cbdcc31"),
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);
