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
    <section className="mt-16 container mx-auto ">
      <div className="bg-zinc-950 p-10 rounded-2xl w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="p-0 sm:p-10">
            <Image
              src="/kingweb.svg"
              alt="Vercel Logo"
              width={250}
              height={24}
              priority
              className="rounded-t-2xl"
            />
            <h1 className="text-2xl font-semibold tracking-tighter text-zinc-300">
              Kingweb - Criação de sites
            </h1>
            <p className=" text-lg font-medium text-gray-400 tracking-tighter mt-4 mb-5">
              Tenho uma agência focada em criação de sites. Com minha expertise,
              ajudo empresas e negócios a alcançarem seus objetivos. Focando em
              conversão e SEO. Atualmente, mais de 15 clientes confiam no meu
              trabalho.
            </p>
            <Link
              href="https://kingweb.agency/"
              className="text-white font-bold"
            >
              Conheça o projeto -&gt;
            </Link>
          </div>
          <div className="p-0 sm:p-10">
            <Image
              src="/listacar.svg"
              alt="Vercel Logo"
              width={350}
              height={24}
              priority
              className="rounded-t-2xl"
            />
            <h1 className="text-2xl font-semibold tracking-tighter text-zinc-300">
              ListaCar - Catálogo de veículos online
            </h1>
            <p className=" text-lg font-medium text-gray-400 tracking-tighter mt-4 mb-5">
              Sou Co-Fundador da ListaCar. Estamos transformando a maneira como
              lojistas e concessionárias vendem seus veículos. Com nosso portal
              de catálogo de veículos online, visamos aumentar a visibilidade e
              atrair novos clientes de forma mais eficaz
            </p>
            <Link
              href="https://listacar.com.br/"
              className="text-white font-bold"
            >
              Conheça o projeto -&gt;
            </Link>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-semibold tracking-tighter text-zinc-300 mt-16">
        Projetos de código aberto!
      </h1>
      <p className=" text-lg font-medium text-gray-400 tracking-tighter mt-4">
        Alguns projetos abertos do meu github, usando apenas HTML, CSS e
        JavaScript puro (VanillaJS). Infelizmente grande parte dos meus projetos
        são trabalhos privados, mas sempre que eu puder compartilhar algo, vou
        colocar aqui.
      </p>
      <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 ">
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
    </section>
  );
}
