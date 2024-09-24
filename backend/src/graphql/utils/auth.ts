import jwt from "jsonwebtoken";
import env from "./validateEnv";
import { IUser } from "../services/user.service";

export const issueTokens = async ({
  email,
  name,
  occupation,
  surname,
}: IUser) => {
  let token = await jwt.sign(
    { email, name, occupation, surname },
    env.APP_SECRET,
    { expiresIn: "120" }
  );
  let refreshToken = await jwt.sign(
    { email, name, occupation, surname },
    env.APP_REFRESH_SECRET,
    { expiresIn: "2d" }
  );

  return {
    token,
    refreshToken,
  };
};
