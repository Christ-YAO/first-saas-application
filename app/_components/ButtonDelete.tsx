"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { deleteNote } from "@/lib/actionsNotes";
import { Trash2 } from "lucide-react";
import { toast } from "react-toastify";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { redirect } from "next/navigation";

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
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"destructive"} type="button" className="mt-1">
          <Trash2 size={16} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete this note?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="outline">Cancel</Button>
          </AlertDialogCancel>
          {/* Delete */}
          <form action={deleteNote} onSubmit={handleSubmit}>
            <Input type="hidden" name="id" value={id} />
            <Button
              variant={"destructive"}
              type="submit"
              className="flex gap-1 items-center"
            >
              <Trash2 size={16} /> Delete note
            </Button>
          </form>
          {/* Delete */}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
