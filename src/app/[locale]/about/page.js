import { Header } from "@/components/header";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("AboutPage");
  return (
    <section className="container mx-auto px-10 h-[650px] p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-zinc-200 text-5xl tracking-tighter max-w-2xl">
            {t("title")}
          </h1>
          <p className="text-zinc-500 text-3xl my-5 tracking-tighter font-medium  max-w-2xl">
            {t("sub-title")} ✨
          </p>
          <p className="text-zinc-400 text-xl mb-5 tracking-tighter font-medium  max-w-2xl">
            {t("description")}
          </p>
        </div>
        <div>
          <Image
            src="/about/renato-hero.png"
            alt="Hero Background"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
