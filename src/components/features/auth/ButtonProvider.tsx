"use client";

import { Button } from "@/components/ui/button";
import { Chrome, Github } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import Loader from "@/components/ui/loader";
import { LogoutButton } from "./LogoutButton";

export default function ButtonProvider() {
  const mutation = useMutation({
    // mutationKey: "signIn",
    mutationFn: async () => signIn(),
    // onSuccess: () => window.location.reload(),
    onError: () => window.location.reload(),
  });

  return (
    <div className="flex flex-col space-y-4">
      <Button variant={"outline"} className="flex gap-4 items-center text-xs">
        <Chrome size={20} />
        Continue with Google
      </Button>
      <Button
        variant={"outline"}
        className="flex gap-4 items-center text-xs"
        disabled={mutation.isPending}
        onClick={() => {
          mutation.mutate();
        }}
      >
        {mutation.isPending ? (
          <Loader className="mr-2" size={12} />
        ) : (
          <Github className="mr-2" size={20} />
        )}
        Continue with Github
      </Button>

      {/* <LogoutButton /> */}
    </div>
  );
}
