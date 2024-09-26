import { GraphQLResolveInfo } from "graphql";
import {
  getMe,
  getRefreshToken,
  getUser,
  getUsers,
  IGetUserArgs,
  ILoginArgs,
  IRegisterInput,
  login,
  registration,
} from "../services/user.service";

export const usersResolver = {
  Query: {
    users: async (
      _: any,
      args: Record<string, any>,
      { req }: any,
      info: GraphQLResolveInfo
    ) => await getUsers({ req }),

    user: async (
      _: any,
      args: IGetUserArgs,
      { req }: any,
      info: GraphQLResolveInfo
    ) => await getUser({ id: args.id, req }),

    refreshToken: async (
      _: any,
      args: ILoginArgs,
      { req }: any,
      info: GraphQLResolveInfo
    ) => await getRefreshToken(req),
    login: async (
      _: any,
      args: ILoginArgs,
      { req }: any,
      info: GraphQLResolveInfo
    ) => await login(args),
    me: async (
      _: any,
      args: ILoginArgs,
      { req }: any,
      info: GraphQLResolveInfo
    ) => await getMe(req),
  },
  Mutation: {
    register: async (
      _: any,
      args: IRegisterInput,
      { req }: any,
      info: GraphQLResolveInfo
    ) => await registration(args),
  },
};
