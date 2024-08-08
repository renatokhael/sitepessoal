import About from "@/components/about";
import Contact from "@/components/contact";
import Cta from "@/components/cta";
import { Features } from "@/components/features";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import Portfolio from "@/components/portfolio";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Portfolio />
      <Cta />
    </>
  );
}
