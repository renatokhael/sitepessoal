import AboutSection from "@/components/about/About";

import ContactSection from "@/components/contact/Contact";
import { Hero } from "@/components/hero/Hero";

import ProjectSection from "@/components/projects/Projects";
import SkillSection from "@/components/skills/Skills";
import Testimonials from "@/components/testimonials/testimonials";
import AboutPageCertificationsSlide from "./about/components/AboutPageCertificationsSlide";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectSection />
      <SkillSection />
      <AboutSection />
      <AboutPageCertificationsSlide />
      <Testimonials />
      <ContactSection />
    </>
  );
}
