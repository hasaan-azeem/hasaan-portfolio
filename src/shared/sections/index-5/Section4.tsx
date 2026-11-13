
import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

// Home 5 Section 4 - Technical Skills & Expertise

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const ARROW_CIRCLE_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path
            d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z"
            fill="currentColor"
        />
    </svg>
);


const SKILL_CATEGORIES = [
    {
        number: "01",
        label: "INTERFACE DEVELOPMENT",
        title: "Frontend Engineering",
        description:
            "Building responsive, interactive interfaces and modern web experiences.",
        skills: [
            "React.js",
            "Next.js",
            "JavaScript",
            "TypeScript",
            "Tailwind CSS",
            "HTML5",
            "CSS3",
            "GSAP",
        ],
        featured: ["React.js", "Next.js", "JavaScript", "Tailwind CSS"],
    },
    {
        number: "02",
        label: "SERVER & APPLICATION LOGIC",
        title: "Backend Development",
        description:
            "Developing backend systems, REST APIs, authentication and application logic.",
        skills: [
            "Node.js",
            "Express.js",
            "Python",
            "FastAPI",
            "Flask",
            "JWT",
            "OAuth",
            "REST APIs",
        ],
        featured: ["Node.js", "FastAPI", "REST APIs", "JWT", "OAuth"],
    },
    {
        number: "03",
        label: "DATA & STORAGE",
        title: "Database Engineering",
        description:
            "Designing structured databases and managing application data efficiently.",
        skills: [
            "MongoDB",
            "PostgreSQL",
            "MySQL",
            "Microsoft SQL Server",
            "SQL",
            "Firebase",
            "Database Design",
        ],
        featured: ["MongoDB","PostgreSQL", "Microsoft SQL Server"],
    },
    {
        number: "04",
        label: "INTELLIGENT APPLICATIONS",
        title: "AI Integration",
        description:
            "Integrating large language models and intelligent capabilities into modern applications.",
        skills: [
            "OpenAI API",
            "Claude API",
            "Groq",
            "LangChain",
            "LLM Integration",
            "AI Agents",
        ],
        featured: ["OpenAI API", "LangChain", "LLM Integration"],
    },
    {
        number: "05",
        label: "BUSINESS PROCESS AUTOMATION",
        title: "Workflow Automation",
        description:
            "Connecting applications, automating repetitive operations and building AI-powered communication workflows.",
        skills: [
            "n8n",
            "Make",
            "Zapier",
            "Vapi",
            "AI Voice Agents",
            "API Integrations",
            "Workflow Design",
        ],
        featured: ["n8n", "Zapier", "Vapi", "API Integrations"],
    },
    {
        number: "06",
        label: "INFRASTRUCTURE & DELIVERY",
        title: "Cloud & DevOps",
        description:
            "Working with cloud fundamentals, version control and application deployment workflows.",
        skills: [
            "AWS",
            "Git",
            "GitHub",
            "Vercel",
            "Netlify",
            "Render",
            "CI/CD Fundamentals",
        ],
        featured: ["AWS", "Git & GitHub", "Vercel", "Netlify", "Render"],
    },
    {
        number: "07",
        label: "CROSS-PLATFORM DEVELOPMENT",
        title: "Mobile Development",
        description:
            "Building cross-platform mobile application experiences using modern mobile development technologies.",
        skills: [
            "React Native",
            "Flutter",
            "Dart",
            "Cross-platform UI",
            "Mobile App Development",
        ],
        featured: ["React Native", "Flutter"],
    },
    {
        number: "08",
        label: "BUSINESS PLATFORMS",
        title: "CMS & Ecommerce",
        description:
            "Creating business websites and ecommerce experiences using flexible content management platforms.",
        skills: [
            "WordPress",
            "WooCommerce",
            "Elementor",
            "Divi",
            "Custom Websites",
            "Ecommerce",
            "Shopify",
        ],
        featured: ["WordPress", "WooCommerce", "Shopify"],
    },
];


const WORKFLOW_STEPS = [
    "Understand the problem",
    "Choose the right technology",
    "Build the solution",
    "Test and improve",
];

