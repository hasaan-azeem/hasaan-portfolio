const milestones = [
  {
    period: "2022 — 2026",
    category: "EDUCATION",
    title: "Bachelor of Science in Information Technology",
    organization: "University of Gujrat",
    description:
      "Built a foundation in software development, databases, networking, and information technology.",
  },
  {
    period: "APR 2025 — MAR 2026",
    category: "PROFESSIONAL EXPERIENCE",
    title: "Full Stack Engineer",
    organization: "Business Incubation Center",
    description:
      "Worked on full stack development and practical software solutions.",
  },
  {
    period: "JUL 2026 — SEP 2026",
    category: "PROFESSIONAL EXPERIENCE",
    title: "Software Development",
    organization: "SafeX Solutions",
    description:
      "Gained further practical experience working in a professional software environment.",
  },
  {
    period: "PRESENT",
    category: "CONTINUOUS GROWTH",
    title: "Building, Learning & Exploring AI",
    organization: "Independent Projects",
    description:
      "Developing digital products, exploring AI-powered workflows, and improving my engineering skills.",
  },
];

export default function AboutJourney() {
  return (
    <section className="about-section about-journey">
      <div className="about-container">
        <div className="about-section__heading">
          <span className="about-eyebrow">03 / THE ROAD SO FAR</span>
          <span className="about-section__side-label">MY JOURNEY</span>
        </div>

        <div className="about-journey__intro">
          <h2 className="about-heading">
            Every step
            <br />
            shapes the <span>next.</span>
          </h2>

          <p>
            A journey of learning, building, collaborating, and discovering
            better ways to create.
          </p>
        </div>

        <div className="about-timeline">
          {milestones.map((item, index) => (
            <article className="about-timeline__item" key={item.period}>
              <div className="about-timeline__marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="about-timeline__period">{item.period}</div>

              <div className="about-timeline__content">
                <span className="about-timeline__category">
                  {item.category}
                </span>

                <h3>{item.title}</h3>
                <h4>{item.organization}</h4>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}