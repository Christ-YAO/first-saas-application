import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getAllNotes } from "@/lib/actionsNotes";
import { getUser } from "@/lib/actionsUsers";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function NotesPage() {
  const user = await getUser();
  const notes = await getAllNotes(user?.id as string);

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
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-3"></div>
      ) : (
        <div className="flex flex-col space-y-4">
          {notes.map((item, index) => (
            <Card key={index} className="flex items-center justify-between p-4">
              <div>
                <h2 className="text-orange-600 text-xl font-bold">
                  {item.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  Written on{" "}
                  {new Intl.DateTimeFormat("en-En", {
                    dateStyle: "medium",
                  }).format(new Date(item.createAt))}
                </p>
              </div>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}
