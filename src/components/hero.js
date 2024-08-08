import Image from "next/image";
import Link from "next/link";
import { AlertTop } from "./alerttop";

import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Hero");
  return (
    <section className="relative min-h-[500px]">
      <Image
        src="/hero/hero-bg.png"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="opacity-10"
      />
      <div className="relative container mx-auto h-[500px] flex justify-center items-center">
        <div className="flex flex-col items-center">
          <AlertTop />
          <h1 className="text-zinc-200 text-5xl text-center tracking-tighter max-w-2xl">
            {t("title")}
          </h1>
          <p className="text-zinc-500 text-3xl mt-5 tracking-tighter font-medium text-center max-w-2xl">
            {t("description")}
          </p>
          <div className="flex justify-center items-center mt-10">
            <Link
              className="bg-gradient-to-tl from-[#F48F56] to-[#ff5748] rounded text-[#00292E] px-8 py-4 mx-2 font-bold"
              href="/contact"
            >
              {t("btn-primary")}
            </Link>
            <Link
              className="border border-[#F48F56] rounded text-[#F48F56] px-8 py-4 mx-2 font-bold"
              href="/contact"
            >
              {t("btn-secondary")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
