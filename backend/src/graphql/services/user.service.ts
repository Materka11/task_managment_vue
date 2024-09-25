import { PrismaClient } from "@prisma/client";
import { extractSelection } from "../utils/extractSelections";
import { GraphQLResolveInfo } from "graphql";
import { registerValidation } from "../utils/userValidators";
import bcrypt from "bcryptjs";
import { issueTokens } from "../utils/auth";

export interface IGetUsersArgs {
  info: GraphQLResolveInfo;
}

export interface IGetUserArgs extends IGetUsersArgs {
  id: string;
}

export interface IUserArgs {
  email: string;
  name: string;
  surname: string;
  occupation: string;
  password: string;
}

export interface IRegisterInput {
  input: IUserArgs;
}

export interface IUser {
  id: string;
  email: string;
  name: string;
  surname: string;
  occupation: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAuth {
  userId: string;
  user: IUser;
  token: string;
  refreshToken: string;
}

const prisma = new PrismaClient();

export const getUsers = async ({ info }: IGetUsersArgs) => {
  return await prisma.user.findMany();
};

export const getUser = async ({ id, info }: IGetUserArgs) => {
  return await prisma.user.findUnique({ where: { id } });
};

export const postRegister = async ({ input }: IRegisterInput) => {
  await registerValidation.validateAsync(input, { abortEarly: true });

  const email = input.email;
  let user = await prisma.user.findUnique({ where: { email } });

  if (user) {
    throw new Error("Email is already taken");
  }

  input.password = await bcrypt.hash(input.password, 10);
  let newUser = await prisma.user.create({ data: input });

  let tokens = await issueTokens(newUser);

  await prisma.auth.create({
    data: {
      userId: newUser.id,
      ...tokens,
    },
  });

  const auth: IAuth = { userId: newUser.id, user: newUser, ...tokens };

  return auth;
};
