import Logo from "/app/favicon.ico";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="max-w-[1200px] w-full mx-auto h-[80px] flex items-center justify-between p-5 border-b border-b-accent fixed z-20 top-0">
      <div className="">
        <Link href={"/"}>
          <Image
            height={30}
            width={35}
            src={Logo}
            alt="Logo Nextjs"
            className=" dark:bg-white p-[1px] rounded-full"
          />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </nav>
  );
}
