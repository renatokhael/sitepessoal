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
        <Card />
        <Card />
        <Card />
      </div>
    </Section>
  );
}
