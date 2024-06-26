import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import DashboardNav from "../_components/DashboardNav";

export default async function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getAuthSession();

  if (!session) {
    redirect("/");
  }
  return (
    <section className="max-w-[1200px] mx-auto md:flex md:items-center md:gap-4 h-screen w-full mt-2 p-2">
      <DashboardNav />
      <div className="w-full h-ull">{children}</div>
    </section>
  );
}
