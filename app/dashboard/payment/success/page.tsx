import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BadgeCheck, CircleChevronLeft } from "lucide-react";

export default function StripePaymentSuccessPage() {
  return (
    <section className="w-full h-screen pt-20 text-center">
      <Card className="w-[400px] mx-auto p-4 space-y-4">
        <BadgeCheck size={40} className="mb-3 text-green-500 text-center w-full" />
        <h1 className="text-xl font-black mb-2 text-center uppercase font-mono">
          Paiement réussi
        </h1>
        <p className="text-muted-foreground text-sm mb-2">
          Vous êtes maintenant membre premium
        </p>
        <Button className="w-full bg-orange-600 hover:bg-orange-700 hover:bg-opacity-80 font-mono font-bold transition-all text-white flex items-center gap-1">
          <CircleChevronLeft size={16} /> Retour vers le dashboard
        </Button>
      </Card>
    </section>
  );
}
