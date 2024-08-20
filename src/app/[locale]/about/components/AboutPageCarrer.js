import Image from "next/image";
import { useTranslations } from "next-intl";
import Section from "@/components/section";
import { Link } from "@/navigation";
import { FaArrowRight } from "react-icons/fa";

export default function AboutPageCarrerSection() {
  const t = useTranslations("AboutPageCarrer");
  return (
    <Section>
      <div className="flex items-center">
        <h1 className="text-zinc-200 text-4xl tracking-tighter">
          <span className="text-orange">#</span>carrer
        </h1>
        <div className="flex-grow h-px bg-orange mx-4"></div>
        <Link href="/projects" className="text-sm text-white">
          View All &#10230;
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        <div className="hidden lg:flex justify-start items-start min-h-[650px] h-full">
          <Image
            src="/about/image-about.svg"
            alt="Hero Background"
            width={600}
            height={600}
            className="lg:ml-0"
          />
        </div>
        <div className="min-h-[650px] flex flex-col justify-center items-start lg:items-start ">
          <h1 className="text-zinc-200 text-5xl tracking-tighter max-w-2xl">
            {t("title")}
          </h1>
          <p className="text-zinc-500 text-2xl mt-5 tracking-tighter font-medium max-w-2xl">
            {t("sub-title")}
          </p>
          <p className="text-zinc-500 mt-5 tracking-tighter font-medium max-w-2xl">
            {t("text1")}
          </p>
          <p className="text-zinc-500 mt-5 tracking-tighter font-medium max-w-2xl">
            {t("text2")}
          </p>
          <Link
            href="/experience"
            className="max-w-[280px] mt-10 border-4 border-orange p-4 text-white hover:text-orange hover:font-bold text-xl flex justify-between items-center"
          >
            My Experiences
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </Section>
  );
}
