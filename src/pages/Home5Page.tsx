import PageMeta from "@/seo/PageMeta";
import AboutFaq, { FAQS } from "@/shared/sections/index-5/AboutFaq";
import CinematicHero from "@/shared/sections/index-5/CinematicHero";
import Section2 from "@/shared/sections/index-5/Section2";
import Section3 from "@/shared/sections/index-5/Section3";
import Section4 from "@/shared/sections/index-5/Section4";
import Section5 from "@/shared/sections/index-5/Section5";
import Section6 from "@/shared/sections/index-5/Section6";

export default function Home5Page() {
  return (
    <>
      <PageMeta
        title="Hasaan Azeem | AI Creator, Automations & Claude"
        description="Hasaan Azeem is an AI creator teaching Claude, n8n automations and AI skills. Free resources, Claude skills and a 90 day roadmap to remote work."
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          },
        ]}
      />
      <CinematicHero />
      <Section2 />
      <Section4 />
      <Section3 />
      <Section5 />
      <Section6 />
      <AboutFaq />

    </>
  );
}
