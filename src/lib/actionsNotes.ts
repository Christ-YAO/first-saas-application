"use server";

import { redirect } from "next/navigation";
import { getUser } from "./actionsUsers";
import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";

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

export const deleteNote = async (formData: FormData) => {
  const id = formData.get("id") as string;
  await prisma.notes.delete({
    where: { id },
  });

  revalidatePath("/");
  redirect("/");
};

export const getNote = async (id: string) => {
  const note = await prisma.notes.findUnique({
    where: { id },
  });

  return note;
};

export const updateNote = async (formData: FormData) => {
  try {
    const id = formData.get("id") as string;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const completed = formData.get("completed");

    if (
      title !== null ||
      title !== "" ||
      description !== null ||
      description !== ""
    ) {
      await prisma.notes.update({
        where: { id },
        data: {
          title: title,
          description: description,
          completed: completed === "on",
        },
      });
    }
  } catch (e) {
    console.error("Error editing note", e);
    throw new Error("Failed to edit note");
  } finally {
    redirect("/");
  }
};
