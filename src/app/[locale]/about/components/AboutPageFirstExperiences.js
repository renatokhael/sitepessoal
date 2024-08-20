import Image from "next/image";
import { useTranslations } from "next-intl";
import Section from "@/components/section";

import { FaUniversity } from "react-icons/fa";
import { Link } from "@/navigation";

export default function AboutPageFirstExperiences() {
  const t = useTranslations("AboutPageFirstExperiences");
  return (
    <Section>
      <div className="flex items-center">
        <h1 className="text-zinc-200 text-4xl tracking-tighter">
          <span className="text-orange">#</span>academic background
        </h1>
        <div className="flex-grow h-px bg-orange mx-4"></div>
        <Link href="/projects" className="text-sm text-white">
          View All &#10230;
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
        <div className="min-h-[650px] flex flex-col justify-center  ">
          <h1 className="text-zinc-200 text-5xl tracking-tighter max-w-2xl">
            {t("title")}
          </h1>
          <p className="text-zinc-500 text-2xl mt-5 tracking-tighter font-medium max-w-2xl">
            {t("sub-title")}
          </p>
          <p className="text-zinc-500  mt-5 tracking-tighter font-medium max-w-2xl">
            {t("text1")}
          </p>
          <p className="text-zinc-500  mt-5 tracking-tighter font-medium max-w-2xl">
            {t("text2")}
          </p>
        </div>
        <div className="min-h-[650px] flex flex-col justify-center  ">
          <div className=" border-2 border-orange p-5 flex ">
            <h1 className="text-orange flex justify-start items-center ">
              <FaUniversity className="mr-5" /> Systems analysis and development
              [2013]
            </h1>
          </div>
          <div className=" border-2 border-orange p-5  mt-4">
            <h1 className="text-orange flex justify-start items-center te">
              <FaUniversity className="mr-5" /> MBA in IT management [2016]
            </h1>
          </div>
        </div>
      </div>
    </Section>
  );
}
