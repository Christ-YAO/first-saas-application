import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  createCustomerPortal,
  createSubscription,
  getDataStripeUser,
} from "@/lib/actionsStripe";
import { getUser } from "@/lib/actionsUsers";
import { CheckCircle, CreditCard, Euro } from "lucide-react";
import Image from "next/image";

export default async function PaymentPage() {
  const user = await getUser();

  const dataStripe = await getDataStripeUser(user?.id as string);

  const itemsPremium = [
    { name: "Hébergement web fiable et sécurisé" },
    { name: "Conception Responsive et Conviviale" },
    { name: "Fonctionnalités Avancées" },
    { name: "Support Technique et Mises à jour" },
  ];

  if (dataStripe?.status === "active") {
    return (
      <div className="max-w-lg mx-auto space-y-4 my-3">
        <Card className="flex flex-col justify-center items-center">
          <CardContent className="py-8">
            <div className="flex flex-col items-center">
              <h3 className="text-md font-black uppercase bg-orange-900 bg-opacity-20 text-orange-600 p-3 rounded-md inline font-mono">
                premium pass
              </h3>
              <p className="mt-4 text-sm text-muted-foreground">
                Modifier votre abonnement premium
              </p>
              <Image
                src={"/badge.png"}
                width={100}
                height={100}
                alt="badge"
                className="block my-4"
              />
              <form action={createCustomerPortal} className="w-full">
                <Button
                  className="bg-orange-600 hover:bg-orange-700 hover:bg-opacity-80 font-mono font-bold transition-all text-white flex items-center gap-1 w-full"
                  type="submit"
                >
                  <CreditCard size={16} /> Sauvegarder les modifications
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto space-y-4 mt-3">
      <Card className="flex flex-col">
        <CardContent className="py-8">
          <div>
            <h3 className="text-md font-black uppercase bg-orange-900 bg-opacity-20 text-orange-600 p-3 rounded-md inline font-mono">
              premium pass
            </h3>
          </div>
          <div className="mt-4 text-4xl font-black font-mono">
            <span>19,99€</span>{" "}
            <span className="text-sm text-muted-foreground">/month</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Découvrez les plaisirs exclusifs su dévéloppement web Premium avec
            notre pass premieum et profitez d&apos;une expérience unique !
          </p>
          <div className="flex-1 flex flex-col justify-between px-6 py-4 bg-accent/50 rounded-lg m-1 space-y-6 p-3 mt-4">
            <ul className="space-y-3">
              {itemsPremium.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-muted-foreground text-sm"
                >
                  <CheckCircle size={16} className="text-orange-600" />
                  {item.name}
                </li>
              ))}
            </ul>
            <form action={createSubscription} className="w-full mt-4">
              <Button className="bg-orange-600 hover:bg-orange-700 hover:bg-opacity-80 font-mono font-bold transition-all text-white flex items-center gap-1">
                <Euro size={16} /> Become a premium member
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
