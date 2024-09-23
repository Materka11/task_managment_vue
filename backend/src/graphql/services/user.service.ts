import { PrismaClient } from "@prisma/client";
import { extractSelection } from "../utils/extractSelections";
import { GraphQLResolveInfo } from "graphql";

export interface GetUsersArgs {
  info: GraphQLResolveInfo;
}

export interface GetUserArgs extends GetUsersArgs {
  id: string;
}

const prisma = new PrismaClient();

export const getUsers = async ({ info }: GetUsersArgs) => {
  return await prisma.user.findMany();
};

export const getUser = async ({ id, info }: GetUserArgs) => {
  return await prisma.user.findUnique({ where: { id } });
};
