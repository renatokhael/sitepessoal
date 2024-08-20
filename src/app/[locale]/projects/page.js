import Section from "@/components/section";
import Image from "next/image";

function Card({ name, description, image, url }) {
  return (
    <div className="w-full max-w-full border-2 border-orange transition-colors ">
      <Image
        src={image}
        alt={name}
        width={350}
        height={24}
        priority
        className="w-full" // Adicione esta classe para garantir que a imagem ocupe 100% da largura
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold tracking-tighter text-zinc-300">
          {name}
        </h2>
        <p className="max-w-[30ch]  font-medium text-gray-400 tracking-tighter">
          {description}
        </p>
      </div>
      <div className="flex justify-between p-5">
        <span className="text-white">GitHub</span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange hover:text-white"
        >
          Deploy
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "The Alien Guide",
      description:
        "I'm creating the largest catalog of alien races on the internet.",
      image: "/projects/alienguide.png",
      url: "https://thealiensguide-fcuu.vercel.app/",
      techs: ["React", "Next", "Tailwind"],
    },
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
      id: 2,
      name: "Site Spify",
      description:
        "Criei o site da minha agência, utilizando Pug, Sass e JavaScript.",
      image: "/projects/spify.png",
      url: "https://spify.app",
      techs: ["HTML", "CSS", "JavaScript", "Pomodoro"],
    },
    {
      id: 3,
      name: "Site Gendra",
      description:
        "Criei o site da minha agência, utilizando Pug, Sass e JavaScript.",
      image: "/projects/gendra.png",
      url: "https://gendra.com.br",
      techs: ["HTML", "CSS", "JavaScript", "Pomodoro"],
    },
    {
      id: 4,
      name: "VueMoney",
      description: "Projeto criado usando Vue 3 e Pínia",
      image: "/projects/vuemoney.png",
      url: "https://vue-money-nu.vercel.app/",
      techs: ["HTML", "CSS", "JavaScript", "Pomodoro"],
    },

    {
      id: 5,
      name: "Hotel Booking",
      description:
        "Projeto criado usando Vue 3, Pínia, e outros recursos avançados.",
      image: "/projects/hotelbooking.png",
      url: "https://github.com/renatokhael/challenge-hotel-booking-ntconsult",
      techs: ["HTML", "CSS", "JavaScript", "Pomodoro"],
    },

    {
      id: 6,
      name: "Star Wars",
      description:
        "Projeto criado usando Vue 3, Pínia, e outros recursos avançados.",
      image: "/projects/starwars.png",
      url: "https://devfocus-app.vercel.app/",
      techs: ["HTML", "CSS", "JavaScript", "Pomodoro"],
    },

    {
      id: 7,
      name: "DevFocus",
      description: "Temporizador que usa a técnica Pomodoro.",
      image: "/projects/devfocus.png",
      url: "https://devfocus-app.vercel.app/",
      techs: ["HTML", "CSS", "JavaScript", "Pomodoro"],
    },
    {
      id: 8,
      name: "RedBull Refund",
      description: "Formulário de reembolso para o projeto RedBull.",
      image: "/projects/redbull.png",
      url: "https://redbull-sponsored-reimbursement-form.vercel.app/",
    },
    {
      id: 9,
      name: "Formulário Matrícula",
      description: "Formulário criado para a ONG Todos pela Educação.",
      image: "/projects/escola.png",
      url: "https://todos-pela-educacao-formulario.vercel.app/",
    },
    {
      id: 10,
      name: "Student Attendance",
      description: "Aplicação de presença para grupo Kroton.",
      image: "/projects/anhanguera.png",
      url: "https://student-attendance-application.vercel.app/",
    },
    {
      id: 11,
      name: "Gaming Loop",
      description: "Conceito de interface de usuário para games.",
      image: "/projects/gamingloop.png",
      url: "https://gaming-loop-dashboard.vercel.app/",
    },
  ];

  return (
    <Section>
      <div className="flex items-center pt-32">
        <h1 className="text-zinc-200 text-2xl">
          <span className="text-orange">/</span>
          projects
        </h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
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
    </Section>
  );
}
