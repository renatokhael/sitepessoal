import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export function Features() {
  const t = useTranslations("Features");

  const featuresDetails = [
    {
      id: 1,
      title: t("0.title"),
      description: t("0.description"),
      url: "/projects",
    },
    {
      id: 2,
      title: t("1.title"),
      description: t("1.description"),
      url: "/about",
    },
    {
      id: 3,
      title: t("2.title"),
      description: t("2.description"),
      url: "/stack",
    },
    {
      id: 4,
      title: t("3.title"),
      description: t("3.description"),
      url: "/experience",
    },
  ];

  return (
    <section className="container mx-auto p-10">
      <div className="grid text-center sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {featuresDetails.map((feature) => (
          <Link
            key={feature.id}
            href={feature.url}
            className="col-span-1 row-span-1 text-gray-300 w-full h-full hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-[#003339] to-[#00292E] hover:from-gray-800 hover:to-gray-950 m-4 rounded-lg overflow-hidden relative"
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
      </div>
    </section>
  );
}
