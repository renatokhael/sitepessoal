import { Link } from "@/navigation";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Modal({
  isOpen,
  onClose,
  images,
  title,
  longDescription,
  titleMyWork,
  myWork,
  textButton,
  href,
}) {
  if (!isOpen) return null;

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
      <div className="border border-orange bg-gradient-to-r from-[#003339] to-black w-[1366px] min-h-[600px] overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Image Slider */}
        <div className="relative">
          <img
            src={images[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            className="object-cover w-full h-full"
          />
          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange text-white p-2 focus:outline-none"
            aria-label="Previous Image"
          >
            {"<"}
          </button>
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange text-white p-2 focus:outline-none"
            aria-label="Next Image"
          >
            {">"}
          </button>
        </div>
        {/* Right Side - Content */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white">{title}</h2>
              <button
                onClick={onClose}
                className="text-white hover:text-orange focus:outline-none"
                aria-label="Close Modal"
              >
                X
              </button>
            </div>
            <div className="flex items-center my-5">
              <p className="text-zinc-200 text-xl">
                <span className="text-orange">#</span> Resume
              </p>
              <div className="flex-grow h-px bg-orange mx-4"></div>
            </div>
            <p className="mb-6 text-zinc-400">{longDescription}</p>
            <div className="flex items-center my-5">
              <p className="text-zinc-200 text-xl">
                <span className="text-orange">#</span> {titleMyWork}
              </p>
              <div className="flex-grow h-px bg-orange mx-4"></div>
            </div>
            <p className="mb-6 text-zinc-400">{myWork}</p>
          </div>
          <Link
            href={href}
            className="border-4 border-orange py-2 px-4 text-white hover:text-orange hover:font-bold flex justify-center items-center focus:outline-none"
          >
            {textButton}
            <FaArrowRight className="ml-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
