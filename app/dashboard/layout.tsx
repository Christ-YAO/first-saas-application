import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import DashboardNav from "../_components/DashboardNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUser } from "@/lib/actionsUsers";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

export default async function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getAuthSession();
  const user = await getUser();

  if (!session) {
    redirect("/");
  }

  if (!user?.stripeCustomerId) {
    const stripeCustomer = await stripe.customers.create({
      email: user?.email as string,
    });

    await prisma.user.update({
      where: { id: user?.id },
      data: { stripeCustomerId: stripeCustomer.id },
    });
  }

  return (
    <section className="max-w-[1200px] mx-auto md:flex md:items-start md:gap-6 gap-4 h-screen w-full mt-2 p-2">
      <DashboardNav />
      <div className="w-full h-full">
        {children}
        <ToastContainer />
      </div>
    </section>
  );
}
