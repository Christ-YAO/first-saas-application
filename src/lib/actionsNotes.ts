"use server";

import { redirect } from "next/navigation";
import { getUser } from "./actionsUsers";
import { prisma } from "./prisma";

export const getAllNotes = async (userId: string) => {
  const notes = await prisma.notes.findMany({
    where: { userId },
    orderBy: {
      createAt: "desc",
    },
  });

  return notes;
};

export const createNote = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const completed = formData.get("completed");
  const user = await getUser();
  const userId = user?.id as string;

  await prisma.notes.create({
    data: {
      userId: userId,
      title: title,
      description: description,
      completed: completed === "on",
    },
  });

  redirect("/dashboard/notes");
};
