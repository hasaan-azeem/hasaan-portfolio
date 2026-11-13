// import { Link } from "react-router-dom";
import "@/shared/sections/index-5/AboutFaq.css";

// eslint-disable-next-line react-refresh/only-export-components
export const CONTACT_FAQS: { q: string; a: string }[] = [
  {
    q: "How fast will I get a reply?",
    a: "Messages sent through the contact details on this page get a reply within 1 to 2 business days. Hasaan Azeem is based in Lahore, Pakistan (Pakistan Standard Time, UTC+5).",
  },
  {
    q: "Are you open to remote opportunities?",
    a: "Yes. I'm open to remote software development opportunities and collaborations with businesses and teams across different time zones.",
  },
  {
    q: "What can I contact Hasaan Azeem about?",
    a: "You can reach out about full-stack web development, business websites, eCommerce platforms, custom web applications, AI integrations, workflow automation, freelance projects, and professional opportunities. I'm also open to discussing technical collaborations and interesting ideas.",
  },
  {
    q: "Are you open to remote opportunities?",
    a: "Yes. I'm open to remote software development opportunities and collaborations with businesses and teams across different time zones.",
  },
  {
    q: "How do I book a call?",
    a: "Use the Book an appointment button on this page to pick a time in Hasaan Azeem's calendar. If no slot suits you, send an email and propose a time.",
  },
  {
    q: "Where can I follow Hasaan Azeem instead?",
    a: "New videos and tutorials are on YouTube at @hasaan_azeem, with shorter updates on X at @hasaan_azeem and Instagram at @autophile03, plus career content on LinkedIn.",
  },
];

export default function ContactDetails() {
  return (
    <section
      className="about-faq"
      aria-labelledby="contact-faq-title"
      style={{ paddingTop: 0 }}
    >
      <div className="container">
        <h2
          className="about-faq__title"
          id="contact-faq-title"
          style={{ fontSize: "clamp(28px,4.5vw,52px)" }}
        >
          Before you reach out
        </h2>
        <p className="about-faq__intro">
          Exploring my work, looking for a developer, or planning your next
          project? Feel free to get in touch, explore my resources, or book a
          call to discuss how we can work together.
        </p>
        <div className="about-faq__list">
          {CONTACT_FAQS.map((f) => (
            <details className="about-faq__item" key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
