"use client";
import { FaArrowRight } from "react-icons/fa";
import Modal from "../modal/Modal";
import { useState } from "react";

export default function Card({
  images,
  image,
  title,
  shortDescription,
  longDescription,
  myWork,
  textButton,
  href,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        longDescription={longDescription}
        myWork={myWork}
        images={images}
        textButton={textButton}
        href={href}
      />
      <div className="border-2 border-orange min-h-[400px] min-w-[300px] flex flex-col">
        <div className="h-[200px] bg-zinc-900 flex-shrink-0">
          <img src={image} className="w-full h-full object-cover" />
        </div>

        <div className="p-5 flex-grow">
          <h1 className="text-white tracking-tighter">{title}</h1>
          <p className="text-zinc-400 mt-2 tracking-tighter">
            {shortDescription}
          </p>
        </div>
        <div className="border-t-2  border-orange h-[48px] flex justify-center items-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-white flex justify-center items-center tracking-tighter hover:text-orange"
          >
            Veja o projeto
            <FaArrowRight className="ml-4" />
          </button>
        </div>
      </div>
    </>
  );
}
