import { Link, useLocation } from "react-router-dom";
import { canonicalPath } from "@/seo/site";
import "./Breadcrumbs.css";

const ALL = [

  {
    to: "/contact",
    title: "Let's Work Together",
    text: "Have a project, collaboration idea, or question? Get in touch or book a call to discuss how we can work together.",
  },
];

// Keep exploring cards, excluding the current page.
export default function RelatedLinks() {
  const here = canonicalPath(useLocation().pathname);

  return (
    <section className="tbc-related" aria-labelledby="related-title">
      <div className="container">
        <h2 id="related-title">Keep exploring</h2>

        <div className="tbc-related__grid">
          {ALL.filter((link) => link.to !== here).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="tbc-related__card"
            >
              <strong>{link.title}</strong>
              <span>{link.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}