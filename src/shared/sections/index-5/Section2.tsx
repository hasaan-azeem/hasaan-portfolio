import { Link } from "react-router-dom";
import "./Section2.css";


const APPROACH = [
    "Understand the problem before choosing the technology.",
    "Build with clarity, usability, and maintainability in mind.",
    "Keep learning, improving, and refining the solution.",
];

const ARROW = (
    <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path
            d="M2.5 11.5L11.5 2.5M3.5 2.5H11.5V10.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default function Section2() {
    return (
        <section
            id="about"
            className="about-story"
            aria-labelledby="about-story-title"
        >
            <div className="about-story__container">

                {/* Section intro */}

                <div className="about-story__intro">

                    <div className="about-story__eyebrow">
                        <span className="about-story__eyebrow-dot" />
                        <span>A LITTLE ABOUT ME</span>
                    </div>

                    <div className="about-story__heading-wrap">
                        <h2 id="about-story-title">
                            I enjoy turning complex ideas into
                            <span> useful digital experiences.</span>
                        </h2>

                        <p className="about-story__intro-note">
                            A developer by craft. A problem-solver by mindset.
                            Always curious about what can be built next.
                        </p>
                    </div>

                </div>

                {/* Main story layout */}

                <div className="about-story__main">

                    {/* Personal image */}

                    <div className="about-story__visual">

                        <div className="about-story__image-wrap">

                            <img
                                src="/assets/imgs/pages/We audit everything (242 x 248 px).webp"
                                alt="Hasaan Azeem"
                                className="about-story__image"
                                width={600}
                                height={720}
                                loading="lazy"
                            />

                            <div className="about-story__image-shade" />

                            <div className="about-story__image-caption">
                                <span className="about-story__caption-label">
                                    THE PERSON BEHIND THE CODE
                                </span>

                                <span className="about-story__caption-name">
                                    Hasaan Azeem
                                </span>

                                <span className="about-story__caption-role">
                                    Full Stack Software Engineer
                                </span>
                            </div>

                            <div className="about-story__image-index">
                                01 <span>/ ABOUT</span>
                            </div>

                        </div>

                        <div className="about-story__visual-note">
                            <span className="about-story__note-mark">“</span>
                            <p>
                                Good technology should make things simpler,
                                not more complicated.
                            </p>
                        </div>

                    </div>

                    {/* Personal story */}

                    <div className="about-story__content">

                        <div className="about-story__story-label">
                            <span>MY STORY</span>
                            <span className="about-story__story-line" />
                        </div>

                        <div className="about-story__story-copy">

                            <p className="about-story__lead">
                                I’m Hasaan, a Full Stack Software Engineer
                                who enjoys building things that have a
                                purpose.
                            </p>

                            <p>
                                My journey started with a curiosity about
                                how websites work. That curiosity grew into
                                a deeper interest in software engineering,
                                from crafting user interfaces to working
                                with APIs, databases, authentication, and
                                the systems behind an application.
                            </p>

                            <p>
                                Since then, I’ve worked on projects ranging
                                from ecommerce and business websites to
                                security tools and business management
                                software. Each one has taught me something
                                new about turning an idea into a working
                                product.
                            </p>

                            <p>
                                Today, I bring together engineering,
                                product thinking, and practical AI
                                integrations to build solutions that are
                                useful, thoughtful, and built to grow.
                            </p>

                        </div>

                        <div className="about-story__approach">

                            <div className="about-story__approach-heading">
                                WHAT GUIDES MY WORK
                            </div>

                            <div className="about-story__approach-list">
                                {APPROACH.map((item, index) => (
                                    <div
                                        className="about-story__approach-item"
                                        key={item}
                                    >
                                        <span className="about-story__approach-number">
                                            0{index + 1}
                                        </span>

                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>

                        </div>

                        <div className="about-story__actions">

                            <Link
                                to="/contact"
                                className="about-story__contact-link"
                            >
                                <span>Let's work together</span>
                                {ARROW}
                            </Link>

                            <span className="about-story__availability">
                                Open to meaningful projects and opportunities
                            </span>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}