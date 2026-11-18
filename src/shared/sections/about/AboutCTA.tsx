import { Link } from "react-router-dom";

export default function AboutCTA() {
  return (
    <section className="about-cta">
      <div className="about-container">
        <div className="about-cta__top">
          <span className="about-eyebrow">05 / WHAT'S NEXT?</span>
          <span className="about-cta__availability">
            OPEN TO OPPORTUNITIES
          </span>
        </div>

        <h2>
          Have an idea?
          <br />
          Let's make it <span>happen.</span>
        </h2>

        <div className="about-cta__bottom">
          <p>
            Whether you have a project in mind, an interesting opportunity, or
            simply want to connect, I'd be glad to hear from you.
          </p>

          <Link to="/contact" className="about-cta__button">
            GET IN TOUCH
            <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}