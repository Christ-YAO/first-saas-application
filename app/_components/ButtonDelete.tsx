"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { deleteNote } from "@/lib/actionsNotes";
import { Trash2 } from "lucide-react";
import { toast } from "react-toastify";

interface DeleteButtonProps {
  id: string;
}

export default function ButtonDelete({ id }: DeleteButtonProps) {
  const handleSubmit = async () => {
    try {
      // await deleteNote;
      toast.success("Note successfully deleted!");
    } catch (error) {
      toast.error("Error deleting note!");
    }
  };

  return (
    <form action={deleteNote} onSubmit={handleSubmit}>
      <Input type="hidden" name="id" value={id} />
      <Button variant={"destructive"} type="submit" className="mt-1">
        <Trash2 size={16} />
      </Button>
    </form>
  );
}
