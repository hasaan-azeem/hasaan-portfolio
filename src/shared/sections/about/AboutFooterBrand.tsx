import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Reveal, prefersReducedMotion } from "./motion";
import { SOCIALS } from "./socials";

export default function AboutFooterBrand() {
  const nameRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const root = nameRef.current;
    if (!root || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 85%",
          once: true,
        },
      });

      timeline
        .from(".about-brand__word", {
          yPercent: 110,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.15,
        })
        .from(
          ".about-brand__photo",
          {
            y: 90,
            opacity: 0,
            scale: 0.95,
            duration: 1.3,
            ease: "power3.out",
          },
          0.25
        );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-brand">
      <div className="about-container">
        <Reveal className="about-brand__follow">
          <strong>Follow Hasaan</strong>
          <span>Build with AI. Learn by doing. Turn ideas into products.</span>

          <div className="about-socials about-socials--dark">
            {SOCIALS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                title={item.label}
              >
                {item.short}
              </a>
            ))}
          </div>
        </Reveal>

        <div ref={nameRef} className="about-brand__name">
          <span className="about-brand__mask">
            <span className="about-brand__word about-brand__word--left">
              I'm
            </span>
          </span>

          <img
            className="about-brand__photo"
            src="/assets/imgs/pages/webp-images/hero.webp"
            alt="Hasaan Azeem"
            width={600}
            height={800}
            loading="lazy"
          />

          <span className="about-brand__mask">
            <span className="about-brand__word about-brand__word--right">
              Hasaan<sup>®</sup>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}