import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getAllNotes } from "@/lib/actionsNotes";
import { getUser } from "@/lib/actionsUsers";
import { cn } from "@/lib/utils";
import { FileArchive, FilePenLine, PlusCircle } from "lucide-react";
import Link from "next/link";
import ButtonDelete from "../../_components/ButtonDelete";

export default async function NotesPage() {
  const user = await getUser();
  const notes = await getAllNotes(user?.id as string);

  await new Promise((r) => setTimeout(r, 5000))

  return (
    <section className="grid items-start gap-y-8">
      <div className="flex md:items-center md:justify-between flex-col md:flex-row px-2 gap-4 md:gap-0">
        <div className="grid gap-1">
          <h2 className="text-xl uppercase font-black font-mono">Notes</h2>
          <p className="text-sm text-muted-foreground">
            Don&apos;t lose your ideas, take notes
          </p>
          <div className="w-6 bg-accent-foreground h-[1px]"></div>
        </div>
        <Link
          href={"/dashboard/notes/create"}
          className={cn(buttonVariants({ variant: "secondary" }), `font-light`)}
        >
          Create a note
        </Link>
      </div>

      {notes.length < 1 ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-3">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-orange-600 bg-opacity-20 mb-4">
            <FileArchive className="text-orange-600" />
          </div>
          <p className="text-white">You have no Note</p>
          <p className="text-muted-foreground text-sm">
            Start creating notes now through our app
          </p>
          <Link
            href={"/dashboard/notes/create"}
            className={cn(
              buttonVariants({ variant: "secondary" }),
              `font-light mt-4 flex items-center gap-2`
            )}
          >
            Create a new note
            <PlusCircle size={12} className="mt-1" />
          </Link>
        </div>
      ) : (
        <div className="flex flex-col space-y-4">
          {notes.map((item, index) => (
            <Card key={index} className="flex items-center justify-between p-4">
              <div>
                <h2 className="text-orange-600 font-mono font-bold">
                  {item.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  Written on{" "}
                  {new Intl.DateTimeFormat("en-En", {
                    dateStyle: "medium",
                  }).format(new Date(item.createAt))}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href={`notes/note/${item.id}`}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "bg-orange-600 hover:bg-opacity-80 hover:bg-orange-600 transition-all text-white"
                  )}
                >
                  <FilePenLine size={16} />
                </Link>
                <ButtonDelete id={item.id} />
              </div>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}
