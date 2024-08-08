import Image from "next/image";
import Link from "next/link";

import { useTranslations } from "next-intl";

export default function Portfolio() {
  const t = useTranslations("Portfolio");
  return (
    <section className="bg-gradient-to-tl from-[#003339] to-[#00292E] p-10 h-[650px] ">
      <div className="flex justify-center items-center">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex justify-center ">
            <Image
              src="/portfolio/kingweb-bg.png"
              alt="Hero Background"
              width={600}
              height={600}
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-zinc-200 text-5xl tracking-tighter max-w-2xl">
              {t("title")}
            </h1>
            <p className="text-zinc-500 text-3xl my-5 tracking-tighter font-medium  max-w-2xl">
              {t("sub-title")} ✨
            </p>
            <p className="text-zinc-500 text-xl mb-5 tracking-tighter font-medium  max-w-2xl">
              {t("description")}
            </p>
            <Link
              className="bg-gradient-to-tl from-[#F48F56] to-[#ff5748] rounded text-[#00292E] px-10 py-5 text-center font-bold max-w-[280px]"
              href="/contact"
            >
              Conheça meus projetos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
