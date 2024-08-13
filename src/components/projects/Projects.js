import { Link } from "@/navigation";
import Card from "../card/Card";
import Section from "../section";
import { useTranslations } from "next-intl";
export default function ProjectSection() {
  const t = useTranslations("Projects");

  const projects = [
    {
      image: "/projects/isolve/capa.png",
      title: t("0.title"),
      shortDescription: t("0.shortDescription"),
      longDescription: t("0.longDescription"),
      longDescription: t("0.longDescription"),
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
      longDescription: t("1.longDescription"),
      myWork: t("1.myWork"),
      images: ["/projects/quintoandar/01.png", "/projects/quintoandar/02.png"],
      textButton: t("0.textButton"),
      href: "https://www.quintoandar.com.br/",
    },
    {
      image: "/projects/instacarro/capa.png",
      title: t("2.title"),
      shortDescription: t("2.shortDescription"),
      longDescription: t("2.longDescription"),
      longDescription: t("2.longDescription"),
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
      longDescription: t("3.longDescription"),
      myWork: t("3.myWork"),
      images: [
        "/projects/instacarro/01.png",
        "/projects/instacarro/02.png",
        "/projects/instacarro/03.png",
      ],
      textButton: t("2.textButton"),
      href: "https://www.instacarro.com/veiculos",
    },
  ];

  return (
    <Section>
      <div className="flex items-center">
        <h1 className="text-zinc-200 text-4xl ">
          <span className="text-orange">#</span>projects
        </h1>
        <div class="flex-grow h-px bg-orange mx-4"></div>
        <Link href="/projects" class="text-sm text-white">
          view all &#10230;
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-16">
        <Card {...projects[0]} />
        <Card {...projects[1]} />
        <Card {...projects[2]} />
        <Card {...projects[3]} />
      </div>
    </Section>
  );
}