export default function Section4() {
    return (
        <div className="bg-neutral-50">
            <div className="container-2200">

                <section className="sec-4-home-5 pt-100 pb-100 rounded-5 mx-lg-3 mx-2 fix p-relative bg-neutral-0">

                    <div className="container">

                        {/* Section Header */}

                        <div className="row g-4 align-items-end">

                            <div className="col-lg-8">

                                <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">

                                    <span className="text-uppercase">
                                        <span className="text-1">Technical Expertise</span>
                                        <span className="text-2">Technical Expertise</span>
                                    </span>

                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>

                                </span>

                                <h2 className="reveal-text mb-0">
                                    <RevealText>
                                        The technology behind meaningful digital solutions.
                                    </RevealText>
                                </h2>

                            </div>

                            <div className="col-lg-4">

                                <p
                                    className="neutral-500 mb-0 at_fade_anim"
                                    data-fade-from="bottom"
                                    data-delay=".2"
                                >
                                    From frontend experiences to backend architecture and AI-powered integrations, I use technology to solve practical problems and build useful products.
                                </p>

                            </div>

                        </div>

                        {/* Skills Overview */}

                        <div className="row g-3 pt-60">

                            <div className="col-lg-4 col-md-6">

                                <div
                                    className="h-100 rounded-4 p-4 p-lg-5 bg-neutral-100 at_fade_anim"
                                    data-fade-from="bottom"
                                    data-delay=".1"
                                    style={{ minHeight: "190px" }}
                                >

                                    <span className="neutral-500 small text-uppercase">
                                        MY APPROACH
                                    </span>

                                    <h3 className="neutral-900 mt-4 mb-2">
                                        Beyond just writing code.
                                    </h3>

                                    <p className="neutral-500 mb-0 fz-sm">
                                        Understanding business needs and translating them into practical technical solutions.
                                    </p>

                                </div>

                            </div>

                            <div className="col-lg-4 col-md-6">

                                <div
                                    className="h-100 rounded-4 p-4 p-lg-5 bg-neutral-100 at_fade_anim"
                                    data-fade-from="bottom"
                                    data-delay=".2"
                                    style={{ minHeight: "190px" }}
                                >

                                    <span className="neutral-500 small text-uppercase">
                                        ENGINEERING
                                    </span>

                                    <h3 className="neutral-900 mt-4 mb-2">
                                        Full-stack development.
                                    </h3>

                                    <p className="neutral-500 mb-0 fz-sm">
                                        Connecting interfaces, backend systems, databases and APIs into complete applications.
                                    </p>

                                </div>

                            </div>

                            <div className="col-lg-4 col-md-12">

                                <div
                                    className="h-100 rounded-4 p-4 p-lg-5 bg-neutral-100 at_fade_anim"
                                    data-fade-from="bottom"
                                    data-delay=".3"
                                    style={{ minHeight: "190px" }}
                                >

                                    <span className="neutral-500 small text-uppercase">
                                        MODERN TECHNOLOGY
                                    </span>

                                    <h3 className="neutral-900 mt-4 mb-2">
                                        AI-powered possibilities.
                                    </h3>

                                    <p className="neutral-500 mb-0 fz-sm">
                                        Integrating intelligent tools and automation into applications and business workflows.
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Skills Grid Heading */}

                        <div className="row pt-100 pb-40 align-items-end">

                            <div className="col-lg-8">

                                <span className="neutral-500 small text-uppercase mb-2 d-block">
                                    THE TOOLKIT
                                </span>

                                <h3 className="neutral-900 mb-0">
                                    Technologies I work with.
                                </h3>

                            </div>

                            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">

                                <span className="neutral-500 small">
                                    08 AREAS OF EXPERTISE
                                </span>

                            </div>

                        </div>

                        {/* Skill Categories */}

                        <div className="row g-3">

                            {SKILL_CATEGORIES.map((category, index) => (

                                <div
                                    key={category.number}
                                    className="col-xxl-4 col-lg-6 col-md-6"
                                >

                                    <div
                                        className="rounded-4 bg-neutral-100 p-4 p-lg-5 h-100 position-relative overflow-hidden at_fade_anim"
                                        data-fade-from="bottom"
                                        data-delay={`.${(index % 3 + 1) * 1}`}
                                        style={{
                                            minHeight: "310px",
                                            transition: "transform .45s ease, background .45s ease",
                                        }}
                                    >

                                        {/* Card Header */}

                                        <div className="d-flex justify-content-between align-items-center mb-4">

                                            <span className="neutral-500 small">
                                                {category.label}
                                            </span>

                                            <span
                                                className="neutral-900"
                                                style={{
                                                    fontSize: "13px",
                                                    letterSpacing: "1px",
                                                }}
                                            >
                                                / {category.number}
                                            </span>

                                        </div>

                                        {/* Card Title */}

                                        <h4 className="neutral-900 mb-2">
                                            {category.title}
                                        </h4>

                                        <p className="neutral-500 fz-sm mb-4">
                                            {category.description}
                                        </p>

                                        {/* Featured Skills */}

                                        <div className="d-flex flex-wrap gap-2 mb-4">

                                            {category.featured.map((skill) => (

                                                <span
                                                    key={skill}
                                                    className="neutral-900"
                                                    style={{
                                                        background: "#ffffff",
                                                        border: "1px solid rgba(0,0,0,0.07)",
                                                        borderRadius: "50px",
                                                        padding: "7px 12px",
                                                        fontSize: "12px",
                                                        fontWeight: 600,
                                                    }}
                                                >
                                                    {skill}
                                                </span>

                                            ))}

                                        </div>

                                        {/* Divider */}

                                        <div
                                            style={{
                                                height: "1px",
                                                width: "100%",
                                                background: "rgba(0,0,0,0.09)",
                                                marginBottom: "18px",
                                            }}
                                        />

                                        {/* All Skills */}

                                        <div className="d-flex flex-wrap gap-2">

                                            {category.skills.map((skill) => (

                                                <span
                                                    key={skill}
                                                    className="neutral-600"
                                                    style={{
                                                        fontSize: "12px",
                                                        lineHeight: 1.5,
                                                        padding: "4px 0",
                                                    }}
                                                >
                                                    {skill}
                                                </span>

                                            ))}

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                        {/* Development Workflow */}

                        <div className="row pt-100">

                            <div className="col-lg-4 mb-4 mb-lg-0">

                                <span className="neutral-500 small text-uppercase d-block mb-3">
                                    HOW I APPROACH PROJECTS
                                </span>

                                <h3 className="neutral-900 mb-3">
                                    Technology is a tool. Solving the problem is the goal.
                                </h3>

                                <p className="neutral-500 mb-0 fz-sm">
                                    Every project starts with understanding what needs to improve, not simply choosing a technology.
                                </p>

                            </div>

                            <div className="col-lg-8">

                                <div className="rounded-4 bg-neutral-100 p-4 p-lg-5 h-100">

                                    <div className="row g-4">

                                        {WORKFLOW_STEPS.map((step, index) => (

                                            <div
                                                key={step}
                                                className="col-sm-6"
                                            >

                                                <div className="d-flex align-items-start gap-3">

                                                    <span
                                                        className="neutral-500 flex-shrink-0"
                                                        style={{
                                                            fontSize: "13px",
                                                            paddingTop: "3px",
                                                        }}
                                                    >
                                                        0{index + 1}
                                                    </span>

                                                    <div>

                                                        <h5 className="neutral-900 mb-0">
                                                            {step}
                                                        </h5>

                                                    </div>

                                                </div>

                                            </div>

                                        ))}

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Bottom CTA */}

                        <div className="row pt-70">

                            <div className="col-12">

                                <div
                                    className="d-flex flex-wrap align-items-center justify-content-between gap-4 at_fade_anim"
                                    data-fade-from="bottom"
                                    data-duration="1.2"
                                >

                                    <div>

                                        <span className="neutral-500 small text-uppercase d-block mb-2">
                                            HAVE A PROJECT IN MIND?
                                        </span>

                                        <h4 className="neutral-900 mb-0">
                                            Let's turn your ideas into something useful.
                                        </h4>

                                    </div>

                                    <Link
                                        className="at-btn"
                                        to="/contact"
                                    >

                                        <span>
                                            <span className="text-1">
                                                Let's work together
                                            </span>

                                            <span className="text-2">
                                                Let's work together
                                            </span>
                                        </span>

                                        <i>
                                            {ARROW_SVG}
                                            {ARROW_SVG}
                                        </i>

                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

            </div>
        </div>
    );
}
