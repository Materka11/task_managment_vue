import { GraphQLResolveInfo } from "graphql";
import { getUser, getUsers, GetUserArgs } from "../services/user.service";

export const usersResolver = {
  Query: {
    async users(
      _: any,
      args: Record<string, any>,
      context: any,
      info: GraphQLResolveInfo
    ) {
      return await getUsers({ info });
    },
    async user(
      _: any,
      args: GetUserArgs,
      context: any,
      info: GraphQLResolveInfo
    ) {
      return await getUser({ id: args.id, info });
    },
  },
  Mutation: {},
};
