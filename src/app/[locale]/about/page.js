import Image from "next/image";

import Section from "@/components/section";

export default function About() {
  return (
    <Section>
      <div className="flex items-center pt-32">
        <h1 className="text-zinc-200 text-2xl ">
          <span className="text-orange">/</span>
          about
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
        <div className="min-h-[650px] flex flex-col justify-center  ">
          <h1 className="text-zinc-200 text-5xl tracking-tighter max-w-2xl">
            Who am I
          </h1>
          <p className="text-zinc-500 text-2xl mt-5 tracking-tighter font-medium max-w-2xl">
            Hello, i'm Renato Khael!
          </p>
          <p className="text-zinc-500  mt-5 tracking-tighter font-medium max-w-2xl">
            I'm a web designer, front-end and software engineer based in São
            Paulo, Brazil. I can develop responsive webapp from scratch and
            raise them into modern user-friendly web experiences.
          </p>
          <p className="text-zinc-500  mt-5 tracking-tighter font-medium max-w-2xl">
            Transforming my creativity and knowledge into a web applications has
            been my passion for over 10 years. I've been helping various clients
            to stablish their presence online. I always strive to learn about
            the newest technologies and frameworks.
          </p>
        </div>
        <div className="hidden lg:flex justify-end items-end min-h-[650px]  h-full">
          <Image
            src="/about/image-about.svg"
            alt="Hero Background"
            width={600}
            height={600}
          />
        </div>
      </div>
    </Section>
  );
}
