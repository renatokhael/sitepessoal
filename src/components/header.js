import { Link } from "@/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import LanguageToggle from "./languageToggle";

export function Header() {
  const t = useTranslations("Menu");
  const menu = [
    {
      name: t("about"),
      href: "/about",
    },

    {
      name: t("experience"),
      href: "/about",
    },
    {
      name: t("projects"),
      href: "/projects",
    },

    {
      name: t("setup"),
      href: "/about",
    },
  ];

  return (
    <header className="fixed w-full py-5 px-5 border-b-2 bg-[#00292E] border-[#003339] ">
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex justify-start items-center ">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo Renato Khael"
              width={48}
              height={48}
              priority
            />
          </Link>
        </div>

        <div className="hidden lg:flex justify-center items-center">
          <nav>
            <ul className="flex gap-5">
              {menu.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-zinc-300 text-sm hover:text-orange hover:font-bold"
                  >
                    <span className="text-orange ">#</span> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex justify-end items-center">
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
