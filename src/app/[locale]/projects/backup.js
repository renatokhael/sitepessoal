import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaHtml5, FaCss3, FaJs } from "react-icons/fa6";

const projects = [
  {
    id: 1,
    name: "Kingweb",
    description:
      "Criei o site da minha agência, utilizando Pug, Sass e JavaScript.",
    image: "/projects/kingweb.png",
    url: "https://kingweb.agency",
    techs: ["HTML", "CSS", "JavaScript", "Pomodoro"],
  },
  {
    id: 1,
    name: "Site Spify",
    description:
      "Criei o site da minha agência, utilizando Pug, Sass e JavaScript.",
    image: "/projects/spify.png",
    url: "https://kingweb.agency",
    techs: ["HTML", "CSS", "JavaScript", "Pomodoro"],
  },
  {
    id: 1,
    name: "Site Gendra",
    description:
      "Criei o site da minha agência, utilizando Pug, Sass e JavaScript.",
    image: "/projects/gendra.png",
    url: "https://kingweb.agency",
    techs: ["HTML", "CSS", "JavaScript", "Pomodoro"],
  },
  {
    id: 1,
    name: "VueMoney",
    description: "Projeto criado usando Vue 3 e Pínia",
    image: "/projects/vuemoney.png",
    url: "https://devfocus-app.vercel.app/",
    techs: ["HTML", "CSS", "JavaScript", "Pomodoro"],
  },

  {
    id: 1,
    name: "Hotel Booking",
    description:
      "Projeto criado usando Vue 3, Pínia, e outros recursos avançados.",
    image: "/projects/hotelbooking.png",
    url: "https://devfocus-app.vercel.app/",
    techs: ["HTML", "CSS", "JavaScript", "Pomodoro"],
  },

  {
    id: 1,
    name: "Star Wars",
    description:
      "Projeto criado usando Vue 3, Pínia, e outros recursos avançados.",
    image: "/projects/starwars.png",
    url: "https://devfocus-app.vercel.app/",
    techs: ["HTML", "CSS", "JavaScript", "Pomodoro"],
  },

  {
    id: 1,
    name: "DevFocus",
    description: "Temporizador que usa a técnica Pomodoro.",
    image: "/projects/devfocus.png",
    url: "https://devfocus-app.vercel.app/",
    techs: ["HTML", "CSS", "JavaScript", "Pomodoro"],
  },
  {
    id: 2,
    name: "RedBull Refund",
    description: "Formulário de reembolso para o projeto RedBull.",
    image: "/projects/redbull.png",
    url: "https://redbull-sponsored-reimbursement-form.vercel.app/",
  },
  {
    id: 3,
    name: "Formulário Matrícula",
    description: "Formulário criado para a ONG Todos pela Educação.",
    image: "/projects/escola.png",
    url: "https://todos-pela-educacao-formulario.vercel.app/",
  },
  {
    id: 4,
    name: "Student Attendance",
    description: "Aplicação de presença para grupo Kroton.",
    image: "/projects/anhanguera.png",
    url: "https://student-attendance-application.vercel.app/",
  },
  {
    id: 5,
    name: "Gaming Loop",
    description: "Conceito de interface de usuário para games.",
    image: "/projects/gamingloop.png",
    url: "https://gaming-loop-dashboard.vercel.app/",
  },
];

function Card({ name, description, image, url }) {
  return (
    <div className="max-w-[350px] rounded-2xl bg-[#003339] transition-colors hover:bg-zinc-950">
      <Image
        src={image}
        alt="Vercel Logo"
        width={350}
        height={24}
        priority
        className="rounded-t-2xl"
      />
      <div className="p-6">
        <h2
          className={` text-2xl font-semibold tracking-tighter text-zinc-300`}
        >
          {name}
        </h2>
        <p
          className={`max-w-[30ch] text-lg font-medium text-gray-400 tracking-tighter`}
        >
          {description}
        </p>
      </div>
      <div className="flex justify-between p-5">
        <span className="text-white">GitHub</span>
        <span className="text-white">Deploy</span>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="container mx-auto ">
      <div className="bg-[#003339] h-[500px] p-10 rounded-2xl m-10 flex justify-center items-center">
        <h1 className="text-zinc-200 text-5xl text-center tracking-tighter">
          Alguns de meus projetos aberto <br />
          disponíveis no <span className="text-[#9FF9CC]">GitHub</span>
        </h1>
      </div>

      <div className="mt-[-100px] container mx-auto m-20 flex justify-center items-center">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <Card
              name={project.name}
              description={project.description}
              image={project.image}
              url={project.url}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
