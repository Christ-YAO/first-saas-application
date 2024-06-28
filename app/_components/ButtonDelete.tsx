"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";

interface DeleteButtonProps {
  id: string;
}

export default function ButtonDelete({ id }: DeleteButtonProps) {
  return (
    <form>
      <Input hidden name="id" value={id} />
      <Button variant={"destructive"} type="submit" className="mt-1">
        <Trash2 />
      </Button>
    </form>
  );
}
