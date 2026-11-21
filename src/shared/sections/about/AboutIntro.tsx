import { Reveal } from "./motion";

export default function AboutIntro() {
  return (
    <section className="about-intro">
      <div className="about-container">
        <div className="about-intro__grid">
          <div className="about-intro__left">
            <Reveal>
              <span className="about-intro__label">WHO I AM</span>
            </Reveal>

            <Reveal as="h2" delay={100} className="about-intro__title">
              Full Stack Developer &amp; AI Builder.
            </Reveal>

            <Reveal delay={200}>
              <p className="about-intro__sub">
                Building web products and AI solutions that help businesses
                grow, automate, and scale.
              </p>
            </Reveal>
          </div>

          <div className="about-intro__right">
            <Reveal delay={150}>
              <p>
                I'm Hasaan, a Full Stack Developer from Lahore, Pakistan. I
                spend most of my time building web applications, experimenting
                with AI, exploring new technologies, and figuring out how to
                turn ideas into products that solve real problems.
              </p>
            </Reveal>

            <Reveal delay={250}>
              <p>
                I hold a BS in Information Technology from the University of
                Gujrat, where I built <mark>WebXGuard</mark>, an AI-powered web
                vulnerability scanning platform, as my final year project. I
                work across the <mark>MERN stack</mark>, <mark>Next.js</mark>,{" "}
                <mark>TypeScript</mark>, <mark>Python</mark>, and{" "}
                <mark>ASP.NET Core</mark>, and I build AI automations with{" "}
                <mark>n8n</mark> and <mark>Vapi</mark> voice AI.
              </p>
            </Reveal>

            <Reveal delay={350}>
              <p>
                But building isn't the only thing I'm interested in. I'm
                fascinated by how technology creates opportunities and how
                businesses grow. My long term goal is to build my own marketing
                and software development agency.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}