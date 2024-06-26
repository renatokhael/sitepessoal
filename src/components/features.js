import Link from "next/link";

const featuresDetails = [
  {
    id: 1,
    title: "Projetos",
    description: "Conheça alguns dos meus projetos pessoais.",
    url: "/projects",
  },
  {
    id: 2,
    title: "Sobre",
    description: "Saiba mais sobre mim, como iniciei na programação.",
    url: "/about",
  },
  {
    id: 1,
    title: "Experiências",
    description: "Acompanhe minha trajetória profissional até aqui.",
    url: "/experience",
  },
  {
    id: 1,
    title: "Blog",
    description: "Postagens sobre programação e tecnologia.",
    url: "/blog",
  },
];

export function Features() {
  return (
    <div className="grid text-center  sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {featuresDetails.map((feature) => (
        <Link
          href={feature.url}
          className="group rounded-2xl border border-zinc-900 p-6 transition-colors hover:bg-zinc-950 "
        >
          <h2
            className={`mb-3 text-2xl font-semibold tracking-tighter text-zinc-200 `}
          >
            {feature.title}{" "}
            <span className="text-lime-200 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`m-0 max-w-[30ch] text-lg font-medium text-gray-400 tracking-tighter`}
          >
            {feature.description}
          </p>
        </Link>
      ))}
    </div>
  );
}
