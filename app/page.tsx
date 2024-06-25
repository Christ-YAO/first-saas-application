"use client";

import Image from "next/image";
import Logo from "/public/vercel.svg";
import { Typewriter, Cursor } from "react-simple-typewriter";
import ButtonProvider from "@/components/features/auth/ButtonProvider";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-2">
      <Image
        width={100}
        height={100}
        alt="Logo Vercel"
        src={Logo}
        className="mb-4 object-contain bg-accent p-2 rounded"
      />
      <h1 className="text-4xl md:text-6xl font-black mb-2 text-center uppercase flex items-center font-mono">
        <Typewriter
          typeSpeed={50}
          words={[
            "Bienvenue",
            "Welcome",
            "Willkommen",
            "Vienvenido",
            "Benvenuto",
          ]}
          loop={0}
        />
        <span>
          <Cursor />
        </span>
      </h1>
      <p className="my-2 text-center font-light dark:font-extralight">Rejoignez une aventure de codeur 💻.</p>
      <ButtonProvider />
    </div>
  );
}
