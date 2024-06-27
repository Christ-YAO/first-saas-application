import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NotesPage() {
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
    </section>
  );
}
