import { useState } from "react";

export default function Modal({
  isOpen,
  onClose,
  images,
  title,
  longDescription,
  myWork,
  textButton,
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
      <div className=" border border-orange bg-gradient-to-r from-[#003339] to-black w-[1280px] min-h-[450px]  overflow-hidden grid grid-cols-2">
        {/* Left Side - Image Slider */}
        <div className="relative">
          <img
            src={images[currentImage]}
            alt="Slide"
            className="object-cover w-full h-full"
          />
          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
          >
            {"<"}
          </button>
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
          >
            {">"}
          </button>
        </div>
        {/* Right Side - Content */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white flex justify-between items-center">
              {title}
              <button
                onClick={onClose}
                className="text-white hover:text-orange"
              >
                x
              </button>
            </h2>
            <p className=" mb-6 text-zinc-400">{longDescription}</p>
            <p className=" mb-6 text-zinc-400 bg-background p-5">{myWork}</p>
          </div>
          <button
            onClick={onClose}
            className="border-4 border-orange py-2 px-4 text-white hover:text-orange "
          >
            {textButton}
          </button>
        </div>
      </div>
    </div>
  );
}
