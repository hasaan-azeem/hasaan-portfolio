import { Counter, Reveal } from "./motion";

/* Edit these numbers so they always match your real work */
const figures = [
  {
    value: 6,
    label: "Core tech stacks",
    description:
      "MERN, Next.js, TypeScript, Python, ASP.NET Core, and Flutter.",
  },
  {
    value: 2,
    label: "Professional internships",
    description: "Business Incubation Center and Smartly SafeX Solutions.",
  },
  {
    value: 1,
    label: "Flagship AI platform",
    description:
      "WebXGuard, an AI-powered web vulnerability scanner built as my final year project.",
  },
];

export default function AboutFigures() {
  return (
    <section className="about-section about-figures">
      <div className="about-container">
        <div className="about-section__heading">
          <span className="about-eyebrow">IN NUMBERS</span>
        </div>

        <div className="about-figures__grid">
          <Reveal as="h2" className="about-heading about-figures__title">
            Figures that tell a <span>story</span>
          </Reveal>

          <div className="about-figures__list">
            {figures.map((item, index) => (
              <Reveal
                className="about-figure"
                delay={index * 120}
                key={item.label}
              >
                <div className="about-figure__number">
                  <Counter to={item.value} />
                  <span className="about-figure__label">{item.label}</span>
                </div>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}