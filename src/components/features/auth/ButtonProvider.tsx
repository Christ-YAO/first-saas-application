import { Button } from "@/components/ui/button";
import { Chrome, Github } from "lucide-react";

export default function ButtonProvider() {
  return (
    <div className="flex flex-col space-y-4">
      <Button variant={"outline"} className="flex gap-4 items-center text-xs"><Chrome size={20} />Continuer avec Google</Button>
      <Button variant={"outline"} className="flex gap-4 items-center text-xs"><Github size={20} />Continuer avec Github</Button>
    </div>
  );
}
