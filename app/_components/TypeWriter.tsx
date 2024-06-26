"use client"

import { Typewriter, Cursor } from "react-simple-typewriter";
export default function TypeWriter() {
  return (
    <>
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
    </>
  );
}
