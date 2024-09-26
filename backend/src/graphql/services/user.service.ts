import { PrismaClient } from "@prisma/client";
import { loginRules, registerRules } from "../utils/userValidators";
import bcrypt from "bcryptjs";
import { getAuthUser, getRefreshTokenUser, issueTokens } from "../utils/auth";
import Joi from "@hapi/joi";

export interface IGetUsersArgs {
  req: any;
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

export interface ILoginArgs {
  email: string;
  password: string;
}

const prisma = new PrismaClient();

export const getUsers = async ({ req }: IGetUsersArgs) => {
  const authUser = await getAuthUser(req, true);
  if (!authUser) {
    return null;
  }
  return await prisma.user.findMany();
};

export const getUser = async ({ id, req }: IGetUserArgs) => {
  const authUser = await getAuthUser(req, true);
  if (!authUser) {
    return null;
  }
  return await prisma.user.findUnique({ where: { id } });
};

export const registration = async ({ input }: IRegisterInput) => {
  await Joi.assert(input, registerRules, { abortEarly: false });

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

export const login = async (args: ILoginArgs) => {
  await Joi.assert(args, loginRules, { abortEarly: false });

  const email = args.email;
  let user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new Error("Username not found");
  }

  let isMatch = await bcrypt.compare(args.password, user.password);

  if (!isMatch) {
    throw new Error("Invalid password");
  }

  let tokens = await issueTokens(user);

  const auth: IAuth = { userId: user.id, user, ...tokens };

  return auth;
};

export const getMe = async (req: any) => await getAuthUser(req, true);

export const getRefreshToken = async (req: any) => {
  const authUser = await getRefreshTokenUser(req);

  if (authUser) {
    const tokens = await issueTokens(authUser);

    return {
      userId: authUser.id,
      user: authUser,
      ...tokens,
    };
  }

  return null;
};
