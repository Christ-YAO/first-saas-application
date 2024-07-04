"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { prisma } from "./prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const getUser = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    redirect("../");
  }

  const id = session?.user.id as string;

  const user = await prisma.user.findUnique({
    where: { id },
  });

  return user;
};

export const updateUser = async (formData: FormData) => {
  try {
    const userName = formData.get("name") as string;
    const id = formData.get("id") as string;

    if (userName !== null || userName !== "") {
      await prisma.user.update({
        where: { id },
        data: { name: userName },
      });
    }
  } catch (err) {
    console.error("Error updating user:", err);
    throw err;
  } finally {
    revalidatePath("/");
  }
};

export const deleteUser = async () => {
  const session = await getServerSession(authOptions);

  const userId = session?.user.id as string;

  if (!session || !session.user || !session.user.id) {
    redirect("../");
  }

  await prisma.user.deleteMany({
    where: { id: userId },
    // where: { stripeCustomerId: userId },
  });
  await prisma.subscription.deleteMany({
    where: { userId: userId },
  });

  await prisma.session.deleteMany({
    where: { userId: userId },
  });

  await prisma.account.deleteMany({
    where: { userId: userId },
  });

  return redirect("../");
};
