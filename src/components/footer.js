import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 bg-[#00292E] w-full border-t-2 border-[#003339] h-[64px] flex justify-center ">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.svg"
          alt="Logo Renato Khael"
          width={48}
          height={48}
          priority
        />
        <span className="text-zinc-500 text-sm tracking-tighter font-medium text-center">
          © 2024 - Design by Renato Khael using only Next.js and Tailwind CSS
        </span>
      </Link>
    </footer>
  );
}
