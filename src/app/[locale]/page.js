import AboutSection from "@/components/about/About";

import ContactSection from "@/components/contact/Contact";

import { Hero } from "@/components/hero";

import ProjectSection from "@/components/projects/Projects";
import SkillSection from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectSection />
      <SkillSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
