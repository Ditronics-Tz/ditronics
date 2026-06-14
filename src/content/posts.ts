export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string; // ISO
  readingTime: string;
  gradient: string;
  body: PostBlock[];
};

export const postCategories = [
  "All",
  "Software Development",
  "IoT",
  "Cybersecurity",
  "Cloud Computing",
  "Technology Trends",
  "Company News",
] as const;

export const posts: Post[] = [
  {
    slug: "digital-transformation-tanzanian-businesses",
    title: "Digital Transformation: A Practical Roadmap for Tanzanian Businesses",
    excerpt:
      "Digital transformation isn't about buying the latest tools — it's about rethinking how you deliver value. Here's a practical, phased approach for organisations in Tanzania.",
    category: "Technology Trends",
    author: "Athanas Shauritanga",
    date: "2026-05-28",
    readingTime: "6 min read",
    gradient: "from-brand-blue to-brand-cyan",
    body: [
      {
        type: "p",
        text: "Digital transformation has become one of the most used — and most misunderstood — phrases in business. For many leaders in Tanzania, it conjures images of expensive software and disruptive change. In reality, successful transformation is far more practical: it is about using technology to deliver more value to your customers, more efficiently, than you could before.",
      },
      { type: "h2", text: "Start with outcomes, not tools" },
      {
        type: "p",
        text: "The most common mistake is starting with a technology and looking for a problem to solve with it. Instead, begin with the outcomes that matter to your organisation — faster service, lower costs, better decisions, new revenue — and work backwards to the technology that delivers them.",
      },
      { type: "h2", text: "A phased approach that works" },
      {
        type: "ul",
        items: [
          "Assess: understand your current processes, systems and pain points honestly.",
          "Prioritise: pick the few changes that will deliver the most value first.",
          "Pilot: prove value on a small scale before rolling out widely.",
          "Scale: expand what works, with the right infrastructure behind it.",
          "Improve: treat transformation as continuous, not a one-off project.",
        ],
      },
      {
        type: "p",
        text: "This phased model reduces risk and builds momentum. Each phase delivers tangible value, which funds and justifies the next — rather than betting everything on one large, risky launch.",
      },
      { type: "h2", text: "The local advantage" },
      {
        type: "p",
        text: "Technology that ignores local realities fails. Solutions for the Tanzanian market must account for connectivity, mobile-first users, mobile money and the way business is actually done here. Working with a partner who understands these conditions is the difference between a system that gets used and one that gathers dust.",
      },
    ],
  },
  {
    slug: "iot-reducing-losses-supply-chains",
    title: "How IoT Is Reducing Losses Across African Supply Chains",
    excerpt:
      "From cold-chain monitoring to fuel tracking, connected sensors are turning invisible losses into preventable ones. Here's how.",
    category: "IoT",
    author: "Fatma Juma",
    date: "2026-05-12",
    readingTime: "5 min read",
    gradient: "from-brand-cyan to-brand-indigo",
    body: [
      {
        type: "p",
        text: "Every supply chain leaks value somewhere — spoiled goods, stolen fuel, idle assets, missed maintenance. The problem is that most of these losses are invisible until it is too late. The Internet of Things changes that by making the physical world measurable in real time.",
      },
      { type: "h2", text: "Cold chain that protects itself" },
      {
        type: "p",
        text: "For medicines, vaccines and perishable food, a few hours outside the right temperature can destroy an entire shipment. IoT temperature and humidity sensors raise an alert the moment conditions drift, allowing teams to act before products are lost.",
      },
      { type: "h2", text: "Tracking what moves" },
      {
        type: "ul",
        items: [
          "GPS tracking shows exactly where vehicles and cargo are at all times.",
          "Fuel sensors expose theft and inefficient routing.",
          "Geofencing alerts you when assets leave authorised areas.",
        ],
      },
      {
        type: "p",
        text: "The value is not just the data — it is the ability to act on it quickly. The best IoT deployments pair sensors with clear dashboards and automated alerts so the right person knows the moment something needs attention.",
      },
      { type: "h2", text: "Designed for local conditions" },
      {
        type: "p",
        text: "Connectivity in the field is rarely perfect. Well-designed IoT solutions use low-power networks, edge processing and store-and-forward so devices keep working and sync their data when the network returns. That resilience is essential for African operating environments.",
      },
    ],
  },
  {
    slug: "cybersecurity-essentials-smes",
    title: "Cybersecurity Essentials Every SME Should Have in Place",
    excerpt:
      "You don't need an enterprise budget to dramatically reduce your risk. These fundamentals stop the majority of attacks.",
    category: "Cybersecurity",
    author: "David Kimaro",
    date: "2026-04-30",
    readingTime: "4 min read",
    gradient: "from-brand-indigo to-brand-blue",
    body: [
      {
        type: "p",
        text: "Small and medium businesses often assume they are too small to be targeted. In reality, attackers favour SMEs precisely because their defences are weaker. The good news is that a handful of fundamentals stop the vast majority of attacks.",
      },
      { type: "h2", text: "The high-impact basics" },
      {
        type: "ul",
        items: [
          "Enable multi-factor authentication on every important account.",
          "Keep systems and software patched and up to date.",
          "Use endpoint protection on all devices.",
          "Back up your data regularly — and test that the backups restore.",
          "Train your team to recognise phishing emails and messages.",
        ],
      },
      {
        type: "p",
        text: "None of these require a large budget, yet together they eliminate the most common attack paths. The biggest single weakness in most organisations is not technology — it is people clicking on something they shouldn't.",
      },
      { type: "h2", text: "Know where you stand" },
      {
        type: "p",
        text: "A security assessment gives you a clear, prioritised picture of your risks so you can invest where it matters most. It is the most cost-effective first step any organisation can take towards being secure.",
      },
    ],
  },
  {
    slug: "choosing-cloud-provider",
    title: "AWS, Azure or Google Cloud? Choosing the Right Cloud for Your Business",
    excerpt:
      "The big three clouds are more alike than different. The right choice depends on your workloads, skills and budget — not the hype.",
    category: "Cloud Computing",
    author: "Fatma Juma",
    date: "2026-04-15",
    readingTime: "5 min read",
    gradient: "from-brand-blue to-brand-indigo",
    body: [
      {
        type: "p",
        text: "One of the most common questions we hear is which cloud provider a business should choose. The honest answer is that for most organisations, all three major providers will do the job well. The right choice depends far more on your specific context than on any single provider's marketing.",
      },
      { type: "h2", text: "What actually matters" },
      {
        type: "ul",
        items: [
          "Your existing tools and skills — building on what your team already knows reduces cost and risk.",
          "Your workloads — some platforms suit certain databases, AI services or enterprise software better.",
          "Cost and pricing models — small differences add up at scale, so model your real usage.",
          "Support and local availability — response times and regional presence matter.",
        ],
      },
      {
        type: "p",
        text: "Being vendor-neutral, we recommend the platform that genuinely fits each client. Often the smartest approach is starting with one provider and keeping your architecture portable enough to adapt later.",
      },
      { type: "h2", text: "Get the foundations right" },
      {
        type: "p",
        text: "Whichever provider you choose, the fundamentals are the same: a secure, well-architected environment, automated deployments, monitoring and a tested backup and recovery plan. Get those right and you'll succeed on any cloud.",
      },
    ],
  },
  {
    slug: "building-mobile-first-tanzania",
    title: "Why Every Product in Tanzania Should Be Built Mobile-First",
    excerpt:
      "The majority of your users will meet your product on a phone, often on a limited connection. Designing for that reality is no longer optional.",
    category: "Software Development",
    author: "Emmanuel Nyerere",
    date: "2026-03-26",
    readingTime: "4 min read",
    gradient: "from-brand-cyan to-brand-blue",
    body: [
      {
        type: "p",
        text: "In Tanzania, as across much of Africa, the phone is the primary — and often the only — device through which people access the internet. Any product that treats mobile as an afterthought is designing for the minority of its users.",
      },
      { type: "h2", text: "Mobile-first is a mindset" },
      {
        type: "p",
        text: "Building mobile-first means starting with the smallest screen and the most constrained connection, then enhancing for larger devices. It forces clarity: if a feature works well on a phone on a slow connection, it will work everywhere.",
      },
      { type: "h2", text: "Practical principles" },
      {
        type: "ul",
        items: [
          "Optimise for low bandwidth and intermittent connectivity.",
          "Design for touch, with clear, generous tap targets.",
          "Support offline use wherever it makes sense.",
          "Integrate mobile money as a first-class payment option.",
        ],
      },
      {
        type: "p",
        text: "These principles don't just serve mobile users — they produce faster, simpler, more accessible products for everyone.",
      },
    ],
  },
  {
    slug: "ditronics-expands-services",
    title: "Ditronics Expands Managed Services and Cybersecurity Offerings",
    excerpt:
      "We're growing our team and capabilities to support clients across Tanzania with end-to-end managed technology services.",
    category: "Company News",
    author: "Rehema Salum",
    date: "2026-03-10",
    readingTime: "3 min read",
    gradient: "from-brand-indigo to-brand-cyan",
    body: [
      {
        type: "p",
        text: "We're excited to share that Ditronics is expanding its managed services and cybersecurity offerings to better support organisations across Tanzania. As our clients grow, so do their needs for reliable, secure, always-on technology — and we're scaling our team and capabilities to meet them.",
      },
      { type: "h2", text: "What's new" },
      {
        type: "ul",
        items: [
          "Expanded 24/7 monitoring and managed support with defined SLAs.",
          "Dedicated cybersecurity assessments, training and incident response.",
          "Growing engineering and infrastructure teams to deliver at scale.",
        ],
      },
      {
        type: "p",
        text: "Our goal remains the same as it was on day one: to be the technology partner our clients can rely on completely. These investments mean we can support more organisations, more deeply, across their entire technology stack.",
      },
      {
        type: "p",
        text: "If you'd like to learn how our managed services could support your organisation, we'd love to talk. Reach out for a free, no-obligation consultation.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export const featuredPost = posts[0];
