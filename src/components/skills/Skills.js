import Section from "../section";
import Image from "next/image";

export default function SkillSection() {
  const languages = ["HTML", "CSS3", "JavaScript", "TypeScript"];
  const framework = ["React", "Vue.js", "Strapi", "Next", "React Native"];
  const ui_framework = ["Tailwind", "Bootstrap", "Material UI"];
  const tools = ["Webpack", "Vite", "ESBuild", "Jest", "Cypress"];

  function Card({ children, title }) {
    return (
      <div className="flex justify-center items-center">
        <div className="border-2 border-orange min-h-[200px] min-w-[200px]">
          <div className="border-b-2 border-orange p-2">
            <h1 className="text-white">{title}</h1>
          </div>
          <div className="p-2 flex flex-wrap">{children}</div>
        </div>
      </div>
    );
  }

  return (
    <Section>
      <div className="flex items-center">
        <h1 className="text-zinc-200 text-4xl ">
          <span className="text-orange">#</span>skills
        </h1>
        <div class="flex-grow h-px bg-orange mx-4"></div>
        <a href="#" class="text-sm text-white">
          449259 &#10230;
        </a>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16">
        <div className="hidden lg:flex justify-start items-end ">
          <Image
            src="/skills/bg-skills.svg"
            alt="Hero Background"
            width={500}
            height={500}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card title="Linguagens">
            {languages.map((language) => (
              <p className="text-zinc-400 bg-[#01171a] m-2 p-2" key={language}>
                {language}
              </p>
            ))}
          </Card>
          <Card title="Frameworks">
            {framework.map((language) => (
              <p className="text-zinc-400 bg-[#01171a] m-2 p-2" key={language}>
                {language}
              </p>
            ))}
          </Card>
          <Card title="UI Framworks">
            {ui_framework.map((language) => (
              <p className="text-zinc-400 bg-[#01171a] m-2 p-2" key={language}>
                {language}
              </p>
            ))}
          </Card>

          <Card title="Tools">
            {tools.map((language) => (
              <p className="text-zinc-400 bg-[#01171a] m-2 p-2" key={language}>
                {language}
              </p>
            ))}
          </Card>
        </div>
      </div>
    </Section>
  );
}
