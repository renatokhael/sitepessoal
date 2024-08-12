import Image from "next/image";
import Link from "next/link";
import { AlertTop } from "./alerttop";

import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Hero");
  return (
    <section className="min-h-[700px] pt-24 bg-gradient-to-t from-[#003339] to-[#00292E]">
      <Image
        src="/hero/background.svg"
        alt="Hero Background"
        width={600}
        height={600}
        className="absolute top-24 left-1/2
         right-0 bottom-0 "
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

export function Features() {
  <div className="grid text-center sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {featuresDetails.map((feature) => (
      <Link
        key={feature.id}
        href={feature.url}
        className="border-2 border-[#ff5748] col-span-1 row-span-1 text-gray-300 w-full h-full hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-[#003339] to-[#00292E] hover:from-gray-800 hover:to-gray-950 m-4  overflow-hidden relative"
      >
        <div className="px-8 py-10">
          <div className="bg-[#F48F56] w-10 h-10 rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-red-900 transition-all"></div>
          <div className="uppercase font-bold text-xl">{feature.title}</div>
          <div className="text-gray-300 uppercase tracking-widest">
            {feature.description}
          </div>
          <div className="mt-8">
            <p className="font-bold text-[#9FF9CC]">Saiba mais</p>
          </div>
        </div>
        <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
        <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-yellow-950 group-hover:via-yellow-500 w-[70%] m-auto rounded transition-all"></div>
      </Link>
    ))}
  </div>;
}
