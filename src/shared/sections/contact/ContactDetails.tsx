import { useRef, useState, type MouseEvent } from "react";
import gsap from "gsap";
import "./contact.css";

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
    q: "How do I book a call?",
    a: "Use the Book an appointment calendar on this page to pick a time in Hasaan Azeem's calendar. If no slot suits you, send an email and propose a time.",
  },
  {
    q: "Where can I follow Hasaan Azeem instead?",
    a: "New videos and tutorials are on YouTube at @hasaan_azeem, with shorter updates on X at @hasaan_azeem and Instagram at @autophile03, plus career content on LinkedIn.",
  },
];

/* One FAQ row. Keeps native <details> (good for SEO and accessibility)
   and animates the answer height with GSAP. */
function FaqItem({ q, a }: { q: string; a: string }) {
  const detailsRef = useRef<HTMLDetailsElement | null>(null);
  const answerRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    /* Stop the browser from toggling instantly, we do it ourselves */
    event.preventDefault();

    const details = detailsRef.current;
    const answer = answerRef.current;
    if (!details || !answer) return;

    tweenRef.current?.kill();

    const opening = !details.open;

    /* Flip the icon straight away so it stays in sync with the animation */
    setIsOpen(opening);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      details.open = opening;
      return;
    }

    if (opening) {
      details.open = true;
      tweenRef.current = gsap.fromTo(
        answer,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          onComplete: () => {
            gsap.set(answer, { clearProps: "height,opacity" });
          },
        }
      );
    } else {
      tweenRef.current = gsap.to(answer, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power3.inOut",
        onComplete: () => {
          details.open = false;
          gsap.set(answer, { clearProps: "height,opacity" });
        },
      });
    }
  };

  return (
    <details
      className={`ct-faq-item${isOpen ? " is-open" : ""}`}
      ref={detailsRef}
    >
      <summary className="ct-faq-item__q" onClick={handleClick}>
        <span>{q}</span>
        <span className="ct-faq-item__icon" aria-hidden="true" />
      </summary>

      <div className="ct-faq-item__a" ref={answerRef}>
        <p>{a}</p>
      </div>
    </details>
  );
}

export default function ContactDetails() {
  return (
    <section className="ct-faq" aria-labelledby="contact-faq-title">
      <div className="container">
        <div className="ct-faq__grid">
          <div className="ct-faq__head">
            <h2 className="ct-faq__title" id="contact-faq-title">
              Before you reach out
            </h2>
            <p className="ct-faq__intro">
              Exploring my work, looking for a developer, or planning your next
              project? Feel free to get in touch, explore my resources, or book
              a call to discuss how we can work together.
            </p>
          </div>

          <div className="ct-faq__list">
            {CONTACT_FAQS.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}