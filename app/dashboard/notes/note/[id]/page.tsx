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
import { getNote, updateNote } from "@/lib/actionsNotes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { redirect } from "next/navigation";

interface Params {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface UpdateNotePageProps {
  params: Params;
}

export default async function UpdateNotePage({ params }: UpdateNotePageProps) {

  const note = await getNote(params.id)

  if (!note) {
    redirect('/dashboard/notes')
  }

  return (
    <Card>
      <form action={updateNote}>
      <Input type="hidden" name="id" value={note?.id} />

        <CardHeader>
          <CardTitle>edit note</CardTitle>
          <CardDescription>A few words so as not to forget</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-5">
          <div className="gap-y-2 flex flex-col">
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              name="title"
              id="title"
              defaultValue={note?.title as string}
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
              defaultValue={note?.description as string}
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
              defaultChecked={note?.completed as boolean}
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
            Edit note
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
