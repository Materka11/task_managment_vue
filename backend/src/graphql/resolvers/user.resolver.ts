import { GraphQLResolveInfo } from "graphql";
import {
  getUser,
  getUsers,
  IGetUserArgs,
  IRegisterInput,
  postRegister,
} from "../services/user.service";

export const usersResolver = {
  Query: {
    users: async (
      _: any,
      args: Record<string, any>,
      context: any,
      info: GraphQLResolveInfo
    ) => {
      await getUsers({ info });
    },
    user: async (
      _: any,
      args: IGetUserArgs,
      context: any,
      info: GraphQLResolveInfo
    ) => {
      await getUser({ id: args.id, info });
    },
    refreshToken: () => {},
    login: () => {},
  },
  Mutation: {
    register: async (
      _: any,
      args: IRegisterInput,
      { req }: any,
      info: GraphQLResolveInfo
    ) => {
      await postRegister(args);
    },
  },
};
