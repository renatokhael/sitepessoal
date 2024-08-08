import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import Contact from "@/components/contact";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Adicione os pesos que você precisa aqui
});

const locales = ["en", "pt"];

export const metadata = {
  title: "Renato Khael",
  description: "Desenvolvedor Front-End",
};

export default function RootLayout({ children, params: { locale } }) {
  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <main className="bg-[#00292E]  min-h-screen ">
          <Header />
          {children}
          <Contact />
          <Footer />
        </main>
      </body>
    </html>
  );
}
