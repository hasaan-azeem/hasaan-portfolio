import { Link } from "react-router-dom";
import { Reveal } from "./motion";

const milestones = [
  {
    period: "2022 to 2026",
    title: "BS Information Technology",
    organization: "University of Gujrat",
    description:
      "Built a foundation in software development, databases, networking, and information technology.",
  },
  {
    period: "Apr 2025 to Mar 2026",
    title: "Full Stack Engineer",
    organization: "Business Incubation Center",
    description:
      "Worked on full stack development and practical software solutions.",
  },
  {
    period: "Jul 2026 to Sep 2026",
    title: "Software Development Intern",
    organization: "Smartly SafeX Solutions",
    description:
      "Gained hands-on experience in a professional software environment.",
  },
  {
    period: "Present",
    title: "Building, learning, and exploring AI",
    organization: "Independent projects",
    description:
      "Developing digital products, exploring AI-powered workflows, and sharpening my engineering skills.",
  },
];

export default function AboutJourney() {
  return (
    <section className="about-section about-journey">
      <div className="about-container">
        <div className="about-section__heading">
          <span className="about-eyebrow">CAREER</span>
        </div>

        <div className="about-journey__intro">
          <Reveal as="h2" className="about-heading">
            My <span>journey</span>
          </Reveal>

          <Reveal delay={150}>
            <Link to="/contact" className="about-btn about-btn--dark">
              Get in touch
            </Link>
          </Reveal>
        </div>

        <div className="about-timeline">
          {milestones.map((item, index) => (
            <Reveal
              as="article"
              className="about-timeline__item"
              delay={index * 90}
              key={item.title}
            >
              <span className="about-timeline__period">{item.period}</span>

              <div className="about-timeline__content">
                <h3>
                  {item.title}, {item.organization}
                </h3>
                <p>{item.description}</p>
              </div>

              <span className="about-timeline__arrow" aria-hidden="true">
                ↗
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}