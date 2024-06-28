"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { toast } from "react-toastify";

interface Params {
  description: string;
  completed: boolean;
}

interface UpdateNotePageProps {
  params: Params;
}

export default function UpdateNotePage({ params }: UpdateNotePageProps) {
  const handleSubmit = async () => {
    try {
      // await createNote;
      toast.success("Note successfully created!");
    } catch (error) {
      toast.error("Error creating note!");
    }
  };

  return (
    <Card>
      <form action="" onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>edit note</CardTitle>
          <CardDescription>Quelques mots pour ne pas oublier</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-5">
          <div className="gap-y-2 flex flex-col">
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              name="title"
              id="title"
              placeholder="Note title"
              required
            />
          </div>
          <div className="gap-y-2 flex flex-col">
            <Label htmlFor="description">Description</Label>
            <Textarea
              name="description"
              id="description"
              placeholder="Your Description"
              required
            ></Textarea>
          </div>
          <div className="gap-y-2 flex gap-2">
            <Label htmlFor="completed" className="order-last cursor-pointer">
              Pending | complete
            </Label>
            <Checkbox
              name="completed"
              id="completed"
              className="cursor-pointer"
            />
          </div>
        </CardContent>
        <CardFooter className="space-x-4">
          <Link
            href={"/dashboard/notes"}
            className={cn(buttonVariants({ variant: "destructive" }))}
          >
            Cancel
          </Link>
          <Button
            type="submit"
            className="bg-orange-600 hover:bg-opacity-80 hover:bg-orange-600 transition-all text-white"
          >
            Create note
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}