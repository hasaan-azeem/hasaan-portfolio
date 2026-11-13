import RevealText from "@/shared/effects/RevealText";

const PROJECTS = [
  {
    number: "01",
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
    desktopImage: "/assets/imgs/pages/webp-images/webxguard.webp ",
    imageAlt: "WebXGuard security platform",
  },
  {
    number: "02",
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
  },
  {
    number: "03",
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
  },
];

type Section3Props = {
  className?: string;
};

export default function Section3({ className }: Section3Props) {
  return (
    <div className={`container-2200 ${className ?? ""}`.trim()}>
      <section className="at-service-area bg-neutral-50 rounded-5 mx-lg-3 mx-2 pt-100 pb-80">
        <div className="container">
          {/* SECTION HEADER */}
          <div className="d-flex justify-content-between align-items-center gap-3 mb-5 pb-3 border-bottom">
            <span
              className="text-uppercase fw-medium"
              style={{ fontSize: "12px", letterSpacing: "1.5px" }}
            >
              Selected Work
            </span>

            <span
              className="text-uppercase"
              style={{ fontSize: "12px", letterSpacing: "1px" }}
            >
              © Hasaan Azeem
            </span>
          </div>

          <div className="row mb-5">
            <div className="col-lg-8 offset-lg-4">
              <h2
                className="fw-medium mb-0"
                style={{
                  fontSize: "clamp(30px, 4.2vw, 58px)",
                  lineHeight: 1.12,
                  letterSpacing: "-1.8px",
                }}
              >
                <RevealText>
                  Turning Complex Problems Into Practical Software Solutions.
                </RevealText>
              </h2>
            </div>
          </div>
        </div>

        {/* PROJECT SCROLL AREA */}
        <div className="scroll-section vertical-section position-relative">
          <div className="wrapper">
            {PROJECTS.map((project) => (
              <div key={project.number} className="item">
                {/* SOLID PROJECT CONTAINER */}
                <div className="container bg-neutral-50 pt-20 pb-40">
                  <div className="row align-items-center gy-4 gy-lg-0">
                    {/* PROJECT DETAILS */}
                    <div className="col-lg-6 col-12">
                      <div className="d-flex flex-column justify-content-between h-100 py-3 px-2">
                        <div>
                          <div className="d-flex align-items-center gap-3 mb-3">
                            <span
                              className="fw-medium"
                              style={{ fontSize: "13px" }}
                            >
                              {project.number}
                            </span>

                            <span
                              className="text-uppercase"
                              style={{
                                fontSize: "11px",
                                letterSpacing: "1.2px",
                              }}
                            >
                              {project.category}
                            </span>
                          </div>

                          <h3
                            className="fw-medium text-scale-anim-2 mb-3"
                            style={{
                              fontSize: "clamp(32px, 3.8vw, 50px)",
                              lineHeight: 1.08,
                              letterSpacing: "-1.5px",
                            }}
                          >
                            {project.title}
                          </h3>

                          <p
                            className="neutral-950 mb-4"
                            style={{
                              fontSize: "clamp(15px, 1.2vw, 17px)",
                              lineHeight: 1.75,
                              maxWidth: "540px",
                            }}
                          >
                            <RevealText>{project.description}</RevealText>
                          </p>
                        </div>

                        {/* CHALLENGE & SOLUTION */}
                        <div className="row g-3 mb-4">
                          <div className="col-sm-6">
                            <span
                              className="d-block text-uppercase fw-semibold mb-2"
                              style={{ fontSize: "11px", letterSpacing: "1px" }}
                            >
                              The Challenge
                            </span>

                            <p
                              className="neutral-950 mb-0"
                              style={{ fontSize: "13px", lineHeight: 1.7 }}
                            >
                              {project.problem}
                            </p>
                          </div>

                          <div className="col-sm-6">
                            <span
                              className="d-block text-uppercase fw-semibold mb-2"
                              style={{ fontSize: "11px", letterSpacing: "1px" }}
                            >
                              The Solution
                            </span>

                            <p
                              className="neutral-950 mb-0"
                              style={{ fontSize: "13px", lineHeight: 1.7 }}
                            >
                              {project.solution}
                            </p>
                          </div>
                        </div>

                        {/* KEY CAPABILITIES */}
                        <div className="mb-4">
                          <span
                            className="d-block text-uppercase fw-semibold mb-3"
                            style={{ fontSize: "11px", letterSpacing: "1px" }}
                          >
                            Key Capabilities
                          </span>

                          <div className="row g-2">
                            {project.features.map((feature) => (
                              <div className="col-sm-6" key={feature}>
                                <div className="d-flex align-items-start gap-2">
                                  <span style={{ fontSize: "13px" }}>↗</span>
                                  <span
                                    className="neutral-950"
                                    style={{
                                      fontSize: "13px",
                                      lineHeight: 1.5,
                                    }}
                                  >
                                    {feature}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* TECHNOLOGY STACK */}
                        <div>
                          <span
                            className="d-block text-uppercase fw-semibold mb-3"
                            style={{ fontSize: "11px", letterSpacing: "1px" }}
                          >
                            Technologies
                          </span>

                          <div className="d-flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="border rounded-pill neutral-950"
                                style={{
                                  padding: "6px 12px",
                                  fontSize: "11px",
                                  lineHeight: 1.4,
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* RESPONSIVE PROJECT IMAGE */}
                    <div className="col-lg-5 offset-lg-1 col-12">
                      <div
                        className="rounded-4 overflow-hidden"
                        style={{
                          width: "100%",
                          aspectRatio: "4 / 3",
                          backgroundColor: "#eaeaea",
                        }}
                      >
                        <div className="thumb fix anim-zoomin w-100 h-100">
                          <img
                            src={project.desktopImage}
                            alt={project.imageAlt}
                            width={1200}
                            height={900}
                            loading="lazy"
                            className="w-100 h-100"
                            style={{
                              display: "block",
                              objectFit: "contain",
                              objectPosition: "center",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
