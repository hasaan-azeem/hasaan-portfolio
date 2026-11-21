import { Link } from "react-router-dom";
import { Reveal } from "./motion";
import SocialLinks from "@/shared/elements/SocialLinks";
import { CONTACT_EMAIL } from "./socials";

export default function AboutCTA() {
  return (
    <section className="about-cta-wrap">
      <div className="about-container">
        <Reveal className="about-cta">
          <div className="about-cta__glow" aria-hidden="true" />

          <span className="about-eyebrow about-eyebrow--light">
            <span className="about-eyebrow__dot" />
            OPEN TO OPPORTUNITIES
          </span>

          <h2>
            Have an idea?
            <br />
            Let's make it happen.
          </h2>

          <p>
            Whether you have a project in mind, an interesting opportunity, or
            simply want to connect, I'd be glad to hear from you.
          </p>

          <div className="about-cta__row">
            <Link to="/contact" className="about-btn about-btn--light">
              Contact me
            </Link>

            <a className="about-cta__email" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </div>

          <SocialLinks light className="about-cta__socials" />
        </Reveal>
      </div>
    </section>
  );
}