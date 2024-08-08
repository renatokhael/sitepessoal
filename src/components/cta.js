import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function Cta() {
  const t = useTranslations("Cta");

  return (
    <section className="bg-[#003339] h-[650px] p-10 flex justify-center items-center">
      <div className="container mx-auto bg-gradient-to-tl from-[#F48F56] to-[#ff5748] rounded-xl h-[550px] p-10 flex flex-col justify-center items-center ">
        <h1 className="text-zinc-900 text-5xl tracking-tighter text-center max-w-xl">
          {t("title")}
        </h1>
        <p className="text-zinc-900 text-3xl my-5 tracking-tighter text-center font-medium  max-w-5xl">
          {t("sub-title")} ✨
        </p>
        <p className="text-zinc-900 text-xl mb-5 tracking-tighter text-center font-medium  max-w-6xl">
          {t("description")}
        </p>
        <Link
          className="bg-[#ff5748] rounded text-[#00292E] text-center font-bold max-w-[280px] px-12 py-4 text-xl my-5"
          href="/contact"
        >
          {t("button")}
        </Link>
      </div>
    </section>
  );
}
