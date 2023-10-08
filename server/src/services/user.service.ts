import { User } from "@prisma/client";
import db from "../utils/db";

export const createUser = async (user: Pick<User, "email" | "username">) => {
  return await db.user.create({
    data: user,
  });
};

export const getUserById = async (id: string) => {
  return await db.user.findUnique({
    where: {
      id,
    },
  });
};

export const getUserByEmail = async (email: string) => {
  return await db.user.findUnique({
    where: {
      email,
    },
  });
};
