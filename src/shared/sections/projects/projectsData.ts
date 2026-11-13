
export const PROJECTS = [
  {
    number: "01",
    slug: "webxguard",
    category: "WEB APPLICATION SECURITY",
    title: "WebXGuard",
    description:
      "A web application security assessment platform that automates vulnerability scanning, prioritizes risks, and provides AI-assisted remediation guidance.",
    problem:
      "Security findings can be difficult to organize, prioritize, and act on.",
    solution:
      "A centralized platform for automated scanning, risk assessment, and actionable remediation.",
    features: [
      "Automated Vulnerability Scanning",
      "CVSS Risk Prioritization",
      "AI Remediation Guidance",
      "OAuth Authentication",
      "Security Reporting",
    ],
    technologies: [
      "React",
      "FastAPI",
      "Flask",
      "PostgreSQL",
      "Playwright",
      "Groq AI",
    ],
    desktopImage: "/assets/imgs/pages/webp-images/webxguard.webp",
    imageAlt: "WebXGuard security platform",
    status: "Completed",
  },
  {
    number: "02",
    slug: "nordvia",
    category: "B2B APPAREL & EXPORTS",
    title: "Nordvia Exports",
    description:
      "A premium B2B digital presence for an apparel export business, designed to communicate manufacturing capabilities and turn product interest into buyer enquiries.",
    problem:
      "Buyers need clear product information, customization options, and a reliable way to discuss production.",
    solution:
      "A structured website focused on product discovery, manufacturing capabilities, and enquiry generation.",
    features: [
      "Product Categories",
      "Private Label Solutions",
      "Manufacturing Capabilities",
      "Responsive Experience",
      "SEO-Friendly Pages",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP"],
    desktopImage: "/assets/imgs/pages/webp-images/nordvia.webp",
    imageAlt: "Nordvia Exports website",
    status: "Completed",
  },
  {
    number: "03",
    slug: "nexora",
    category: "ERP & BUSINESS MANAGEMENT",
    title: "Nexora ERP",
    description:
      "A modular ERP system under development, designed to structure business operations through connected modules, maintainable architecture, and reliable data management.",
    problem:
      "Business operations require connected records and structured workflows.",
    solution:
      "A modular ERP foundation with organized APIs, database relationships, and layered architecture.",
    features: [
      "Product Management",
      "Supplier Management",
      "Sales Module Development",
      "REST API Architecture",
      "SQL Server Integration",
    ],
    technologies: [".NET 10", "C#", "ASP.NET Core", "EF Core", "SQL Server"],
    desktopImage: "/assets/imgs/pages/webp-images/nexora.webp",
    imageAlt: "Nexora ERP application",
    status: "In Development",
  },
] as const;

export type Project = (typeof PROJECTS)[number];
