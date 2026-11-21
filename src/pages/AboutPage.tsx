import PageMeta from "@/seo/PageMeta";
import {
  AboutHero,
  AboutIntro,
  AboutExpertise,
  AboutJourney,
  AboutMarquee,
  AboutFigures,
  AboutCTA,
  // AboutFooterBrand,
} from "@/shared/sections/about/index";
import "@/shared/sections/about/about.css";

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title="About Hasaan Azeem | Full Stack Developer & AI Builder"
        description="Get to know Hasaan Azeem, a Full Stack Developer building modern web applications, AI-powered solutions, and business automations."
      />

      <main className="about-page">
        <AboutHero />
        <AboutIntro />
        <AboutExpertise />
        <AboutJourney />
        <AboutMarquee />
        <AboutFigures />
        <AboutCTA />
        {/* <AboutFooterBrand /> */}
      </main>
    </>
  );
}