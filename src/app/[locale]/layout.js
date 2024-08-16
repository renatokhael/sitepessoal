import { Fira_Code } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import Footer from "@/components/footer";

const fira = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "700"], // Adicione os pesos que você precisa aqui
});

const locales = ["en", "pt"];

export const metadata = {
  title: "Renato Khael",
  description: "Brazilian Web Developer and Frontend",
};

export default function RootLayout({ children, params: { locale } }) {
  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <body className={fira.className}>
        <main className="bg-gradient-to-r from-[#003339] to-black min-h-screen ">
          <Header />
          {children}

          <Footer />
        </main>
      </body>
    </html>
  );
}
