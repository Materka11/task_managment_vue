import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { typeDefs, resolvers } from "./graphql";
import env from "./graphql/utils/validateEnv";

dotenv.config();
const app = express();
const port = env.PORT || 3000;

const bootstrapServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: async ({ req }) => ({ req }),
    })
  );

  app.listen(port, () => {
    console.log(`Express ready at http://localhost:${port}/graphql`);
  });
};

bootstrapServer();
