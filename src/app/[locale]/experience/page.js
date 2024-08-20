import Section from "@/components/section";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    image: "/upwork.jpeg",
    cargo: "Desenvolvedor Freelancer",
    empresa: "Upwork",
    data: "Fevereiro de 2024 - Atualmente",
    descricao:
      "Estou atuando em projetos usando a stack MERN (MongoDB, Express, React, Node.js) e outras tecnologias em projetos de empresas dos EUA, Europa, Canadá e Índia. Faço desde a criação de features especificas, até aplicações ponta-a-ponta.",
  },
  {
    id: 2,
    image: "/quintoandar.jpeg",
    cargo: "Engenheiro de Software",
    empresa: "QuintoAndar",
    data: "Outubro de 2021 - Dezembro de 2023",
    descricao:
      "Atuei como Engenheiro de Software na squad Credit Experience, na tribo Fintech. Trabalhando principalmente com microsserviços usando Java com Spring, e micro front-ends usando React, Redux e Typescript. Ci/CD, monitoramento/observabilidade, deploy na AWS.",
  },
  {
    id: 3,
    image: "/atta.jpeg",
    cargo: "Engenheiro Front-End",
    empresa: "Atta Franchising",
    data: "Junho de 2021 - Outubro de 2021",
    descricao:
      "Líderei a criação de interfaces de usuário utilizando Vue.js, Nuxt.js, Typescript, HTML, CSS com pré-processadores SASS/SCSS. Contribui para a criação do Design System usando StoryBook. Responsável por testes automatizados, code review, e deploy na AWS.",
  },
  {
    id: 4,
    image: "/kavak.jpeg",
    cargo: "Desenvolvedor Front-End",
    empresa: "Kavak",
    data: "Abril de 2021 - Junho de 2021",
    descricao:
      "Trabalhei em projetos usando React, Typescript e Node.js. Colaborei ativamente com a criação da interface de usuário do Guia de Preços, um fluxo estratégico da aplicação. Testes unitários, e2e e integração, CI/CD, deploy no GCP.  ",
  },
  {
    id: 4,
    image: "/instacarro.jpeg",
    cargo: "Desenvolvedor Front-End",
    empresa: "Instacarro.com",
    data: "Janeiro de 2021 - Abril de 2021",
    descricao:
      "Líderei a criação de interfaces de usuário para o SPA Guia Instacarro, utilizando NextJS, React, TypeScript, TailwindCSS e Node.js. Fui responsável por manter a aplicação WordPress, bem como todas as configurações de SEO para o Blog da empresa. CI/CD, Deploy na GCP.",
  },
  {
    id: 5,
    image: "/tatil.jpeg",
    cargo: "Desenvolvedor Front-End",
    empresa: "Tatil Design",
    data: "Junho de 2020 - Dezembro de 2020",
    descricao:
      "Trabalhei principalmente com React, Next, TypeScript e WordPress, contribuí em projetos WP Headless (utilizando action & filter hooks, wp-cli, guttenbeg blocks), para grandes clientes como Canal Brasil. Trabalhei implementando novas funcionalidades no blog Asterisco.",
  },
  {
    id: 6,
    image: "/somai.jpeg",
    cargo: "Desenvolvedor Web",
    empresa: "Somai EdTech",
    data: "Janeiro de 2017 - Dezembro de 2020",
    descricao:
      "Fui responsável por criar projetos web variados, focados em redes educacionais. Utilizei principalmente PHP, WordPress, HTML, CSS, Gulp, JavaScript, JQuery. Trabalhei com Chatbots e inteligência artificial proprietária, usando principalmente Python.",
  },
];

const freelances = [
  {
    id: 1,
    image: "/stadiebit.png",
    cargo: "Web Developer",
    empresa: "Stadiebit Marketing Digital",
    data: "Janeiro 2018 - Julho de 2021",
    descricao:
      "Atuei desenvolvendo diversos projetos de sites, landing pages e APIs. Utilizei PHP, WordPress, HTML, CSS, JavaScript, JQuery. ",
  },
  {
    id: 2,
    image: "/cloudesign.png",
    cargo: "Desenvolvedor WordPress",
    empresa: "Cloudesign",
    data: "Dezembro de 2018 - Julho de 2019",
    descricao:
      "Atuei principalmente em projetos WordPress mais complexos, fazendo customização de plugins e temas, limpeza de sites infectados com vírus, restauração de backup.",
  },
  {
    id: 3,
    image: "/i9.png",
    cargo: "Desenvolvedor WordPress",
    empresa: "I9 Criações",
    data: "Maio de 2018 - Dezembro de 2018",
    descricao:
      "Atuei principalmente em projetos WordPress mais complexos, fazendo customização de plugins e temas, limpeza de sites infectados com vírus, restauração de backup.",
  },
  {
    id: 4,
    image: "/ewally.png",
    cargo: "Desenvolvedor WordPress",
    empresa: "Ewally",
    data: "Julho de 2020 - Dezembro de 2020",
    descricao:
      "Fui responsável pela criação completa do website da empresa. Utilizei PHP, WordPress, HTML, CSS, JavaScript, JQuery. ",
  },
];

export default function Experience() {
  return (
    <Section>
      <div className="flex items-center pt-32">
        <h1 className="text-zinc-200 text-2xl ">
          <span className="text-orange">/</span>
          profissional experience
        </h1>
      </div>
      <div className="containermx-auto grid lg:grid-cols-2 gap-4 mt-10">
        {experiences.map((experience) => (
          <div key={experience.id} className="border-2 border-border p-10 ">
            <div className="flex flex-row">
              <div className="basis-1/4">
                <Image
                  src={experience.image}
                  alt="Vercel Logo"
                  width={80}
                  height={100}
                  priority
                  className="rounded-xl"
                />
              </div>
              <div className="basis-2/3">
                <h1 className="text-zinc-200 text-2xl font-semibold tracking-tighter">
                  {experience.cargo}
                </h1>
                <p className="text-orange font-semibold text-xl tracking-tighter ">
                  {experience.empresa}
                </p>
                <p className="text-zinc-500 font-semibold ">
                  {experience.data}
                </p>
              </div>
            </div>

            <p className="text-zinc-400 text-medium mt-4 tracking-tighter">
              {experience.descricao}
            </p>
          </div>
        ))}
      </div>
      <div>
        <div className="flex flex-col  pt-32">
          <h1 className="text-zinc-200 text-2xl ">
            <span className="text-orange">/</span>
            others experiences
          </h1>
          <div className="containermx-auto grid lg:grid-cols-2 gap-4 mt-10 mb-32">
            {freelances.map((freelance) => (
              <div key={freelance.id} className="border-2 border-border p-10 ">
                <div className="flex flex-row">
                  <div className="basis-1/4">
                    <Image
                      src={freelance.image}
                      alt="Vercel Logo"
                      width={80}
                      height={100}
                      priority
                      className="rounded-xl"
                    />
                  </div>
                  <div className="basis-2/3">
                    <h1 className="text-zinc-200 text-2xl font-semibold tracking-tighter">
                      {freelance.cargo}
                    </h1>
                    <p className="text-orange font-semibold text-xl tracking-tighter ">
                      {freelance.empresa}
                    </p>
                    <p className="text-zinc-500 font-semibold ">
                      {freelance.data}
                    </p>
                  </div>
                </div>

                <p className="text-zinc-400 text-medium mt-4 tracking-tighter">
                  {freelance.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
