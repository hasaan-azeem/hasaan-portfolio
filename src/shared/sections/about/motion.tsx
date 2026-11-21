import {
  useLayoutEffect,
  useRef,
  type ElementType,
  type ReactNode,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "none";
  as?: ElementType;
  className?: string;
};

/* Fades and slides an element in when it scrolls into view (GSAP + ScrollTrigger) */
export function Reveal({
  children,
  delay = 0,
  direction = "up",
  as = "div",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const Component = as as ElementType;

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(element, {
        opacity: 0,
        y: direction === "up" ? 45 : 0,
        x: direction === "left" ? -45 : 0,
        duration: 1,
        delay: delay / 1000,
        ease: "power3.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: element,
          start: "top 88%",
          once: true,
        },
      });
    }, element);

    return () => ctx.revert();
  }, [delay, direction]);

  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
}

type CounterProps = {
  to: number;
  suffix?: string;
  duration?: number;
};

/* Counts up from 0 when scrolled into view (GSAP tween) */
export function Counter({ to, suffix = "", duration = 1.8 }: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (prefersReducedMotion()) {
      element.textContent = `${to}${suffix}`;
      return;
    }

    const counter = { value: 0 };

    const ctx = gsap.context(() => {
      gsap.to(counter, {
        value: to,
        duration,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          once: true,
        },
        onUpdate: () => {
          element.textContent = `${Math.round(counter.value)}${suffix}`;
        },
      });
    });

    return () => ctx.revert();
  }, [to, suffix, duration]);

  return <span ref={ref}>{`0${suffix}`}</span>;
}