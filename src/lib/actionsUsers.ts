"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { prisma } from "./prisma";
import { redirect } from "next/navigation";

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
