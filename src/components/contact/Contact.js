import { Link } from "@/navigation";
import Section from "../section";
import { useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations("Contact");
  return (
    <Section>
      <div class="flex items-center text-white">
        <h1 className="text-zinc-200 text-4xl ">
          <span className="text-orange">#</span>
          {t("title")}
        </h1>
        <div class="flex-grow h-px bg-orange mx-4"></div>
        <a href="#" class="text-sm text-white">
          06011989 &#10230;
        </a>
      </div>

      <p className="text-zinc-500 text-2xl mt-16 tracking-tighter font-medium  ">
        {t("description")}
      </p>

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
          <input
            type="text"
            placeholder="Nome"
            className="border border-orange bg-transparent py-2 px-5"
          />
          <input
            type="text"
            placeholder="Email"
            className="border border-orange bg-transparent py-2 px-5"
          />
          <input
            type="text"
            placeholder="Telefone/Whatsapp"
            className="border border-orange bg-transparent py-2 px-5"
          />
        </div>
        <div className="grid grid-cols-1 mb-10">
          <textarea
            type="text"
            placeholder="Mensagem"
            rows={5}
            className="border border-orange bg-transparent mt-5 py-2 px-5 h-24"
          />
        </div>
        <Link
          href="#"
          className="mt-4 border-4 border-orange hover:text-orange hover:font-bold py-5 px-10 text-white text-xl"
        >
          Enviar
        </Link>
      </div>
    </Section>
  );
}
