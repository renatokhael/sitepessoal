"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ipmmfou", "template_kvgusin", form.current, {
        publicKey: "L0A86yfdX9IXBVnBy",
      })
      .then(
        () => {
          setIsSent(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="w-full  flex flex-col justify-center items-center mt-16 ">
      <div className="bg-zinc-950 p-10 rounded-2xl w-full">
        <h1 className="text-zinc-200 text-3xl tracking-tighter font-bold">
          Vamos criar um projeto juntos?
        </h1>
        <p className="text-zinc-500 text-2xl mt-5 tracking-tighter font-medium ">
          Estou sempre aberto para novos projetos! Se você tem algo em mente,
          <br />
          sinta-se a vontade para entrar em contato comigo para discutir sua
          ideia.
        </p>
      </div>
      {isSent ? (
        <div className="min-h-[400px] flex flex-col justify-center items-center space-y-10">
          <h1 className="text-zinc-200 text-3xl tracking-tighter font-bold">
            Mensagem enviada com sucesso!
          </h1>
          <Image src="/success.svg" alt="success" width={200} height={200} />
        </div>
      ) : (
        <form
          ref={form}
          onSubmit={sendEmail}
          className="container mx-auto flex flex-col space-y-2 mt-10 "
        >
          <input
            type="text"
            name="user_name"
            placeholder="Digite seu nome"
            className="w-full px-6 py-3 border border-zinc-900 bg-zinc-950 rounded-xl text-gray-400  "
          />

          <input
            type="email"
            name="user_email"
            placeholder="Digite seu melhor e-mail"
            className="w-full px-6 py-3 border border-zinc-900 bg-zinc-950 rounded-xl text-gray-400  "
          />

          <textarea
            rows="2"
            name="message"
            placeholder="Deixe sua mensagem"
            className="w-full px-6 py-3 border border-zinc-900 bg-zinc-950 rounded-xl text-gray-400  "
          />
          <button
            type="submit"
            value="Send"
            className="w-full p-3 border border-zinc-900 rounded-xl text-green-400 text-xl font-bold"
          >
            Enviar
          </button>
        </form>
      )}
    </section>
  );
}
