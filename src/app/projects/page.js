import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaHtml5, FaCss3, FaJs } from "react-icons/fa6";

const projects = [
  {
    id: 1,
    name: "DevFocus",
    description: "Temporizador que usa a técnica Pomodoro.",
    image: "/projects/devfocus.png",
    url: "https://devfocus-app.vercel.app/",
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
    description: "Aplicação de presença para grupo Kroton.",
    image: "/projects/gamingloop.png",
    url: "https://gaming-loop-dashboard.vercel.app/",
  },
];

function Card({ name, description, image, url }) {
  return (
    <Link
      href={url}
      className="block w-full rounded-2xl border border-zinc-900 transition-colors hover:bg-zinc-950"
    >
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
    </Link>
  );
}

export default function Projects() {
  return (
    <div className="container mx-auto grid grid-cols-4 gap-4 mt-16 ">
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
  );
}
