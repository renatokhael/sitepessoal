import { Header } from "@/components/header";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="grid lg:grid-cols-2 py-16">
      <div className="container">
        <h1 className="text-zinc-200 text-4xl font-semibold">Sobre</h1>

        <p className="text-zinc-500 text-xl mt-5 tracking-tighter font-medium ">
          Graduado em Análise e Desenvolvimento de Sistemas, MBA em Gestão de TI
          e certificações Scrum e DevOps. <br />
          <br />
          Sou um programador especializado em JavaScript com mais de 10 anos de
          experiência em HTML, CSS e VanillaJS, usando programação funcional,
          imperativa, event-driven e POO. <br />
          <br />
          Estou há mais de 6 anos usando frameworks como React, Vue, React
          Native e Node.js, explorano ao máximos suas APIs. Utilizando SASS/SCSS
          ou TailwindCSS para estilização. Não abro mão de Typescript e testes
          automatizados usando Jest e Cypress.
          <br />
          <br />
          Além disso, tenho sólidos conhecimentos em CI/CD e metodologia ágil.
          Estou pronto para encarar o desafio!
        </p>
        <div className="flex mt-8 gap-4">
          <img src="/react.svg" alt="Logo" width={24} />
          <span className=" font-semibold text-zinc-500 flex-shrink-0">
            React
          </span>
          <img src="/next.svg" alt="Logo" width={20} />
          <span className="font-semibold text-zinc-500 flex-shrink-0">
            Next.js
          </span>
          <img src="/ts.svg" alt="Logo" width={18} />
          <span className=" font-semibold text-zinc-500 flex-shrink-0">
            Typescript
          </span>
          <img src="/tailwind.svg" alt="Logo" width={24} />
          <span className=" font-semibold text-zinc-500 flex-shrink-0">
            TailwindCSS
          </span>
        </div>
      </div>
      <div>
        <Image
          src="/renato.png"
          alt="Vercel Logo"
          width={500}
          height={300}
          priority
          className="py-10"
        />
      </div>
    </section>
  );
}
