"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm("service_ipmmfou", "template_kvgusin", form.current, {
        publicKey: "L0A86yfdX9IXBVnBy",
      })
      .then(
        () => {
          setIsSending(false);
          setIsSent(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <section className="bg-[#0D1117] min-h-[600px] flex justify-center items-center  p-10">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex my-5 container flex-col mx-auto justify-center items-center"
        style={{ width: "100%" }}
      >
        <div className="grid grid-cols-2 gap-5 w-full">
          <input
            type="text"
            name="user_name"
            className="bg-[#003339] w-full h-[50px] rounded-lg p-10 text-xl font-semibold text-zinc-300"
            placeholder="Digite seu nome"
          />
          <input
            type="tel"
            name="user_phone"
            className="bg-[#003339] w-full h-[50px] rounded-lg p-10 text-xl font-semibold text-zinc-300"
            placeholder="Digite seu Whatsapp"
          />
        </div>
        <div className="grid grid-cols-1 w-full mt-5">
          <textarea
            rows="2"
            name="message"
            className="bg-[#003339] w-full h-[200px] rounded-lg p-10 text-xl font-semibold text-zinc-300"
            placeholder="Digite sua mensagem..."
          />
          <button
            type="submit"
            className="h-[100px] flex justify-center items-center bg-[#ff5748] rounded-xl p-10 text-2xl font-bold mt-5"
          >
            {isSending ? "Enviando..." : isSent ? "Enviado" : "Enviar"}
          </button>
        </div>
      </form>
    </section>
  );
}
