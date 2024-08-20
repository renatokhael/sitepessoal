import { Link } from "@/navigation";
import Section from "../section";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("About");
  return (
    <Section>
      <div className="flex items-center">
        <h1 className="text-zinc-200 text-4xl ">
          <span className="text-orange">#</span>
          {t("section")}
        </h1>
        <div class="flex-grow h-px bg-orange mx-4"></div>
        <a href="#" class="text-sm text-white">
          77766655 &#10230;
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
        <div className="min-h-[650px] flex flex-col justify-center  ">
          <h1 className="text-zinc-200 text-5xl tracking-tighter max-w-2xl">
            {t("title")}
          </h1>
          <p className="text-zinc-500 text-xl mt-5 tracking-tighter font-medium max-w-2xl">
            {t("description")}
          </p>
          <Link
            href="/about"
            className="max-w-[200px] mt-10 border-4 border-orange hover:text-orange hover:font-bold p-4 text-white text-xl flex justify-between items-center"
          >
            {t("button")}
            <FaArrowRight />
          </Link>
        </div>
        <div className="hidden lg:flex justify-end items-end min-h-[650px]  h-full">
          <Image
            src="/about/bg-about.svg"
            alt="Hero Background"
            width={600}
            height={600}
          />
        </div>
      </div>
    </Section>
  );
}
