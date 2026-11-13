import { lazy, Suspense, useEffect, useRef, useState } from "react";
import SocialLinks from "@/shared/elements/SocialLinks";
import "./CinematicHero.css";

const HeroThreeScene = lazy(() => import("./HeroThreeScene"));
const BASE_SRC = "/assets/imgs/pages/webp-images/hero.webp";

const BOOKING_URL = "https://calendar.app.google/AUAQE4J2iuNRHGSy6";

const ARROW_SVG = (
  <svg
    width="11"
    height="11"
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
      fill="currentColor"
    />
  </svg>
);

const STATS = [
  { n: "1", label: "Years building software" },
  { n: "4", label: "Software projects built" },
  { n: "10", label: "Technologies applied" },
];

// const CURSOR_TRAIL_IMAGES = [
//   "/assets/imgs/pages/cursor-trail/cursor%20trail%201.webp",
//   "/assets/imgs/pages/cursor-trail/cursor%20trail%202.webp",
//   "/assets/imgs/pages/cursor-trail/cursor%20trail%203.webp",
//   "/assets/imgs/pages/cursor-trail/cursor%20trail%204.webp",
//   "/assets/imgs/pages/cursor-trail/cursor%20trail%205.webp",
//   "/assets/imgs/pages/cursor-trail/cursor%20trail%206.webp",
//   "/assets/imgs/pages/cursor-trail/cursor%20trail%207.webp",
//   "/assets/imgs/pages/cursor-trail/cursor%20trail%208.webp",
// ];

/* =========================================================
   MAIN HERO
========================================================= */

export default function CinematicHero() {
  // const stageRef = useRef<HTMLDivElement>(null);
  // const trailRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const [reducedMotion, setReducedMotion] = useState(false);
  const [showThree, setShowThree] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMotionPreference = () => {
      setReducedMotion(media.matches);
    };

    updateMotionPreference();

    media.addEventListener("change", updateMotionPreference);

    if (!media.matches) {
      const idleWindow = window.setTimeout(() => setShowThree(true), 1200);

      return () => {
        media.removeEventListener("change", updateMotionPreference);
        window.clearTimeout(idleWindow);
      };
    }

    return () => {
      media.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  /* =========================================================
     ORIGINAL CURSOR IMAGE TRAIL
  ========================================================= */

  // useEffect(() => {
  //   const stage = stageRef.current;
  //   const layer = trailRef.current;

  //   if (!stage || !layer || reducedMotion) return;

  //   const MAX_TRAIL_LENGTH = 24;
  //   const MOUSE_THRESHOLD = 65;

  //   let lastX = 0;
  //   let lastY = 0;
  //   let hasLastPosition = false;
  //   let disposed = false;

  //   const trail: HTMLImageElement[] = [];

  //   const createTrailImage = (x: number, y: number) => {
  //     const img = document.createElement("img");

  //     const randomIndex = Math.floor(
  //       Math.random() * CURSOR_TRAIL_IMAGES.length,
  //     );

  //     const rotation = (Math.random() - 0.5) * 35;

  //     img.className = "ch__trail-img";
  //     img.src = CURSOR_TRAIL_IMAGES[randomIndex];
  //     img.alt = "";
  //     img.draggable = false;
  //     img.decoding = "async";

  //     img.style.left = `${x}px`;
  //     img.style.top = `${y}px`;

  //     img.style.setProperty("--trail-rotation", `${rotation}deg`);

  //     img.addEventListener(
  //       "animationend",
  //       () => {
  //         img.remove();

  //         const index = trail.indexOf(img);

  //         if (index !== -1) {
  //           trail.splice(index, 1);
  //         }
  //       },
  //       { once: true },
  //     );

  //     layer.appendChild(img);
  //     trail.push(img);

  //     if (trail.length > MAX_TRAIL_LENGTH) {
  //       const oldest = trail.shift();
  //       oldest?.remove();
  //     }
  //   };

  //   const onPointerMove = (event: PointerEvent) => {
  //     if (disposed || event.pointerType !== "mouse") return;

  //     const rect = stage.getBoundingClientRect();

  //     const x = event.clientX - rect.left;
  //     const y = event.clientY - rect.top;

  //     if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
  //       hasLastPosition = false;
  //       return;
  //     }

  //     if (hasLastPosition) {
  //       const distance = Math.hypot(x - lastX, y - lastY);

  //       if (distance < MOUSE_THRESHOLD) return;
  //     }

  //     lastX = x;
  //     lastY = y;
  //     hasLastPosition = true;

  //     createTrailImage(x, y);
  //   };

  //   const onPointerLeave = () => {
  //     hasLastPosition = false;
  //   };

  //   stage.addEventListener("pointermove", onPointerMove, {
  //     passive: true,
  //   });

  //   stage.addEventListener("pointerleave", onPointerLeave);

  //   return () => {
  //     disposed = true;

  //     stage.removeEventListener("pointermove", onPointerMove);
  //     stage.removeEventListener("pointerleave", onPointerLeave);

  //     trail.forEach((img) => img.remove());
  //     trail.length = 0;

  //     layer.replaceChildren();
  //   };
  // }, [reducedMotion]);

  return (
    <section ref={sectionRef} className="ch" aria-label="Introduction">
      {/* Background atmosphere */}
      <div className="ch__ambient" aria-hidden="true">
        <span className="ch__glow ch__glow--1" />
        <span className="ch__glow ch__glow--2" />
        <span className="ch__grid" />
      </div>

      {/* Three.js background */}
      {showThree && !reducedMotion ? (
        <Suspense fallback={null}>
          <HeroThreeScene
            reducedMotion={reducedMotion}
            sectionRef={sectionRef}
          />
        </Suspense>
      ) : null}

      {/* Decorative background details
      <span className="ch__ring ch__ring--1" aria-hidden="true" />
      <span className="ch__ring ch__ring--2" aria-hidden="true" />
      <span className="ch__ring ch__ring--3" aria-hidden="true" /> */}

      <div className="ch__inner">
        {/* Hero heading */}
        <div className="ch__head">
          <p className="ch__eyebrow">
            Full Stack Developer · AI Integrator · Problem Solver
          </p>

          <h1 className="ch__title">
            Hasaan <span>Builds Digital</span>
          </h1>
        </div>

        {/* Portrait stage */}
        <div className="ch__stage">
          <div className="ch__figure">
            <img
              className="ch__base mt-50"
              src={BASE_SRC}
              alt="Hasaan, the Full Stack Developer and creator behind Hasaan Builds Digital"
              width={550}
              height={850}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>

        {/* Description and CTA */}
        <div className="ch__body">
          <p className="ch__lead">
            I'm Hasaan, a Full Stack Developer building useful web applications,
            business-focused digital products, and AI-powered workflows, while
            sharing what I learn and build.
          </p>

          <div className="ch__cta">
            <a
              className="at-btn"
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <span className="text-1">Book an appointment</span>
                <span className="text-2">Book an appointment</span>
              </span>

              <i>
                {ARROW_SVG}
                {ARROW_SVG}
              </i>
            </a>

            <SocialLinks light />
          </div>
        </div>

        {/* Statistics */}
        <ul className="ch__stats" aria-label="Highlights">
          {STATS.map((s) => (
            <li className="ch__stat" key={s.label}>
              <span className="ch__dot" aria-hidden="true" />

              <span className="ch__num">
                {s.n}
                <sup>+</sup>
              </span>

              <span className="ch__label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
