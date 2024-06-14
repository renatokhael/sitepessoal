import { Raleway } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Renato Khael",
  description: "Desenvolvedor Front-End",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[radial-gradient(circle_500px_at_50%_200px,#050505,transparent)]">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
