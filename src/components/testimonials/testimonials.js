"use client";

import { useState } from "react";
import Image from "next/image";
import Section from "@/components/section";

import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Section>
      <div className="flex items-center">
        <h1 className="text-zinc-200 text-4xl ">
          <span className="text-orange">#</span>testimonials
        </h1>
        <div class="flex-grow h-px bg-orange mx-4"></div>
        <a href="#" class="text-sm text-zinc-400">
          linkedin testimonials &#10230;
        </a>
      </div>

      <div className="relative h-[400px] mt-10 overflow-hidden flex items-center justify-center border-2 border-border">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`absolute transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
              <Image
                src={testimonial.avatar}
                alt={`${testimonial.name}'s avatar`}
                width={100}
                height={100}
                className="rounded-full"
              />
              <h2 className="text-zinc-200 text-2xl mt-4">
                {testimonial.name}
              </h2>
              <h3 className="text-zinc-400 text-lg">{testimonial.position}</h3>
              <p className="text-zinc-500  mt-4 max-w-2xl">
                "{testimonial.description}"
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-5 space-x-4">
        <button
          onClick={prevTestimonial}
          className="px-4 py-2  border-2 border-border text-zinc-200 rounded hover:bg-zinc-600 flex justify-center items-center"
        >
          <FaLongArrowAltLeft className="mr-4" />
          Anterior
        </button>
        <button
          onClick={nextTestimonial}
          className="px-4 py-2 border-2 border-border text-zinc-200 rounded hover:bg-zinc-600 flex justify-center items-center"
        >
          Próximo
          <FaLongArrowAltRight className="ml-4" />
        </button>
      </div>

      <div className="flex justify-center mt-5">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${
              index === currentIndex ? "bg-orange" : "bg-zinc-500"
            }`}
          ></div>
        ))}
      </div>
    </Section>
  );
}

const testimonials = [
  {
    id: 1,
    avatar: "/testimonials/1.jpeg",
    name: "Kincaid Alpero.",
    position: "Gerente Comercial at @The GSI Group",
    description:
      "Renato é um excelente profissional, sempre proativo e disposto a ajudar no que é requerido. Sempre muito bem informado sobre todos processos referente a sua área e com ótimo relacionamento interpessoal na equipe. Seu conhecimento sempre nos ajuda a ter uma resolução rápida e com ótimo resultado.",
  },
  {
    id: 2,
    avatar: "/testimonials/2.jpeg",
    name: "Antonio Roberto Bruno.",
    position: "Representante Comercial at @Uniquimica.",
    description:
      "Renato é uma pessoa muito atenciosa e disposta a cooperar nas soluções de problemas. Trabalhei com ele e posso recomendá-lo com a certeza de que será uma contratação útil para qualquer empresa. ",
  },
  {
    id: 3,
    avatar: "/testimonials/3.jpeg",
    name: "Samuel Fontebasso da Silva.",
    position: "Líder de Tecnologia e Inovação at @Agência Sonora.",
    description:
      "Extremamente comprometido é a frase que me vem a mente quando penso em Renato, aguardando ansiosamente o momento de termos a oportunidade de trabalharmos juntos novamente!",
  },
  {
    id: 4,
    avatar: "/testimonials/4.jpeg",
    name: "Wendell Bitencourt",
    position: "Founder @Stadiebit.",
    description:
      "Ótimo profissional, comprometido, dedicado, eficiente e eficaz!. Como pessoa , um cara sensacional ",
  },
  {
    id: 5,
    avatar: "/testimonials/5.jpeg",
    name: "Thiago de Paulo",
    position: "CEO e Fundador @Cloudesign",
    description:
      "Melhor atendimento e solução completa, não consigo imaginar minha empresa sem o suporte do Renato",
  },
  {
    id: 6,
    avatar: "/testimonials/6.jpeg",
    name: "Arthur Mainardi Jr.",
    position: "CEO e Sócio Fundador @Grupo SOMAI",
    description:
      "Renato é competente, responsável e profissional. Dedicado está sempre buscando o foco do cliente.",
  },
  {
    id: 7,
    avatar: "/testimonials/7.jpeg",
    name: "Fernando Naccari Alves Martins",
    position: "Coordenador de Conteúdo e SEO at @Instacarro",
    description:
      "Profissional atencioso, educado e sempre disposto a resolver os problemas técnicos do site que porventura aparecessem. Sabe o que está fazendo e estou muito para chegar onde chegou.",
  },
  {
    id: 8,
    avatar: "/testimonials/8.jpeg",
    name: "Conrado Vita",
    position: "Growth at @Bee2Pay",
    description:
      "Renato's expertise in front-end development is truly impressive. We couldn't be happier with the results.",
  },
  {
    id: 9,
    avatar: "/testimonials/9.jpeg",
    name: "Conrado Vita",
    position: "CEO of VWX Group",
    description:
      "Renato is a professional you can trust to deliver top-notch work. His dedication to excellence is evident.",
  },
  {
    id: 10,
    avatar: "/testimonials/10.jpeg",
    name: "David L.",
    position: "Head of Technology at YZA Corp.",
    description:
      "From start to finish, Renato was a pleasure to work with. His knowledge and skills are unmatched.",
  },
];
