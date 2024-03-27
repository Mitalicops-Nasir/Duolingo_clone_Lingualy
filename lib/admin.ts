import { auth } from "@clerk/nextjs";

const allowedIds = ["user_2dlYcLMdVYJCB7PV5yVD3CO7k12"];

export const IsAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return allowedIds.indexOf(userId) !== -1;
};
