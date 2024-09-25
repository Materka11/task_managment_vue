import { GraphQLResolveInfo } from "graphql";
import {
  getProfile,
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
      context: any,
      info: GraphQLResolveInfo
    ) => await getUsers({ info }),

    user: async (
      _: any,
      args: IGetUserArgs,
      context: any,
      info: GraphQLResolveInfo
    ) => await getUser({ id: args.id, info }),

    refreshToken: () => {},
    login: async (
      _: any,
      args: ILoginArgs,
      context: any,
      info: GraphQLResolveInfo
    ) => await login(args),
    profile: async (
      _: any,
      args: ILoginArgs,
      { req }: any,
      info: GraphQLResolveInfo
    ) => await getProfile(req),
  },
  Mutation: {
    register: async (
      _: any,
      args: IRegisterInput,
      context: any,
      info: GraphQLResolveInfo
    ) => await registration(args),
  },
};
