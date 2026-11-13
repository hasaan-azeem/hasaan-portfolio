
import { Link, Navigate, useParams } from "react-router-dom";
import PageMeta from "@/seo/PageMeta";
import RevealText from "@/shared/effects/RevealText";
import Breadcrumbs from "@/shared/elements/Breadcrumbs";
import "@/shared/elements/Breadcrumbs.css";
import { PROJECTS } from "@/shared/sections/projects/projectsData";
import "../shared/sections/index-5//ProjectResponsive.css";

export default function ProjectDetailPage() {
  const { slug } = useParams();

  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const currentIndex = PROJECTS.findIndex(
    (item) => item.slug === project.slug
  );

  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <>
      <PageMeta
        title={`${project.title} | Project by Hasaan Azeem`}
        description={project.description}
      />

      <div className="pt-85" />

      <div className="container pt-40 text-start">
        <Breadcrumbs current={project.title} />
      </div>

      <section className="s3-project-detail">
        <div className="container">
          {/* PROJECT INTRO */}
          <div className="s3-detail-intro">
            <div className="s3-detail-topline">
              <span>PROJECT / {project.number}</span>
              <span>{project.category}</span>
            </div>

            <div className="row align-items-end">
              <div className="col-lg-8">
                <h1>
                  <RevealText>{project.title}</RevealText>
                </h1>
              </div>

              <div className="col-lg-4">
                <p className="s3-detail-intro-text">
                  {project.description}
                </p>
              </div>
            </div>
          </div>

          {/* PROJECT VISUAL */}
          <div className="s3-detail-hero-image">
            <img
              src={project.desktopImage}
              alt={project.imageAlt}
              width={1200}
              height={900}
            />
          </div>

          {/* PROJECT OVERVIEW */}
          <div className="s3-detail-overview">
            <div className="s3-detail-section-label">
              <span>01 / OVERVIEW</span>
            </div>

            <div className="s3-detail-overview-content">
              <h2>
                Building practical solutions through thoughtful engineering.
              </h2>

              <p>{project.description}</p>
            </div>
          </div>

          {/* CHALLENGE AND SOLUTION */}
          <div className="row g-4 s3-detail-challenge">
            <div className="col-md-6">
              <div className="s3-detail-info-block">
                <span>02 / THE CHALLENGE</span>
                <h3>The problem to solve.</h3>
                <p>{project.problem}</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="s3-detail-info-block">
                <span>03 / THE SOLUTION</span>
                <h3>Turning ideas into solutions.</h3>
                <p>{project.solution}</p>
              </div>
            </div>
          </div>

          {/* FEATURES */}
          <div className="s3-detail-features">
            <div className="s3-detail-section-label">
              <span>04 / KEY CAPABILITIES</span>
            </div>

            <div className="s3-detail-features-content">
              <h2>What makes it work.</h2>

              <div className="s3-detail-feature-list">
                {project.features.map((feature, index) => (
                  <div className="s3-detail-feature" key={feature}>
                    <span>0{index + 1}</span>
                    <p>{feature}</p>
                    <span aria-hidden="true">↗</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TECHNOLOGIES */}
          <div className="s3-detail-tech">
            <div className="s3-detail-section-label">
              <span>05 / TECHNOLOGY STACK</span>
            </div>

            <div className="s3-detail-tech-content">
              <h2>Tools behind the project.</h2>

              <div className="s3-detail-tech-list">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {/* NEXT PROJECT */}
          <div className="s3-detail-next">
            <span>WANT TO SEE MORE?</span>

            <Link to={`/projects/${nextProject.slug}`}>
              <span>Next Project</span>
              <h2>{nextProject.title}</h2>
              <span className="s3-detail-next-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>

            <Link to="/#projects" className="s3-detail-back">
              ← Back to selected work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
