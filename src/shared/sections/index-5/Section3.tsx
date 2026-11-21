
import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";
import OdometerCounter from "@/shared/elements/OdometerCounter";
import { PROJECTS } from "../../sections/projects/projectsData";
import "./Section3.css";

const ARROW_DIAGONAL_SVG = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3 13L13 3M4 3H13V12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ARROW_LONG_SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="128"
    height="54"
    viewBox="0 0 128 54"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M99.2 0L126.72 25.4267L128 26.7141L126.72 27.6797L99.2 53.1064L97.6 51.4971L123.2 27.6797H0V25.4267H123.2L97.6 1.60928L99.2 0Z"
      fill="currentColor"
    />
  </svg>
);

const CROSS_SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M53.5715 0H46.4286V41.3778L17.17 12.1193L12.1193 17.17L41.3778 46.4286H0V53.5715H41.3778L12.1193 82.83L17.17 87.8805L46.4286 58.622V100H53.5715V58.622L82.83 87.8805L87.8805 82.83L58.622 53.5715H100V46.4286H58.622L87.8805 17.17L82.83 12.1193L53.5715 41.3778V0Z"
      fill="currentColor"
    />
  </svg>
);

export default function Section3() {
  return (
    <section className="s3-projects-section" id="projects">
      {/* SECTION HEADER */}
      <div className="sec-5-home-6 s3-projects-heading">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="s3-projects-topbar">
                <span className="s3-eyebrow">Selected Work</span>

                <Link
                  className="s3-top-link"
                  to="/projects/webxguard"
                  aria-label="Explore featured projects"
                >
                  <span>Explore projects</span>
                  {ARROW_DIAGONAL_SVG}
                </Link>
              </div>
            </div>

            <div className="col-lg-7 col-md-8">
              <div className="s3-heading-title">
                <h2 className="s3-main-title reveal-text">
                  <RevealText>Selected Projects</RevealText>
                </h2>

                <div className="s3-heading-arrow">
                  {ARROW_LONG_SVG}
                </div>
              </div>
            </div>

            <div className="col-lg-2 d-none d-lg-flex justify-content-center align-items-center">
              <div className="s3-heading-cross">
                {CROSS_SVG}
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="s3-project-count">
                <h3>
                  <OdometerCounter count={PROJECTS.length} />
                </h3>
                <p>
                  Featured
                  <br />
                  Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECT SHOWCASE */}
      <div className="container project-showcase-container s3-projects-container">
        <div className="scroll-section vertical-section position-relative">
          <div className="wrapper">
            {PROJECTS.map((project, index) => (
              <article
                key={project.slug}
                className="item s3-project-item"
              >
                <div className="s3-project-card">
                  {/* PROJECT IMAGE */}
                  <div className="s3-project-visual">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="s3-project-image-link"
                      aria-label={`View ${project.title} project`}
                    >
                      <img
                        src={project.desktopImage}
                        alt={project.imageAlt}
                        loading={index === 0 ? "eager" : "lazy"}
                        fetchPriority={index === 0 ? "high" : "auto"}
                        decoding="async"
                      />

                      <span className="s3-image-overlay">
                        <span>View Project</span>
                        {ARROW_DIAGONAL_SVG}
                      </span>
                    </Link>

                    <span className="s3-image-index">
                      PROJECT {project.number}
                    </span>
                  </div>

                  {/* PROJECT DETAILS */}
                  <div className="s3-project-content">
                    <div className="s3-project-meta">
                      <span className="s3-project-category">
                        {project.number} / {project.category}
                      </span>

                      <span
                        className={`s3-project-status ${
                          project.status === "Completed"
                            ? "is-completed"
                            : "is-progress"
                        }`}
                      >
                        <span className="s3-status-dot" />
                        {project.status}
                      </span>
                    </div>

                    <h3 className="s3-project-title">
                      <Link to={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>

                    <p className="s3-project-description">
                      <RevealText>{project.description}</RevealText>
                    </p>

                    {/* FEATURES AND TECHNOLOGIES */}
                    <div className="s3-project-details">
                      <div className="s3-detail-group">
                        <h4>Key Features</h4>

                        <ul>
                          {project.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="s3-detail-group">
                        <h4>Technologies</h4>

                        <ul>
                          {project.technologies.map((tech) => (
                            <li key={tech}>{tech}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* PROJECT ACTION */}
                    <div className="s3-project-action">
                      <Link
                        to={`/projects/${project.slug}`}
                        className="project-explore-btn"
                      >
                        <span>Explore Project</span>
                        {ARROW_DIAGONAL_SVG}
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
