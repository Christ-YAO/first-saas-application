import { getAuthSession } from "@/lib/auth";
import Image from "next/image";
import Logo from "/public/vercel.svg";
import ButtonProvider from "@/components/features/auth/ButtonProvider";
import TypeWriter from "./_components/TypeWriter";

export default async function Home() {
  const session = await getAuthSession()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <div className="w-full h-screen flex items-center justify-center flex-col gap-2">
      <p>{JSON.stringify(session, null, 2)}</p>
      <Image
        width={100}
        height={100}
        alt="Logo Vercel"
        src={Logo}
        className="mb-4 object-contain bg-accent p-2 rounded"
      />
      <h1 className="text-4xl md:text-6xl font-black mb-2 text-center uppercase flex items-center font-mono">
        <TypeWriter />
      </h1>
      <p className="my-2 text-center font-light dark:font-extralight">Rejoignez une aventure de codeur 💻.</p>
      <ButtonProvider />
    </div>
    </main>
  );
}
