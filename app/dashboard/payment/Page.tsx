import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function PaymentPage() {
  const itemsPremium = [
    { name: "Hébergement web fiable et sécurisé" },
    { name: "Conception Responsive et Conviviale" },
    { name: "Fonctionnalités Avancées" },
    { name: "Support Technique et Mises à jour" },
  ];
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
            <form action="" className="w-full mt-4">
              <Button className="bg-orange-600 hover:bg-orange-700 hover:bg-opacity-80 font-mono font-bold transition-all text-white">
                Become a premium member
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
