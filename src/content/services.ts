export type Service = {
  slug: string;
  title: string;
  /** short label used in nav/cards */
  short: string;
  /** lucide icon name (see components/shared/icon.tsx) */
  icon: string;
  tagline: string;
  /** one-line summary for cards */
  summary: string;
  overview: string;
  offerings: string[];
  benefits: { title: string; description: string }[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "software-development",
    title: "Custom Software Development",
    short: "Software Development",
    icon: "Code2",
    tagline: "Software built around the way you work",
    summary:
      "Custom business applications, ERP, CRM and enterprise systems engineered for scale, security and growth.",
    overview:
      "We design and build custom software that fits your processes instead of forcing your team to adapt to off-the-shelf limitations. From internal business tools and customer portals to full ERP and CRM platforms, our engineers deliver maintainable, well-documented systems using modern, proven technologies.",
    offerings: [
      "Custom business & web applications",
      "ERP systems (finance, inventory, HR, operations)",
      "CRM & customer engagement platforms",
      "Enterprise software & internal tooling",
      "API design & system integration",
      "Legacy system modernization",
    ],
    benefits: [
      {
        title: "Built for your workflow",
        description:
          "Software shaped around your exact processes, removing manual work and reducing costly errors.",
      },
      {
        title: "Scalable architecture",
        description:
          "Systems engineered to grow with your organisation, from your first users to nationwide rollouts.",
      },
      {
        title: "Full ownership",
        description:
          "You own the code, the data and the roadmap — no vendor lock-in, with clean documentation and handover.",
      },
      {
        title: "Secure by design",
        description:
          "Security, access control and data protection are built in from day one, not bolted on later.",
      },
    ],
    process: [
      {
        title: "Discovery & scoping",
        description:
          "We map your processes, goals and constraints to define a clear, prioritised product scope.",
      },
      {
        title: "Design & architecture",
        description:
          "We produce UX wireframes and a technical architecture that balance speed, cost and scale.",
      },
      {
        title: "Agile development",
        description:
          "We build in short sprints with regular demos so you see progress and steer direction early.",
      },
      {
        title: "Testing & launch",
        description:
          "Rigorous QA, user acceptance testing and a controlled rollout get you live with confidence.",
      },
      {
        title: "Support & evolution",
        description:
          "We maintain, monitor and continuously improve the system as your needs change.",
      },
    ],
    faqs: [
      {
        question: "How long does a custom software project take?",
        answer:
          "Most projects deliver a usable first release within 8–16 weeks, depending on scope. We work in sprints so you get value early and continuously rather than waiting for one big launch.",
      },
      {
        question: "Will we own the source code?",
        answer:
          "Yes. You retain full ownership of all source code, data and intellectual property, with complete documentation handed over at every milestone.",
      },
      {
        question: "Can you integrate with our existing systems?",
        answer:
          "Absolutely. We routinely integrate with accounting platforms, payment gateways, mobile money, government systems and third-party APIs.",
      },
    ],
  },
  {
    slug: "mobile-development",
    title: "Mobile App Development",
    short: "Mobile Applications",
    icon: "Smartphone",
    tagline: "Native-quality apps for Android & iOS",
    summary:
      "Android, iOS and cross-platform apps that feel fast, work offline and reach customers wherever they are.",
    overview:
      "Mobile is how most Tanzanians access the internet. We build high-performance Android and iOS apps — natively or with Flutter and React Native — that work reliably on low bandwidth, support offline use, and integrate mobile money and local payment options out of the box.",
    offerings: [
      "Native Android apps (Kotlin)",
      "Native iOS apps (Swift)",
      "Cross-platform apps (Flutter, React Native)",
      "Mobile money & payment integration",
      "Offline-first & low-bandwidth optimisation",
      "App Store & Play Store publishing",
    ],
    benefits: [
      {
        title: "Reach customers anywhere",
        description:
          "Apps optimised for the devices and networks your customers actually use across Tanzania.",
      },
      {
        title: "One codebase, two platforms",
        description:
          "Cross-platform options cut cost and time-to-market while keeping a native look and feel.",
      },
      {
        title: "Works offline",
        description:
          "Offline-first design keeps your app usable even with intermittent connectivity.",
      },
      {
        title: "Local payments built in",
        description:
          "M-Pesa, Tigo Pesa, Airtel Money and card payments integrated and tested for the Tanzanian market.",
      },
    ],
    process: [
      {
        title: "Product strategy",
        description:
          "We define the core user journeys and an MVP that gets you to market quickly.",
      },
      {
        title: "UX & UI design",
        description:
          "We craft intuitive, on-brand interfaces validated against real user expectations.",
      },
      {
        title: "Development & integration",
        description:
          "We build, integrate payments and APIs, and test continuously on real devices.",
      },
      {
        title: "Store launch",
        description:
          "We handle Play Store and App Store submission, review and release.",
      },
      {
        title: "Growth & updates",
        description:
          "We monitor analytics, fix issues and ship improvements based on real usage.",
      },
    ],
    faqs: [
      {
        question: "Should we build native or cross-platform?",
        answer:
          "It depends on your goals. Cross-platform (Flutter) is faster and cheaper for most business apps; native is best when you need maximum performance or deep device features. We advise honestly based on your case.",
      },
      {
        question: "Can the app integrate mobile money?",
        answer:
          "Yes. We have integrated M-Pesa, Tigo Pesa and Airtel Money, plus card gateways, into production apps.",
      },
      {
        question: "Do you publish the app for us?",
        answer:
          "We manage the full publishing process on Google Play and the Apple App Store, including store listings and compliance.",
      },
    ],
  },
  {
    slug: "iot-solutions",
    title: "IoT Solutions",
    short: "IoT Solutions",
    icon: "Cpu",
    tagline: "Connect, monitor and automate the physical world",
    summary:
      "Smart monitoring, asset tracking, industrial IoT and sensor integration with real-time dashboards.",
    overview:
      "We help organisations capture data from the physical world and turn it into action. From smart metering and cold-chain monitoring to vehicle and asset tracking, we design end-to-end IoT solutions — hardware, connectivity, cloud platform and dashboards — tailored to Tanzanian operating conditions.",
    offerings: [
      "Smart monitoring & remote sensing",
      "Asset & vehicle tracking (GPS/GSM)",
      "Industrial IoT & equipment telemetry",
      "Sensor selection & integration",
      "Real-time dashboards & alerting",
      "Edge computing & low-power devices",
    ],
    benefits: [
      {
        title: "Real-time visibility",
        description:
          "Live dashboards and alerts give you instant insight into assets, environments and equipment.",
      },
      {
        title: "Reduced losses",
        description:
          "Detect faults, theft and waste early — from cold-chain breaks to fuel and inventory shrinkage.",
      },
      {
        title: "Data-driven decisions",
        description:
          "Historical trends and analytics help you optimise operations and plan maintenance.",
      },
      {
        title: "Built for local conditions",
        description:
          "Low-power, resilient designs that handle limited connectivity and harsh environments.",
      },
    ],
    process: [
      {
        title: "Use-case assessment",
        description:
          "We identify what to measure, where, and the business outcome you need.",
      },
      {
        title: "Hardware & connectivity design",
        description:
          "We select sensors, devices and the right network (GSM, LoRa, Wi-Fi) for the field.",
      },
      {
        title: "Platform & dashboards",
        description:
          "We build the cloud platform, data pipelines and dashboards your team will use daily.",
      },
      {
        title: "Pilot deployment",
        description:
          "We run a controlled pilot to validate accuracy, reliability and value.",
      },
      {
        title: "Scale & maintain",
        description:
          "We roll out at scale and keep devices monitored, updated and healthy.",
      },
    ],
    faqs: [
      {
        question: "Can IoT work where connectivity is poor?",
        answer:
          "Yes. We use store-and-forward, edge processing and low-power wide-area networks so devices keep working and sync data when connectivity returns.",
      },
      {
        question: "Do you supply the hardware too?",
        answer:
          "We can supply, configure and install the full hardware stack, or work with devices you already own.",
      },
      {
        question: "How is the data secured?",
        answer:
          "Device-to-cloud traffic is encrypted, devices are authenticated, and dashboards use role-based access control.",
      },
    ],
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    short: "Cloud Services",
    icon: "Cloud",
    tagline: "Migrate, scale and optimise in the cloud",
    summary:
      "Cloud migration, hosting, DevOps and backup on AWS, Azure and Google Cloud — built for reliability and cost control.",
    overview:
      "We help you move to the cloud with confidence and run it efficiently afterwards. Whether you are migrating legacy systems, setting up resilient hosting, automating deployments with DevOps, or hardening your backup and disaster recovery, we deliver cloud infrastructure that is secure, scalable and cost-optimised.",
    offerings: [
      "Cloud migration & modernization",
      "Managed hosting & infrastructure",
      "DevOps, CI/CD & automation",
      "Backup & disaster recovery",
      "Cost optimisation & monitoring",
      "Containerisation (Docker, Kubernetes)",
    ],
    benefits: [
      {
        title: "Scale on demand",
        description:
          "Pay for what you use and scale instantly during peaks without over-investing in hardware.",
      },
      {
        title: "Higher uptime",
        description:
          "Resilient, monitored infrastructure with automated failover keeps your services available.",
      },
      {
        title: "Faster releases",
        description:
          "CI/CD pipelines let your team ship updates safely and frequently.",
      },
      {
        title: "Controlled costs",
        description:
          "We right-size resources and set up monitoring so you never pay for idle capacity.",
      },
    ],
    process: [
      {
        title: "Cloud assessment",
        description:
          "We audit your current systems and design the right migration and hosting strategy.",
      },
      {
        title: "Architecture & security",
        description:
          "We design a secure, well-architected environment with networking, identity and backups.",
      },
      {
        title: "Migration & setup",
        description:
          "We migrate workloads with minimal downtime and validate everything against a checklist.",
      },
      {
        title: "Automation",
        description:
          "We implement CI/CD, infrastructure-as-code and monitoring for reliable operations.",
      },
      {
        title: "Optimise & manage",
        description:
          "We continuously tune performance and cost and can fully manage the environment for you.",
      },
    ],
    faqs: [
      {
        question: "Which cloud provider should we use?",
        answer:
          "We are vendor-neutral and work across AWS, Microsoft Azure and Google Cloud. We recommend based on your workloads, budget and existing tools.",
      },
      {
        question: "Will migration cause downtime?",
        answer:
          "We plan migrations to minimise or eliminate downtime using staged cut-overs, replication and out-of-hours windows.",
      },
      {
        question: "Can you manage the cloud after migration?",
        answer:
          "Yes. We offer fully managed cloud operations including monitoring, patching, backups and cost management.",
      },
    ],
  },
  {
    slug: "networking",
    title: "Networking & Infrastructure",
    short: "Networking",
    icon: "Network",
    tagline: "Fast, secure and reliable connectivity",
    summary:
      "LAN/WAN setup, structured cabling, enterprise Wi-Fi and infrastructure deployment built to standard.",
    overview:
      "Reliable connectivity is the backbone of every modern organisation. We design and deploy wired and wireless networks — from single offices to multi-site WANs — with structured cabling, enterprise-grade equipment, segmentation and security that keep your operations running smoothly.",
    offerings: [
      "LAN & WAN design and deployment",
      "Structured cabling & data centres",
      "Enterprise & guest Wi-Fi solutions",
      "Firewalls, VPNs & network security",
      "Multi-site & branch connectivity",
      "Network monitoring & management",
    ],
    benefits: [
      {
        title: "Reliable performance",
        description:
          "Properly designed networks eliminate the bottlenecks and downtime that slow your team.",
      },
      {
        title: "Secure by segmentation",
        description:
          "VLANs, firewalls and VPNs protect sensitive systems and isolate guest traffic.",
      },
      {
        title: "Built to standard",
        description:
          "Certified structured cabling and documentation make future expansion straightforward.",
      },
      {
        title: "Centrally managed",
        description:
          "Monitor and manage every site from one place, with proactive alerts on issues.",
      },
    ],
    process: [
      {
        title: "Site survey",
        description:
          "We assess your premises, coverage needs and traffic patterns on the ground.",
      },
      {
        title: "Network design",
        description:
          "We design topology, capacity, security and redundancy to fit your requirements.",
      },
      {
        title: "Installation",
        description:
          "Our technicians install cabling and equipment cleanly and to recognised standards.",
      },
      {
        title: "Configuration & testing",
        description:
          "We configure, secure and stress-test the network before handover.",
      },
      {
        title: "Monitoring & support",
        description:
          "We provide ongoing monitoring, maintenance and rapid-response support.",
      },
    ],
    faqs: [
      {
        question: "Can you connect multiple branches?",
        answer:
          "Yes. We build secure multi-site networks using VPNs and SD-WAN so branches operate as one network.",
      },
      {
        question: "Do you provide the equipment?",
        answer:
          "We supply, install and configure enterprise-grade switches, routers, access points and firewalls — or work with your preferred vendors.",
      },
      {
        question: "Do you offer ongoing support?",
        answer:
          "Yes. We offer maintenance contracts with monitoring, preventive checks and guaranteed response times.",
      },
    ],
  },
  {
    slug: "hardware-solutions",
    title: "Hardware Supply & Installation",
    short: "Hardware Solutions",
    icon: "Server",
    tagline: "The right equipment, supplied and installed",
    summary:
      "Procurement, installation and maintenance of computers, servers and IT equipment from trusted brands.",
    overview:
      "We take the complexity out of IT procurement. From workstations and servers to networking gear and peripherals, we source genuine equipment from trusted brands, install and configure it properly, and keep it running with maintenance plans — so you get reliable hardware without the guesswork.",
    offerings: [
      "Computer & laptop procurement",
      "Server & storage supply and setup",
      "Printers, peripherals & accessories",
      "Installation & configuration",
      "Preventive maintenance & repairs",
      "Warranty & lifecycle management",
    ],
    benefits: [
      {
        title: "Genuine equipment",
        description:
          "Authentic hardware from reputable brands with proper warranties and support.",
      },
      {
        title: "Right-sized for you",
        description:
          "We recommend equipment matched to your workload and budget — no over- or under-spending.",
      },
      {
        title: "Properly installed",
        description:
          "Equipment delivered, configured and ready to use, not left in boxes for your team to figure out.",
      },
      {
        title: "Kept running",
        description:
          "Maintenance plans and fast repairs minimise downtime and extend equipment life.",
      },
    ],
    process: [
      {
        title: "Needs assessment",
        description:
          "We understand your workloads and budget to specify the right equipment.",
      },
      {
        title: "Sourcing & quotation",
        description:
          "We source genuine hardware and provide transparent, competitive quotations.",
      },
      {
        title: "Delivery & installation",
        description:
          "We deliver, install and configure everything on-site, ready to use.",
      },
      {
        title: "Handover & training",
        description:
          "We hand over with documentation and brief your team where needed.",
      },
      {
        title: "Maintenance",
        description:
          "We provide ongoing maintenance, repairs and lifecycle planning.",
      },
    ],
    faqs: [
      {
        question: "Do you supply genuine, warrantied equipment?",
        answer:
          "Yes. We supply only genuine equipment from authorised channels, with manufacturer warranties and our own support.",
      },
      {
        question: "Can you handle large rollouts?",
        answer:
          "We handle procurement and deployment at any scale, from a few workstations to organisation-wide rollouts and refresh programmes.",
      },
      {
        question: "Do you offer maintenance contracts?",
        answer:
          "Yes. We offer preventive maintenance and repair contracts to keep your equipment reliable and reduce downtime.",
      },
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity Solutions",
    short: "Cybersecurity",
    icon: "ShieldCheck",
    tagline: "Protect your data, systems and reputation",
    summary:
      "Security assessments, monitoring, endpoint protection and incident response to keep threats out.",
    overview:
      "Cyber threats are rising fast across the region. We help organisations identify weaknesses before attackers do, protect endpoints and networks, monitor for threats around the clock, and respond effectively when incidents occur — keeping your data, systems and reputation safe.",
    offerings: [
      "Security assessments & penetration testing",
      "24/7 monitoring & threat detection",
      "Endpoint & email protection",
      "Firewall & network security",
      "Security awareness training",
      "Incident response & recovery",
    ],
    benefits: [
      {
        title: "Know your risks",
        description:
          "Assessments reveal exactly where you are exposed and how to fix it, in priority order.",
      },
      {
        title: "Stop threats early",
        description:
          "Continuous monitoring and endpoint protection catch attacks before they cause damage.",
      },
      {
        title: "Protect your people",
        description:
          "Awareness training turns your team from the weakest link into your first line of defence.",
      },
      {
        title: "Recover fast",
        description:
          "A tested incident response plan limits damage and gets you back to normal quickly.",
      },
    ],
    process: [
      {
        title: "Assess",
        description:
          "We evaluate your systems, policies and exposure against recognised security frameworks.",
      },
      {
        title: "Harden",
        description:
          "We close gaps — patching, configuration, access control and endpoint protection.",
      },
      {
        title: "Monitor",
        description:
          "We deploy monitoring and detection so threats are spotted in real time.",
      },
      {
        title: "Train",
        description:
          "We train your staff to recognise phishing and follow secure practices.",
      },
      {
        title: "Respond",
        description:
          "We prepare and rehearse incident response so you can act fast under pressure.",
      },
    ],
    faqs: [
      {
        question: "Where should we start with security?",
        answer:
          "A security assessment is the best starting point. It gives you a clear, prioritised picture of your risks so you invest where it matters most.",
      },
      {
        question: "Do you offer ongoing monitoring?",
        answer:
          "Yes. We provide managed detection and monitoring services with defined response times for security events.",
      },
      {
        question: "Can you train our staff?",
        answer:
          "We deliver practical security awareness training, including simulated phishing campaigns, tailored to your team.",
      },
    ],
  },
  {
    slug: "it-consultancy",
    title: "IT Consultancy & Digital Transformation",
    short: "IT Consultancy",
    icon: "Compass",
    tagline: "Strategy that turns technology into results",
    summary:
      "Technology strategy, digital transformation and IT planning that align technology with your goals.",
    overview:
      "Technology should serve your strategy, not complicate it. Our consultants help leaders make confident decisions — assessing your current state, defining a digital roadmap, planning investments and guiding transformation — so technology becomes a driver of growth, efficiency and competitive advantage.",
    offerings: [
      "Technology strategy & roadmaps",
      "Digital transformation programmes",
      "IT planning & budgeting",
      "Systems & process assessments",
      "Vendor selection & advisory",
      "Project & change management",
    ],
    benefits: [
      {
        title: "Clear direction",
        description:
          "A practical roadmap that aligns every technology investment with your business objectives.",
      },
      {
        title: "Smarter spending",
        description:
          "Avoid costly missteps by investing in the right tools and projects, in the right order.",
      },
      {
        title: "Faster transformation",
        description:
          "Experienced guidance helps you adopt new technology and ways of working with less friction.",
      },
      {
        title: "Independent advice",
        description:
          "Vendor-neutral recommendations focused on your interests, not a product to sell.",
      },
    ],
    process: [
      {
        title: "Discover",
        description:
          "We understand your goals, current systems, processes and pain points.",
      },
      {
        title: "Assess",
        description:
          "We benchmark your technology and identify gaps, risks and opportunities.",
      },
      {
        title: "Strategise",
        description:
          "We build a prioritised roadmap with clear initiatives, costs and outcomes.",
      },
      {
        title: "Plan",
        description:
          "We define projects, budgets, timelines and the team needed to deliver.",
      },
      {
        title: "Guide",
        description:
          "We support execution and change management to ensure the strategy delivers results.",
      },
    ],
    faqs: [
      {
        question: "What does a digital transformation engagement involve?",
        answer:
          "It typically starts with an assessment of your current systems and processes, followed by a prioritised roadmap and support to implement the highest-impact changes first.",
      },
      {
        question: "Are your recommendations vendor-neutral?",
        answer:
          "Yes. Our consultancy is independent — we recommend the solutions that best fit your needs, whether or not we implement them.",
      },
      {
        question: "Can you help with IT budgeting?",
        answer:
          "We help you plan realistic IT budgets tied to business outcomes, so spending is predictable and justified.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);
