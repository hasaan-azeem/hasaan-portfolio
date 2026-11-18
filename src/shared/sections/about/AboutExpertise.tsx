const expertise = [
  {
    number: "01",
    title: "Full Stack Development",
    description:
      "Building responsive interfaces, robust APIs, databases, and complete web applications.",
    tags: ["React", "Next.js", "Node.js", "TypeScript"],
  },
  {
    number: "02",
    title: "AI Integration",
    description:
      "Connecting AI models and intelligent features with practical applications and digital products.",
    tags: ["LLMs", "OpenAI", "Claude", "LangChain"],
  },
  {
    number: "03",
    title: "Automation",
    description:
      "Designing workflows that reduce repetitive work and connect tools, services, and business processes.",
    tags: ["n8n", "Make", "APIs", "Webhooks"],
  },
  {
    number: "04",
    title: "Digital Experiences",
    description:
      "Creating thoughtful interfaces with attention to usability, performance, accessibility, and detail.",
    tags: ["UI/UX", "Tailwind CSS", "GSAP", "SEO"],
  },
];

export default function AboutExpertise() {
  return (
    <section className="about-section about-expertise">
      <div className="about-container">
        <div className="about-section__heading">
          <span className="about-eyebrow">02 / WHAT I BRING</span>
          <span className="about-section__side-label">EXPERTISE</span>
        </div>

        <div className="about-expertise__intro">
          <h2 className="about-heading">
            Different skills.
            <br />
            One <span>mindset.</span>
          </h2>

          <p>
            I bring development, creativity, and problem-solving together to
            build technology that works in the real world.
          </p>
        </div>

        <div className="about-expertise__list">
          {expertise.map((item) => (
            <article className="about-expertise__item" key={item.number}>
              <span className="about-expertise__number">{item.number}</span>

              <div className="about-expertise__main">
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className="about-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <span className="about-expertise__arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}