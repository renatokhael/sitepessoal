import { Link } from "@/navigation";
import Image from "next/image";

import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa6";
import LanguageToggle from "./languageToggle";

export function Header() {
  return (
    <header className="flex mx-auto py-5 border-b-2 border-[#003339]">
      <div className=" w-1/3 flex items-center justify-center">
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

      <div className="w-1/3 hidden lg:flex items-center justify-center">
        <div className="flex gap-4">
          <Link href="https://www.linkedin.com/in/rbarbosam/">
            <FaLinkedin color="#9FF9CC" size={24} />
          </Link>
          <Link href="https://github.com/renatokhael">
            <FaGithub color="#9FF9CC" size={24} />
          </Link>
          <Link href="https://x.com/renatokhael_dev">
            <FaTwitter color="#9FF9CC" size={24} />
          </Link>
          <Link href="https://www.instagram.com/khael.code/">
            <FaInstagram color="#9FF9CC" size={24} />
          </Link>
        </div>
      </div>

      <div className="w-1/3 hidden lg:flex items-center justify-center">
        <Link className="text-zinc-400 mx-2 font-bold" href="/projects">
          Portfolio
        </Link>
        <Link className="text-zinc-400 mx-2 font-bold" href="/about">
          Sobre
        </Link>

        <LanguageToggle />
      </div>
    </header>
  );
}
