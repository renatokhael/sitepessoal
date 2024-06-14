import Image from "next/image";

export function Hero() {
  return (
    <div className="relative flex flex-col place-items-center  z-[-1]  ">
      <h1 className="text-zinc-200 text-5xl text-center tracking-tighter font-bold">
        Olá! Me chamo Renato Khael. <br />
        Sou um <span className="text-lime-300">Front-End Developer</span>
      </h1>
      <p className="text-zinc-500 text-3xl mt-5 tracking-tighter font-medium text-center">
        Há mais de 10 anos unindo design e código, <br />
        criando produtos web para negócios.
      </p>
      <div className="flex mt-8 gap-4">
        <span className="text-lime-200">
          Disponível para <b>freelance</b>
        </span>{" "}
        -
      </div>
    </div>
  );
}
