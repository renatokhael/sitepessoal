import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-[#003339] h-[64px] flex justify-center ">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.svg"
          alt="Logo Renato Khael"
          width={48}
          height={48}
          priority
        />
        <span className="text-zinc-500 text-sm tracking-tighter font-medium text-center">
          © 2024 - Desenvolvidor por Renato Khael usando Next.js e Tailwind CSS
        </span>
      </Link>
    </footer>
  );
}
