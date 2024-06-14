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
    data: "Agosto de 2021 - Dezembro de 2023",
    descricao:
      "Atuei como Engenheiro de Software na squad Credit Experience, na tribo Fintech. Trabalhando principalmente com microsserviços usando Java com Spring, e micro front-ends usando React, Redux e Typescript. Ci/CD, monitoramento/observabilidade, deploy na AWS.",
  },
  {
    id: 3,
    image: "/atta.jpeg",
    cargo: "Engenheiro Front-End",
    empresa: "Atta Franchising",
    data: "Janeiro de 2021 - Agosto de 2021",
    descricao:
      "Líderei a criação de interfaces de usuário utilizando Vue.js, Nuxt.js, Typescript, HTML, CSS com pré-processadores SASS/SCSS. Contribui para a criação do Design System usando StoryBook. Responsável por testes automatizados, code review, e deploy na AWS.",
  },
  {
    id: 4,
    image: "/kavak.jpeg",
    cargo: "Desenvolvedor Front-End",
    empresa: "Kavak",
    data: "Setembro de 2020 - Dezembro de 2020",
    descricao:
      "Trabalhei em projetos usando React, Typescript e Node.js. Colaborei ativamente com a criação da interface de usuário do Guia de Preços, um fluxo estratégico da aplicação. Testes unitários, e2e e integração, CI/CD, deploy no GCP.  ",
  },
  {
    id: 4,
    image: "/instacarro.jpeg",
    cargo: "Desenvolvedor Front-End",
    empresa: "Instacarro.com",
    data: "Janeiro de 2020 - Agosto de 2020",
    descricao:
      "Líderei a criação de interfaces de usuário para o SPA Guia Instacarro, utilizando NextJS, React, TypeScript, TailwindCSS e Node.js. Fui responsável por manter a aplicação WordPress, bem como todas as configurações de SEO para o Blog da empresa. CI/CD, Deploy na GCP.",
  },
  {
    id: 5,
    image: "/somai.jpeg",
    cargo: "Desenvolvedor Web",
    empresa: "Somai EdTech",
    data: "Janeiro de 2017 - Dezembro de 2020",
    descricao:
      "Fui responsável por criar projetos web variados, focados em redes educacionais. Utilizei principalmente PHP, WordPress, HTML, CSS, Gulp, JavaScript, JQuery. Trabalhei com Chatbots e inteligência artificial proprietária, usando principalmente Python.",
  },
];

export default function Experience() {
  return (
    <section className="container mx-auto grid grid-cols-2 gap-4 mt-16">
      {experiences.map((experience) => (
        <div key={experience.id} className="bg-zinc-950 p-10 rounded-2xl">
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
              <h1 className="text-zinc-200 text-2xl font-semibold">
                {experience.cargo}
              </h1>
              <p className="text-purple-700 font-semibold text-xl ">
                {experience.empresa}
              </p>
              <p className="text-zinc-500 font-semibold ">{experience.data}</p>
            </div>
          </div>

          <p className="text-zinc-300 text-medium mt-4">
            {experience.descricao}
          </p>
        </div>
      ))}
    </section>
  );
}
