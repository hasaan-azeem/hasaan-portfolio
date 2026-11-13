
import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";
import "./Section2.css";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const ARROW_BTN_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const HERO_LIST_ITEMS = [
    "Developed WebXGuard, a web application security assessment platform",
    "Built ShopSwift, a full-stack ecommerce application",
    "Developed Nordvia Exports' digital presence and business website",
    "Worked across SaaS, ecommerce, and business-focused applications",
];

const TECH_STACK = [
    "React & Next.js",
    "Node.js & FastAPI",
    "MongoDB & PostgreSQL",
    "AI Integrations & Automation",
    "AWS Fundamentals",
];

const FOOTER_TAGS = [
    "[ Problem-solving focused ]",
    "[ Business-oriented ]",
    "[ Full-stack development ]",
    "[ Practical solutions ]",
    "[ Continuous learning ]",
];

export default function Section2() {
    return (
        <div className="bg-neutral-50">
            <div className="container-2200">

                <section
                    id="portfolio"
                    className="sec-2-home-5 portfolio-area pt-120 pb-120 rounded-5 mx-lg-3 mx-2 fix bg-neutral-100"
                >
                    <div className="container">

                        {/* Section Heading */}

                        <div className="row pb-60 g-2">

                            <div className="col-xxl-1 col-lg-2">
                                <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">

                                    <span className="text-uppercase">
                                        <span className="text-1">Why Hasaan</span>
                                        <span className="text-2">Why Hasaan</span>
                                    </span>

                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>

                                </span>
                            </div>

                            <div className="col-xxl-9 col-lg-10">
                                <h2 className="reveal-text lh-1 h3">
                                    <RevealText>
                                        I help businesses solve operational and customer-facing problems through software, automation, and practical digital solutions.
                                    </RevealText>
                                </h2>
                            </div>

                        </div>

                        {/* Bento Grid */}

                        <div className="row g-3 sec-2-home-5__grid">

                            {/* Column 1: Professional Introduction */}

                            <div className="col-xxl-4 col-lg-6">

                                <div className="sec-2-home-5__col p-2 rounded-4 bg-neutral-0">

                                    <div className="sec-2-home-5__card sec-2-home-5__card--hero rounded-4 overflow-hidden p-relative">

                                        <div className="sec-2-home-5__hero-bg" />

                                        <picture>
                                            <source
                                                media="(max-width: 767px)"
                                                srcSet="/assets/imgs/pages/Image_for_Bento_1.png"
                                            />

                                            <img
                                                src="/assets/imgs/pages/Image_for_Bento_1.png"
                                                alt="Hasaan Azeem, Full Stack Developer"
                                                width={600}
                                                height={400}
                                                className="sec-2-home-5__hero-img"
                                                loading="lazy"
                                            />
                                        </picture>

                                        <div className="sec-2-home-5__hero-overlay p-absolute top-0 left-0 w-100 h-100 d-flex flex-column justify-content-between p-4">

                                            <div className="d-flex justify-content-between align-items-start">

                                                <p className="sec-2-home-5__hero-title text-white fw-bold mb-0">
                                                    Building Digital Products That Solve Real Problems.
                                                </p>

                                                <span className="text-white opacity-75 text-nowrap">
                                                    © 2026
                                                </span>

                                            </div>

                                            <div className="d-flex justify-content-between align-items-end flex-wrap gap-2">

                                                <span className="text-white fz-font-body">
                                                    Full Stack Developer
                                                </span>

                                                <Link
                                                    className="at-btn bg-neutral-0 changeless text-dark py-2 px-3 fz-font-body"
                                                    to="/contact"
                                                >
                                                    <span>
                                                        <span className="text-1">Let's build</span>
                                                        <span className="text-2">Let's build</span>
                                                    </span>

                                                    <i>
                                                        {ARROW_BTN_SVG}
                                                        {ARROW_BTN_SVG}
                                                    </i>
                                                </Link>

                                            </div>

                                        </div>

                                    </div>

                                    {/* Project Highlights */}

                                    <div className="sec-2-home-5__card sec-2-home-5__card--list p-4 d-flex align-items-center">

                                        <ul className="sec-2-home-5__list list-unstyled mb-0">

                                            {HERO_LIST_ITEMS.map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="sec-2-home-5__list-item"
                                                >
                                                    {item}
                                                </li>
                                            ))}

                                        </ul>

                                    </div>

                                </div>

                            </div>

                            {/* Column 2: Technical Expertise */}

                            <div className="col-xxl-4 col-lg-6">

                                <div className="sec-2-home-5__col">

                                    <div className="sec-2-home-5__card sec-2-home-5__card--testimonial p-relative rounded-4 bg-neutral-0 p-4 p-md-5 fix">

                                        <div className="d-flex align-items-center gap-3 mb-4">

                                            <div className="sec-2-home-5__avatar rounded-3 overflow-hidden flex-shrink-0">

                                                <img
                                                    src="/assets/imgs/pages/Icon.webp"
                                                    alt="Full Stack Development"
                                                    width={56}
                                                    height={56}
                                                    className="img-cover"
                                                    loading="lazy"
                                                />

                                            </div>

                                            <div>
                                                <p className="fw-600 neutral-900 fz-font-md mb-0">
                                                    Technical Expertise
                                                </p>

                                                <span className="neutral-500 small fz-font-label">
                                                    Full Stack & AI Solutions
                                                </span>
                                            </div>

                                        </div>

                                        <div className="mb-3">

                                            <span className="neutral-500 small text-uppercase">
                                                Technologies I work with
                                            </span>

                                        </div>

                                        <h4 className="neutral-900 fz-font-xl fw-500 mb-4">
                                            From frontend experiences to backend systems and AI-powered integrations.
                                        </h4>

                                        <div className="d-flex flex-wrap gap-2 mb-4">

                                            {TECH_STACK.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="sec-2-home-5__tech-tag"
                                                >
                                                    {tech}
                                                </span>
                                            ))}

                                        </div>

                                        <span className="neutral-500 small d-block mt-4 pb-145">
                                            [Practical, project-based experience]
                                        </span>

                                        <div className="sec-2-home-5__product-img-wrap p-absolute bottom-0 end-0 d-none d-md-block">

                                            <img
                                                src="/assets/imgs/pages/Bento.svg"
                                                alt="Technology illustration"
                                                className="sec-2-home-5__product-img at_fade_anim"
                                                data-delay=".5"
                                                style={{
                                                    width: "365px",
                                                    height: "250px",
                                                    display: "block",
                                                }}
                                                loading="lazy"
                                            />

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* Column 3: CTA and Personal Philosophy */}

                            <div className="col-xxl-4 col-12">

                                <div className="sec-2-home-5__col sec-2-home-5__col--three">

                                    {/* Top Right: Let's Talk CTA */}

                                    <div className="sec-2-home-5__card sec-2-home-5__card--small rounded-4 bg-neutral-0 p-4 p-md-5 p-relative fix mb-20">

                                        <div className="h-100 d-flex flex-column justify-content-center align-items-center">

                                            <div className="d-flex flex-wrap align-items-center justify-content-center gap-3 gap-md-4 w-100">

                                                <Link
                                                    to="/contact"
                                                    className="at-btn bg-transparent p-relative flex-shrink-0"
                                                    aria-label="Let's talk about your project"
                                                >

                                                    <img
                                                        src="/assets/imgs/icons/badge-1.svg"
                                                        alt="Let's Talk"
                                                        width={140}
                                                        height={140}
                                                        loading="lazy"
                                                    />

                                                    <span className="position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center justify-content-center">

                                                        <i className="text-white">
                                                            {ARROW_SVG}
                                                            {ARROW_SVG}
                                                        </i>

                                                        <span className="mt-2">
                                                            <span className="fw-700 text-white">
                                                                Let's Talk
                                                            </span>
                                                        </span>

                                                    </span>

                                                </Link>

                                                <p className="mb-0 neutral-700 text-center text-md-start">

                                                    Empowering ambitious brands to
                                                    <br className="d-none d-xl-block" /> define their
                                                    presence with focus
                                                    <br className="d-none d-xl-block" /> and precision.

                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                    {/* Bottom Right Cards */}

                                    <div className="row g-2 d-none d-md-flex">

                                        {/* Personal Image */}

                                        <div className="col-md-6">

                                            <div className="sec-2-home-5__card sec-2-home-5__card--small sec-2-home-5__card--img rounded-4 h-100 fix">

                                                <div className="img">

                                                    <img
                                                        src="/assets/imgs/pages/We audit everything (242 x 248 px).png"
                                                        alt="Hasaan Azeem, Full Stack Developer"
                                                        width={242}
                                                        height={248}
                                                        className="sec-2-home-5__thumb-img at_fade_anim"
                                                        data-delay=".5"
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "cover",
                                                        }}
                                                        loading="lazy"
                                                    />

                                                </div>

                                            </div>

                                        </div>

                                        {/* Personal Philosophy */}

                                        <div className="col-md-6">

                                            <div className="sec-2-home-5__card sec-2-home-5__card--small sec-2-home-5__card--quote bg-neutral-0 overflow-hidden h-100">

                                                <div className="sec-2-home-5__quote-icon mb-20">

                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="27"
                                                        height="27"
                                                        viewBox="0 0 27 27"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M6.75 13.5C10.4779 13.5 13.5 10.4779 13.5 6.75C13.5 10.477 16.5207 13.4986 20.2474 13.5C16.5207 13.5014 13.5 16.523 13.5 20.25C13.5 16.5221 10.4779 13.5 6.75 13.5C3.02208 13.5 4.58005e-07 16.5221 2.95052e-07 20.25L0 27L6.75 27C10.4779 27 13.5 23.9779 13.5 20.25C13.5 23.9779 16.5221 27 20.25 27L27 27L27 20.25C27 16.523 23.9794 13.5014 20.2526 13.5C23.9794 13.4986 27 10.4779 27 6.75L27 4.54184e-06L20.25 4.83689e-06C16.5221 3.09249e-06 13.5 3.02208 13.5 6.75C13.5 3.02208 10.4779 3.35669e-06 6.75 1.6123e-06L2.36042e-06 0L1.47526e-06 6.75C9.86401e-07 10.4779 3.02208 13.5 6.75 13.5Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>

                                                </div>

                                                <blockquote className="neutral-900 fz-font-md fw-500 mb-0">

                                                    "I don't just focus on writing code. I focus on understanding the problem, choosing the right technology, and building solutions that make businesses work better."

                                                </blockquote>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Footer Tags */}

                        <div className="row pt-70">

                            <div className="col-12 order-5">

                                <div
                                    className="d-flex flex-wrap align-items-center justify-content-lg-between justify-content-center gap-md-5 gap-2 at_fade_anim"
                                    data-fade-from="bottom"
                                    data-duration="2"
                                >

                                    {FOOTER_TAGS.map((tag, i) => (
                                        <p
                                            key={i}
                                            className="neutral-900 mb-0"
                                        >
                                            {tag}
                                        </p>
                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

            </div>
        </div>
    );
}
