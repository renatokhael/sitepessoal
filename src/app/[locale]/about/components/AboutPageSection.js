import Image from "next/image";
import { useTranslations } from "next-intl";
import Section from "@/components/section";
import { Link } from "@/navigation";
import { FaArrowRight } from "react-icons/fa";

export default function AboutPageSection() {
  const t = useTranslations("AboutPageSection");
  return (
    <Section>
      <div className="flex items-center pt-16">
        <h1 className="text-zinc-200 text-2xl ">
          <span className="text-orange">/</span>
          about
        </h1>
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
          <Link
            href="/projects"
            className="max-w-[220px] mt-10 border-4 border-orange p-4 text-white hover:text-orange hover:font-bold text-xl flex justify-between items-center"
          >
            My Projects
            <FaArrowRight />
          </Link>
        </div>
        <div className="hidden lg:flex justify-end items-end min-h-[650px]  h-full">
          <Image
            src="/about/aboutpage-image.svg"
            alt="Hero Background"
            width={600}
            height={600}
          />
        </div>
      </div>
    </Section>
  );
}
