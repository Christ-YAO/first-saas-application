import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Ban, CircleChevronLeft } from "lucide-react";

export default function StripePayementCancelPage() {
  return (
    <section className="w-full h-screen pt-20 text-center">
      <Card className="w-[400px] mx-auto p-4 space-y-4">
        <Ban size={40} className="mb-3 text-red-500 text-center w-full" />
        <h1 className="text-xl font-black mb-2 text-center uppercase font-mono">
          Paiement échoué
        </h1>
        <p className="text-muted-foreground text-sm mb-2">
          Vous souscription à échouée
        </p>
        <Button className="w-full bg-orange-600 hover:bg-orange-700 hover:bg-opacity-80 font-mono font-bold transition-all text-white flex items-center gap-1">
          <CircleChevronLeft size={16} /> Retour vers le dashboard
        </Button>
      </Card>
    </section>
  );
}
