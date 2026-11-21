import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Breadcrumbs from "@/shared/elements/Breadcrumbs";
import "@/shared/elements/Breadcrumbs.css";
import SocialLinks from "@/shared/elements/SocialLinks";
import { prefersReducedMotion } from "./motion";

export default function AboutHero() {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power4.out" } });

      timeline
        .from(".about-hero__crumbs", { opacity: 0, y: -12, duration: 0.7 })
        .from(
          ".about-line__inner",
          { yPercent: 115, duration: 1.3, stagger: 0.12 },
          0.1
        )
        .from(
          ".about-hero__socials li",
          {
            opacity: 0,
            y: 24,
            duration: 0.8,
            stagger: 0.08,
            clearProps: "opacity,transform",
          },
          0.5
        )
        .from(
          ".about-hero__card",
          { opacity: 0, y: 70, scale: 0.97, duration: 1.3 },
          0.4
        )
        .from(
          ".about-hero__photo",
          { opacity: 0, xPercent: 14, duration: 1.4 },
          0.8
        )
        .from(
          ".about-hero__card-text > *",
          { opacity: 0, y: 26, duration: 0.9, stagger: 0.12 },
          0.9
        );

      /* Subtle parallax on the photo while scrolling past the card */
      gsap.to(".about-hero__photo", {
        yPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-hero__card",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-hero" ref={rootRef}>
      <div className="about-container">
        <div className="about-hero__crumbs">
          <Breadcrumbs current="About" />
        </div>

        <div className="about-hero__head">
          <h1 className="about-hero__title">
            <span className="about-line">
              <span className="about-line__inner">
                About Hasaan<sup>®</sup>
              </span>
            </span>
          </h1>

          <SocialLinks variant="labeled" className="about-hero__socials" />
        </div>

        <div className="about-hero__card">
          <div className="about-hero__card-text">
            <span className="about-hero__tagline">
              Full Stack Developer · AI Builder · Gujranwala, Pakistan
            </span>
            <h2>
              Building web products, AI-powered features and scalable
              software, and growing toward my own agency.
            </h2>
          </div>

          <img
            className="about-hero__photo"
            src="/assets/imgs/pages/webp-images/hero.webp"
            alt="Hasaan Azeem"
            width={600}
            height={800}
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}