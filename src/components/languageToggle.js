"use client";

import { useState, useEffect } from "react";
import { LuLanguages } from "react-icons/lu";
import { usePathname, useRouter } from "@/navigation";

export default function LanguageToggle() {
  const [language, setLanguage] = useState(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
    router.replace(pathname, { locale: savedLanguage }, { shallow: true });
  }, [pathname, router]);

  const handleLocaleChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
    router.replace(pathname, { locale: selectedLanguage }, { shallow: true });
  };

  return (
    <div className="max-w-[180px] flex justify-center items-center border border-[#003339]">
      <LuLanguages className=" text-zinc-400 ml-4" />
      <select
        value={language}
        onChange={handleLocaleChange}
        className="px-4 py-2 text-sm  bg-[#00292E] text-white rounded-lg focus:outline-none"
      >
        <option value="en">English</option>
        <option value="pt">Português</option>
      </select>
    </div>
  );
}
