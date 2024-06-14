import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa6";

export function Header() {
  return (
    <header className="flex container  border border-zinc-900 py-6 rounded-2xl">
      <div className="w-1/3 flex items-center justify-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Vercel Logo"
            width={150}
            height={24}
            priority
          />
        </Link>
      </div>

      <div className="w-1/3 hidden lg:flex items-center justify-center">
        <div className="flex gap-4">
          <Link href="https://www.linkedin.com/in/rbarbosam/">
            <FaLinkedin color="#848484" size={24} />
          </Link>
          <Link href="https://github.com/renatokhael">
            <FaGithub color="#848484" size={24} />
          </Link>
          <Link href="https://x.com/renatokhael_dev">
            <FaTwitter color="#848484" size={24} />
          </Link>
          <Link href="https://www.instagram.com/khael.code/">
            <FaInstagram color="#848484" size={24} />
          </Link>
        </div>
      </div>

      <div className="w-1/3 hidden lg:flex items-center justify-center">
        <Link
          className="text-lime-200 border border-zinc-800 px-10 py-3 rounded-xl font-semibold hover:border-zinc-700 hover:bg-zinc-950"
          href="/contact"
        >
          Contato -&gt;
        </Link>
      </div>
    </header>
  );
}
