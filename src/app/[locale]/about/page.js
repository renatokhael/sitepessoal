import { Header } from "@/components/header";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("AboutPage");
  return <section className="container mx-auto px-10 h-[650px] p-10"></section>;
}
