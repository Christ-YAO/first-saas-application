import { getAuthSession } from "@/lib/auth";
import Image from "next/image";
import Logo from "/app/icon.png";
import ButtonProvider from "@/components/features/auth/ButtonProvider";
import TypeWriter from "./_components/TypeWriter";
import { Card } from "@/components/ui/card";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getAuthSession();

  if (session) {
    redirect('/dashboard/notes');
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <div className="w-full h-screen flex items-center justify-center flex-col gap-2">
        {/* <Card className="p-4 max-w-[600px] hover:bg-accent/5 transition-all container overflow-auto">
          {JSON.stringify(session, null, 2)}
        </Card> */}
        <Image
          width={100}
          height={100}
          alt="Logo Vercel"
          src={Logo}
          className="mb-4 object-contain bg-accent/50 p-2 rounded-full"
        />
        <h1 className="text-4xl md:text-6xl font-black mb-2 text-center uppercase flex items-center font-mono">
          <TypeWriter />
        </h1>
        <p className="my-2 text-center font-light dark:font-extralight">
          Join a coding adventure 💻.
        </p>
        <ButtonProvider />
      </div>
    </main>
  );
}
