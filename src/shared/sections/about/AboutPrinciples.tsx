const principles = [
  {
    number: "01",
    title: "Stay curious",
    description:
      "Technology never stands still. I keep exploring new tools, ideas, and approaches to become a better developer.",
  },
  {
    number: "02",
    title: "Think before building",
    description:
      "Understanding the problem matters as much as writing the solution. I value clarity, planning, and purposeful decisions.",
  },
  {
    number: "03",
    title: "Build with purpose",
    description:
      "Every feature should have a reason to exist. I focus on creating useful, maintainable, and meaningful experiences.",
  },
];

export default function AboutPrinciples() {
  return (
    <section className="about-section about-principles">
      <div className="about-container">
        <div className="about-section__heading">
          <span className="about-eyebrow">04 / HOW I THINK</span>
          <span className="about-section__side-label">MY APPROACH</span>
        </div>

        <div className="about-principles__intro">
          <h2 className="about-heading">
            The mindset
            <br />
            behind the <span>work.</span>
          </h2>
        </div>

        <div className="about-principles__grid">
          {principles.map((item) => (
            <article className="about-principle" key={item.number}>
              <span className="about-principle__number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className="about-principles__statement">
          <span>MY BELIEF</span>
          <p>
            "The best work happens when curiosity meets consistency, and ideas
            are backed by execution."
          </p>
        </div>
      </div>
    </section>
  );
}