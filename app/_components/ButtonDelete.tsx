"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { deleteNote } from "@/lib/actionsNotes";
import { Trash2 } from "lucide-react";

interface DeleteButtonProps {
  id: string;
}

export default function ButtonDelete({ id }: DeleteButtonProps) {
  return (
    <form action={deleteNote}>
      <Input type="hidden" name="id" value={id} />
      <Button variant={"destructive"} type="submit" className="mt-1">
        <Trash2 size={16} />
      </Button>
    </form>
  );
}
