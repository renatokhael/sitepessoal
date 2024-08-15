import { Link } from "@/navigation";
import Card from "../card/Card";
import Section from "../section";
import { useTranslations } from "next-intl";
import { FaArrowRight } from "react-icons/fa";

export default function ProjectSection() {
  const t = useTranslations("Projects");

  const projects = [
    {
      image: "/projects/isolve/capa.png",
      title: t("0.title"),
      shortDescription: t("0.shortDescription"),
      longDescription: t("0.longDescription"),
      cardButton: t("0.cardButton"),
      titleMyWork: t("0.titleMyWork"),
      myWork: t("0.myWork"),
      images: [
        "/projects/isolve/01.png",
        "/projects/isolve/02.png",
        "/projects/isolve/03.png",
        "/projects/isolve/04.png",
      ],
      textButton: t("0.textButton"),
      href: "https://isolve.quintoandar.com.br/",
    },
    {
      image: "/projects/quintoandar/capa.png",
      title: t("1.title"),
      shortDescription: t("1.shortDescription"),
      longDescription: t("1.longDescription"),
      cardButton: t("1.cardButton"),
      titleMyWork: t("1.titleMyWork"),
      myWork: t("1.myWork"),
      images: ["/projects/quintoandar/01.png", "/projects/quintoandar/02.png"],
      textButton: t("1.textButton"),
      href: "https://www.quintoandar.com.br/",
    },
    {
      image: "/projects/instacarro/capa.png",
      title: t("2.title"),
      shortDescription: t("2.shortDescription"),
      longDescription: t("2.longDescription"),
      cardButton: t("2.cardButton"),
      titleMyWork: t("2.titleMyWork"),
      myWork: t("2.myWork"),
      images: [
        "/projects/instacarro/01.png",
        "/projects/instacarro/02.png",
        "/projects/instacarro/03.png",
      ],
      textButton: t("2.textButton"),
      href: "https://www.instacarro.com/veiculos",
    },
    {
      image: "/projects/ewally/capa.png",
      title: t("3.title"),
      shortDescription: t("3.shortDescription"),
      longDescription: t("3.longDescription"),
      cardButton: t("3.cardButton"),
      titleMyWork: t("3.titleMyWork"),
      myWork: t("3.myWork"),
      images: [
        "/projects/ewally/01.png",
        "/projects/ewally/02.png",
        "/projects/ewally/03.png",
      ],
      textButton: t("3.textButton"),
      href: "https://www.ewally.com.br/",
    },
  ];

  return (
    <Section>
      <div className="flex items-center">
        <h1 className="text-zinc-200 text-4xl tracking-tighter">
          <span className="text-orange">#</span>projects
        </h1>
        <div className="flex-grow h-px bg-orange mx-4"></div>
        <Link href="/projects" className="text-sm text-white">
          View All &#10230;
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-16">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </Section>
  );
}
