import { Reveal } from "./motion";

const expertise = [
  {
    number: "01",
    title: "Full stack development",
    description:
      "Responsive interfaces, robust APIs, databases, and complete web applications, from the first idea to deployment.",
    tags: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB"],
  },
  {
    number: "02",
    title: "AI engineering",
    description:
      "AI-powered features, agents, and intelligent products, including LLM integrations built with Groq and LangChain.",
    tags: ["LLMs", "Groq", "LangChain", "FastAPI"],
  },
  {
    number: "03",
    title: "Automation and deployment",
    description:
      "Workflows that remove repetitive work and connect tools, plus reliable deployment on Vercel or a self-managed VPS.",
    tags: ["n8n", "Vapi", "APIs", "Webhooks", "VPS"],
  },
];

export default function AboutExpertise() {
  return (
    <section className="about-section about-expertise">
      <div className="about-container">
        <div className="about-section__heading">
          <span className="about-eyebrow">WHAT I DO</span>
        </div>

        <div className="about-expertise__intro">
          <Reveal as="h2" className="about-heading">
            Where web engineering, AI, and <span>automation</span> meet
          </Reveal>
        </div>

        <div className="about-expertise__grid">
          {expertise.map((item, index) => (
            <Reveal
              as="article"
              className="about-card"
              delay={index * 120}
              key={item.number}
            >
              <span className="about-card__number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <div className="about-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}