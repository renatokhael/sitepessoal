"use client";
import { useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Section from "@/components/section";
import { Link } from "@/navigation";

export default function AboutPageCertificationsSlide({ text }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 4;

  const images = [
    "/certificates/1.jpg",
    "/certificates/2.jpg",
    "/certificates/3.jpg",
    "/certificates/4.jpg",
    "/certificates/5.jpg",
    "/certificates/6.jpg",
    "/certificates/7.jpg",
    "/certificates/9.jpg",
  ];

  function handleNext() {
    if (currentIndex + imagesPerPage < images.length) {
      setCurrentIndex(currentIndex + imagesPerPage);
    }
  }

  function handlePrev() {
    if (currentIndex - imagesPerPage >= 0) {
      setCurrentIndex(currentIndex - imagesPerPage);
    }
  }

  return (
    <Section>
      <div className="flex items-center">
        <h1 className="text-zinc-200 text-4xl tracking-tighter">
          <span className="text-orange">#</span>never stop learning
        </h1>
        <div className="flex-grow h-px bg-orange mx-4"></div>
        <Link href="/projects" className="text-sm text-white">
          View All &#10230;
        </Link>
      </div>
      <div>
        <p className="text-zinc-500 text-2xl mt-16 tracking-tighter font-medium  ">
          I believe that continuous learning is essential, which is why I am
          always updating myself in the area, participating in immersions and
          main bootcamps in Brazil.
        </p>
      </div>
      <div className="relative mt-16">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange text-white p-2"
        >
          <FaArrowLeft size={24} />
        </button>
        <div className="flex overflow-hidden">
          {images
            .slice(currentIndex, currentIndex + imagesPerPage)
            .map((image, index) => (
              <div key={index} className="flex-1 px-2">
                <Image
                  src={image}
                  alt={`Slide ${index}`}
                  width={400}
                  height={250}
                  layout="fixed"
                  className="object-cover w-[400px] h-[250px]"
                />
              </div>
            ))}
        </div>
        <button
          onClick={handleNext}
          disabled={currentIndex + imagesPerPage >= images.length}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange text-white p-2"
        >
          <FaArrowRight size={24} />
        </button>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="min-w-[200px] mt-10 border-4 mx-10 border-orange p-4 text-white hover:text-orange hover:font-bold text-xl flex justify-center items-center"
        >
          <FaArrowLeft />
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex + imagesPerPage >= images.length}
          className="min-w-[200px] mt-10 border-4 border-orange p-4 text-white hover:text-orange hover:font-bold text-xl flex justify-center items-center"
        >
          Next
          <FaArrowRight />
        </button>
      </div>
    </Section>
  );
}
