
import { useEffect, useRef } from "react";
import type React from "react";

import RevealText from "@/shared/effects/RevealText";

import {
    SiReact,
    SiNextdotjs,
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
    SiHtml5,
    SiCss,
    SiGsap,
    SiNodedotjs,
    SiExpress,
    SiPython,
    SiFastapi,
    SiFlask,
    SiDotnet,
    SiSharp,
    SiMongodb,
    SiPostgresql,
    SiMysql,
    SiFirebase,
    SiOpenid,
    SiAnthropic,
    SiGo,
    SiLangchain,
    SiGit,
    SiGithub,
    SiVercel,
    SiNetlify,
    SiRender,
    SiWordpress,
    SiWoocommerce,
    SiElementor,
} from "react-icons/si";

import { DiMsqlServer } from "react-icons/di";

import {
    TbPhoneCall,
    TbPlugConnected,
} from "react-icons/tb";

import "./Section4.css";

const SKILL_GROUPS = [
    {
        number: "01",
        title: "Frontend Development",
        description:
            "Creating responsive interfaces and polished web experiences.",
        skills: [
            { name: "React", icon: <SiReact />, color: "#61DAFB" },
            { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
            { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
            { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
            { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
            { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
            { name: "CSS3", icon: <SiCss />, color: "#1572B6" },
            { name: "GSAP", icon: <SiGsap />, color: "#88CE02" },
        ],
    },
    {
        number: "02",
        title: "Backend & APIs",
        description:
            "Building application logic, APIs, authentication and server-side systems.",
        skills: [
            { name: "Node.js", icon: <SiNodedotjs />, color: "#5FA04E" },
            { name: "Express.js", icon: <SiExpress />, color: "#000000" },
            { name: "Python", icon: <SiPython />, color: "#3776AB" },
            { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
            { name: "Flask", icon: <SiFlask />, color: "#000000" },
            { name: ".NET", icon: <SiDotnet />, color: "#512BD4" },
            { name: "C#", icon: <SiSharp />, color: "#68217A" },
            { name: "REST APIs", icon: <TbPlugConnected />, color: "#2563EB" },
        ],
    },
    {
        number: "03",
        title: "Databases",
        description:
            "Structuring, storing and managing application data reliably.",
        skills: [
            { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
            { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
            { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
            { name: "SQL Server", icon: <DiMsqlServer />, color: "#CC2927" },
            { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
        ],
    },
    {
        number: "04",
        title: "AI & Automation",
        description:
            "Connecting AI capabilities and automating practical business workflows.",
        skills: [
            { name: "OpenAI", icon: <SiOpenid />, color: "#000000" },
            { name: "Claude", icon: <SiAnthropic />, color: "#D97757" },
            { name: "Groq", icon: <SiGo />, color: "#F55036" },
            { name: "LangChain", icon: <SiLangchain />, color: "#1C3C3C" },
            { name: "Vapi", icon: <TbPhoneCall />, color: "#2563EB" },
        ],
    },
    {
        number: "05",
        title: "Cloud & Deployment",
        description:
            "Managing source control, cloud fundamentals and application deployment.",
        skills: [
            { name: "Git", icon: <SiGit />, color: "#F05032" },
            { name: "GitHub", icon: <SiGithub />, color: "#181717" },
            { name: "Vercel", icon: <SiVercel />, color: "#000000" },
            { name: "Netlify", icon: <SiNetlify />, color: "#00C7B7" },
            { name: "Render", icon: <SiRender />, color: "#46E3B7" },
        ],
    },
    {
        number: "06",
        title: "CMS & Ecommerce",
        description:
            "Developing business websites and online stores with flexible platforms.",
        skills: [
            { name: "WordPress", icon: <SiWordpress />, color: "#21759B" },
            { name: "WooCommerce", icon: <SiWoocommerce />, color: "#96588A" },
            { name: "Elementor", icon: <SiElementor />, color: "#92003B" },
        ],
    },
];

export default function Section4() {
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reduceMotion) {
            section.classList.add("is-visible");
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    section.classList.add("is-visible");
                    observer.disconnect();
                }
            },
            {
                threshold: 0.08,
                rootMargin: "0px 0px -40px 0px",
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="skills"
            className="skills-section"
            aria-labelledby="skills-title"
        >
            <div className="skills-section__container">

                {/* Header */}

                <div className="skills-section__header">

                    <div className="skills-section__eyebrow">
                        <span className="skills-section__eyebrow-dot" />
                        <span>MY TECH STACK</span>
                    </div>

                    <div className="skills-section__heading">

                        <h2 id="skills-title">
                            <RevealText>
                                The tools I use to bring ideas to life.
                            </RevealText>
                        </h2>

                        <p>
                            A practical toolkit for designing, developing,
                            integrating and shipping digital products.
                        </p>

                    </div>

                </div>

                {/* Skills Grid */}

                <div className="skills-section__grid">

                    {SKILL_GROUPS.map((group, index) => (

                        <article
                            className="skills-card"
                            key={group.number}
                            style={{
                                "--card-index": index,
                            } as React.CSSProperties}
                        >

                            <div className="skills-card__top">

                                <span className="skills-card__number">
                                    / {group.number}
                                </span>

                                <span className="skills-card__indicator">
                                    <span />
                                </span>

                            </div>

                            <div className="skills-card__heading">

                                <h3>{group.title}</h3>

                                <p>{group.description}</p>

                            </div>

                            <div className="skills-card__divider" />

                            <div className="skills-card__list">

                                {group.skills.map((skill) => (

                                    <div
                                        className="skills-item"
                                        key={skill.name}
                                        title={skill.name}
                                        style={{
                                            "--skill-color": skill.color,
                                        } as React.CSSProperties}
                                    >

                                        <span className="skills-item__icon">
                                            {skill.icon}
                                        </span>

                                        <span className="skills-item__name">
                                            {skill.name}
                                        </span>

                                    </div>

                                ))}

                            </div>

                            <span className="skills-card__glow" />

                        </article>

                    ))}

                </div>

                {/* Bottom Statement */}

                <div className="skills-section__bottom">

                    <span className="skills-section__bottom-line" />

                    <p>
                        The right technology for the problem,
                        not technology for its own sake.
                    </p>

                    <span className="skills-section__bottom-line" />

                </div>

            </div>
        </section>
    );
}
