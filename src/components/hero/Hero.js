import Image from "next/image";

import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

import { FaArrowRight } from "react-icons/fa";
import Section from "../section";

export function Hero() {
  const t = useTranslations("Hero");
  return (
    <Section>
      <div className="container mx-auto mt-24 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
          <div className=" min-h-[650px] flex flex-col justify-center ">
            <h1 className="text-zinc-200 text-5xl tracking-tighter max-w-2xl">
              {t("title")}
            </h1>
            <p className="text-zinc-500 text-2xl mt-5 tracking-tighter font-medium max-w-2xl">
              {t("description")}
            </p>
            <Link
              href="#"
              className="max-w-[220px] mt-10 border-4 border-orange p-4 text-white hover:text-orange hover:font-bold text-xl flex justify-between items-center"
            >
              {t("button")}
              <FaArrowRight />
            </Link>
          </div>
          <div className="hidden lg:flex flex-col justify-end items-end">
            <Image
              src="/hero/hero-imagem.svg"
              alt="Hero Background"
              width={600}
              height={600}
            />
            <div className="h-10 w-full border-4 border-border flex justify-center items-center">
              <span className="text-border flex justify-center items-center">
                <FaArrowRight className="mr-5" /> I'm updating my portfolio...
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
