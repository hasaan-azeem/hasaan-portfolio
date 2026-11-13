import type { ReactNode } from "react";
import SocialLinks from "@/shared/elements/SocialLinks";
import "./AboutFaq.css";

// Visible Q&A: `a` is the plain-text answer used for the FAQPage structured data (see Home5Page);
// `body` is what is rendered on the page (same wording, with links).
export const FAQS: { q: string; a: string; body: ReactNode }[] = [
    {
        q: "Who is Hasaan Azeem?",
        a: "I'm Hasaan Azeem, a Full Stack Developer and builder from Pakistan. I develop web applications, business websites, and practical software solutions while sharing what I build and learn along the way.",
        body: (
            <p>
                I&apos;m Hasaan Azeem, a Full Stack Developer and builder from Pakistan. I develop web applications, business websites, and practical software solutions while sharing what I build and learn along the way.
            </p>
        ),
    },
    {
        q: "What does Hasaan Azeem do?",
        a: "I work across software development, frontend and backend engineering, building web applications, ecommerce experiences, APIs, and business tools. I integrate AI services and automate workflows to solve practical problems for growing companies.",
        body: (
            <p>
                I work across software development, frontend and backend engineering, building web applications, ecommerce experiences, APIs, and business tools. I integrate AI services and automate workflows to solve practical problems for growing companies.
            </p>
        ),
    },
    {
        q: "What does Hasaan Azeem share?",
        a: "I share tutorials on React, Next.js, JavaScript, backend development, AI integrations, software projects, and tools that help developers build useful products and explore opportunities.",
        body: (
            <p>
                I share tutorials on React, Next.js, JavaScript, backend development, AI integrations, software projects, and tools that help developers build useful products and explore opportunities.
            </p>
        ),
    },
    {
        q: "Which projects has Hasaan Azeem worked on?",
        a: "My projects include ShopSwift, a MERN ecommerce application; Nordvia Exports, a B2B apparel website; WebXGuard, a web security platform; and NexoraERP, an ERP and POS system developed with .NET Core and SQL Server. My technical stack includes React, Next.js, Node.js, Express, Python, FastAPI, Flask, MongoDB, PostgreSQL, and SQL Server. I apply these technologies to practical software projects and business applications for users, teams, and growing businesses worldwide.",
        body: (
            <>
                <p>
                    My projects include ShopSwift, a MERN ecommerce application; Nordvia Exports, a B2B apparel website; WebXGuard, a web security platform; and NexoraERP, an ERP and POS system developed with .NET Core and SQL Server.
                </p>
                <p>
                    My technical stack includes React, Next.js, Node.js, Express, Python, FastAPI, Flask, MongoDB, PostgreSQL, and SQL Server. I apply these technologies to practical software projects and business applications for users, teams, and growing businesses worldwide.
                </p>
            </>
        ),
    },
    {
        q: "Where can I follow Hasaan Azeem?",
        a: "You can explore my code on GitHub, professional background on LinkedIn, and portfolio at hasaan.netlify.app. I share development projects, technical work, and learning updates with the developer community.",
        body: (
            <p>
                You can explore my code on GitHub, professional background on LinkedIn, and portfolio at hasaan.netlify.app. I share development projects, technical work, and learning updates with the developer community.
            </p>
        ),
    },
    {
        q: "Can I work with Hasaan Azeem?",
        a: "I'm open to collaborating with software teams and businesses building web applications, ecommerce platforms, business software, APIs, and AI integrations that address practical operational and customer-facing problems. For opportunities, partnerships, or project discussions, visit my portfolio contact section or email hasaanazeem07@outlook.com.",
        body: (
            <>
                <p>
                    I&apos;m open to collaborating with software teams and businesses building web applications, ecommerce platforms, business software, APIs, and AI integrations that address practical operational and customer-facing problems.
                </p>
                <p>
                    For opportunities, partnerships, or project discussions, visit my portfolio contact section or email{" "}
                    <a href="mailto:hasaanazeem07@outlook.com">hasaanazeem07@outlook.com</a>.
                </p>
            </>
        ),
    },
];

export default function AboutFaq() {
    return (
        <section className="about-faq" aria-labelledby="about-faq-title">
            <div className="container">
                <p className="about-faq__eyebrow">Profile</p>
                <h2 className="about-faq__title" id="about-faq-title">
                    About Hasaan Azeem
                </h2>
                <div className="about-faq__list">
                    {FAQS.map((f, i) => (
                        <details className="about-faq__item" key={f.q} open={i === 0}>
                            <summary>{f.q}</summary>
                            {f.body}
                        </details>
                    ))}
                </div>
                <div className="pt-40">
                    <SocialLinks variant="labeled" />
                </div>
            </div>
        </section>
    );
}
