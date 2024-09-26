import jwt from "jsonwebtoken";
import env from "./validateEnv";
import { IUser } from "../services/user.service";
import { PrismaClient } from "@prisma/client";
import { AuthenticationError } from "apollo-server-express";

interface IToken {
  id: string;
  email: string;
  name: string;
  occupation: string;
  surname: string;
}

const prisma = new PrismaClient();

export const issueTokens = async ({
  id,
  email,
  name,
  occupation,
  surname,
}: IUser) => {
  let token = await jwt.sign(
    { id, email, name, occupation, surname },
    env.APP_SECRET,
    { expiresIn: "1h" }
  );
  let refreshToken = await jwt.sign(
    { id, email, name, occupation, surname },
    env.APP_REFRESH_SECRET,
    { expiresIn: "2d" }
  );

  return {
    token,
    refreshToken,
  };
};

export const getAuthUser = async (request: any, requiresAuth = false) => {
  const header = request.headers.authorization;

  if (header) {
    const token = jwt.verify(header, env.APP_SECRET) as IToken;
    const id = token.id;

    let authUser = await prisma.user.findUnique({ where: { id } });

    if (!authUser) {
      throw new AuthenticationError(
        "Invalid token, User Authentication failed"
      );
    }

    if (requiresAuth) {
      return authUser;
    }
  }

  return null;
};

export const getRefreshTokenUser = async (request: any) => {
  const header = request.headers.refresh_token;

  if (header) {
    const token = jwt.verify(header, env.APP_REFRESH_SECRET) as IToken;
    const id = token.id;

    let authUser = await prisma.user.findUnique({ where: { id } });

    if (!authUser) {
      throw new AuthenticationError(
        "Invalid refresh token, User Authentication failed"
      );
    }

    return authUser;
  }

  return null;
};
