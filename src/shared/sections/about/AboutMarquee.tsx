import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "./motion";

const items = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "Python",
  "FastAPI",
  "ASP.NET Core",
  "LangChain",
  "Groq",
  "n8n",
  "Vapi",
  "PostgreSQL",
  "Flutter",
];

export default function AboutMarquee() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  /* The list is rendered twice so the loop never shows a gap */
  const loop = [...items, ...items];

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      tweenRef.current = gsap.to(track, {
        xPercent: -50,
        duration: 35,
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="about-marquee"
      aria-label="Technologies I work with"
      onMouseEnter={() => tweenRef.current?.pause()}
      onMouseLeave={() => tweenRef.current?.play()}
    >
      <div className="about-marquee__track" ref={trackRef}>
        {loop.map((item, index) => (
          <span className="about-marquee__item" key={`${item}-${index}`}>
            {item}
            <i aria-hidden="true" />
          </span>
        ))}
      </div>
    </section>
  );
}