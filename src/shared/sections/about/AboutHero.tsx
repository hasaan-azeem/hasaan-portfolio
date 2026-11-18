import { Link } from "react-router-dom";

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-container">
        <div className="about-hero__top">
          <span className="about-eyebrow">
            <span className="about-eyebrow__dot" />
            A LITTLE ABOUT ME
          </span>

          <span className="about-hero__location">
            Based in Pakistan · Working Worldwide
          </span>
        </div>

        <div className="about-hero__content">
          <h1 className="about-hero__title">
            Building ideas
            <br />
            into <span>digital reality.</span>
          </h1>

          <div className="about-hero__bottom">
            <p className="about-hero__description">
              I'm Hasaan Azeem, a Full Stack Developer passionate about
              technology, thoughtful digital experiences, and building
              solutions that make a difference.
            </p>

            <Link to="/contact" className="about-round-link">
              <span>LET'S TALK</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 19L19 5M7 5H19V17"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="about-hero__footer">
          <span>DEVELOPER</span>
          <span>CREATOR</span>
          <span>PROBLEM SOLVER</span>
          <span>01 / 06</span>
        </div>
      </div>
    </section>
  );
}