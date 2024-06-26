// src/components/layout/Header.
import Link from "next/link";
import { ThemeToggle } from "../theme/ThemeToggle";
import Image from "next/image";
import Logo from "/app/icon.png";
import { AuthButton } from "../features/auth/AuthButton";
import { getAuthSession } from "@/lib/auth";

export async function Header() {
  const session = await getAuthSession();
  return (
    <nav className="max-w-[1200px] w-full mx-auto h-[70px] flex items-center justify-between p-5 border-b border-b-accent">
      <div className="">
        <Link href={"/"}>
          <Image
            height={100}
            width={50}
            src={Logo}
            alt="Logo Nextjs"
            className="hover:bg-accent/50 p-2 rounded-full transition-all"
          />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {session?.user ? (<AuthButton />) : null}
        <ThemeToggle />
      </div>
    </nav>
  );
}
