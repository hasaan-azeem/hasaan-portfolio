
import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";
import { PROJECTS } from "../../sections/projects/projectsData";
import "./ProjectResponsive.css";

export default function Section3() {
    return (
        <section
            id="projects"
            className="at-service-area bg-neutral-50 rounded-5 mx-lg-3 mx-2 pt-100 pb-80"
        >
            <div className="container">
                <div className="row align-items-end mb-5">
                    <div className="col-lg-8">
                        <div className="section-title">
                            <span className="text-uppercase">
                                Selected Work
                            </span>
                            <h2>
                                <RevealText>
                                    Turning Complex Problems Into Practical
                                    Software Solutions.
                                </RevealText>
                            </h2>
                        </div>
                    </div>

                    <div className="col-lg-4 text-lg-end">
                        <span className="text-uppercase">
                            © Hasaan Azeem
                        </span>
                    </div>
                </div>

                {/* DESKTOP PROJECT SHOWCASE */}
                <div className="s3-desktop-projects">
                    <div className="scroll-section vertical-section">
                        <div className="wrapper">
                            {PROJECTS.map((project) => (
                                <div className="item" key={project.slug}>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="service-content">
                                                <span className="text-uppercase">
                                                    {project.category}
                                                </span>

                                                <h3>{project.title}</h3>

                                                <p>{project.description}</p>

                                                <div className="project-features">
                                                    {project.features.map(
                                                        (feature) => (
                                                            <span key={feature}>
                                                                {feature}
                                                            </span>
                                                        )
                                                    )}
                                                </div>

                                                <div className="project-technologies">
                                                    {project.technologies.map(
                                                        (tech) => (
                                                            <span key={tech}>
                                                                {tech}
                                                            </span>
                                                        )
                                                    )}
                                                </div>

                                                <Link
                                                    to={`/projects/${project.slug}`}
                                                    className="btn"
                                                >
                                                    Explore Project
                                                    <span aria-hidden="true">
                                                        ↗
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <Link
                                                to={`/projects/${project.slug}`}
                                                className="service-image d-block"
                                                aria-label={`View ${project.title} project`}
                                            >
                                                <img
                                                    src={project.desktopImage}
                                                    alt={project.imageAlt}
                                                    width={1200}
                                                    height={900}
                                                    loading="lazy"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* MOBILE PROJECT GALLERY */}
                <div className="s3-mobile-gallery">
                    <div className="s3-mobile-gallery-grid">
                        {PROJECTS.map((project) => (
                            <Link
                                to={`/projects/${project.slug}`}
                                key={project.slug}
                                className="s3-mobile-project-card"
                                aria-label={`Explore ${project.title}`}
                            >
                                <div className="s3-mobile-project-image">
                                    <img
                                        src={project.desktopImage}
                                        alt={project.imageAlt}
                                        width={1200}
                                        height={900}
                                        loading="lazy"
                                    />

                                    <span
                                        className="s3-mobile-project-icon"
                                        aria-hidden="true"
                                    >
                                        ↗
                                    </span>
                                </div>

                                <div className="s3-mobile-project-info">
                                    <div className="s3-mobile-project-meta">
                                        <span>{project.number}</span>
                                        <span>{project.category}</span>
                                    </div>

                                    <div className="s3-mobile-project-title">
                                        <h3>{project.title}</h3>
                                        <span aria-hidden="true">↗</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <p className="s3-mobile-gallery-caption">
                        SELECT A PROJECT TO EXPLORE
                    </p>
                </div>
            </div>
        </section>
    );
}
