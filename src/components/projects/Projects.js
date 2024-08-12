import Card from "../card/Card";
import Section from "../section";

export default function ProjectSection() {
  return (
    <Section>
      <div className="flex items-center">
        <h1 className="text-zinc-200 text-4xl ">
          <span className="text-orange">#</span>projects
        </h1>
        <div class="flex-grow h-px bg-orange mx-4"></div>
        <a href="#" class="text-sm text-white">
          ver tudo &#10230;
        </a>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-16">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Section>
  );
}
