import { Header } from "@/components/header";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="container">
      <div className="grid lg:grid-cols-2 py-16">
        <div className="container">
          <h1 className="text-zinc-200 text-4xl font-semibold">Sobre</h1>

          <p className="text-zinc-500 text-xl mt-5 tracking-tighter font-medium ">
            Graduado em Análise e Desenvolvimento de Sistemas, com MBA em Gestão
            de TI e certificações em Scrum e DevOps.
            <br />
            <br />
            Sou um programador especializado em JavaScript, com mais de 10 anos
            de experiência em HTML, CSS e VanillaJS, utilizando programação
            funcional, imperativa, orientada a eventos e POO. <br />
            <br />
            Há mais de 6 anos, trabalho com frameworks como React, Vue, React
            Native e Node.js, explorando ao máximo suas APIs. Utilizo SASS/SCSS
            ou TailwindCSS para estilização e sempre trabalho com TypeScript e
            testes automatizados usando Jest e Cypress.
            <br />
            <br />
            Além disso, possuo sólidos conhecimentos em CI/CD e metodologias
            ágeis. Estou pronto para encarar novos desafios!
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
        <div className="p-10">
          <Image
            src="/about-image.svg"
            alt="Vercel Logo"
            width={420}
            height={300}
          />
        </div>
      </div>
      <div className="bg-zinc-950 p-10 rounded-2xl">
        <h1 className="text-zinc-200 text-3xl font-semibold">
          Web Developer - 2013 - 2017
        </h1>
        <p className="text-zinc-500 text-xl mt-5 tracking-tighter font-medium ">
          Iniciei minha carreira no desenvolvimento web prestando serviços para
          diversas agências de publicidade e marketing digital, onde desenvolvi
          websites, landing pages e lojas virtuais. Durante esse período,
          adquiri profundo conhecimento em SEO e ferramentas de análise, como
          Google Analytics, Search Console, SEMRush e YoastSEO. <br />
          <br />
          Além disso, especializei-me em WordPress, explorando todas as
          possibilidades desse framework. Aprendi Advanced Custom Fields (ACF),
          desenvolvimento e personalização de plugins e temas, uso eficiente dos
          Action & Filter Hooks, domínio do wp-cli, além de competência na
          atualização para novas versões do WordPress e segurança, remoção de
          vírus, estratégias de backup e muito mais.
        </p>
      </div>

      <div className="bg-zinc-950 p-10 rounded-2xl mt-8">
        <h1 className="text-zinc-200 text-3xl font-semibold">
          Desenvolvimento Full-Stack e Front-End - 2016 - atualmente
        </h1>
        <p className="text-zinc-500 text-xl mt-5 tracking-tighter font-medium ">
          Paralelamente ao trabalho com WordPress, comecei a desenvolver sites,
          blogs e lojas utilizando React, especialmente com Gatsby, Next.js e
          Strapi. Realizei diversos cursos e bootcamps para me aprofundar em
          frameworks como React e Vue.js, além de participar ativamente de
          fóruns e grupos de estudos online. Desde então, tenho trabalhado em
          várias empresas, criando SPAs, SSRs e diversos projetos de pequeno e
          grande porte, utilizando TypeScript, Styled-Components, Hooks, entre
          outras tecnologias.
        </p>
      </div>
    </section>
  );
}
