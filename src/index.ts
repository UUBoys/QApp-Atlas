import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import typeDefs from "./graphQLTypes/typeDefs";
import authResolver from "./resolvers/authResolver";
import creditResolver from "./resolvers/creditResolver";
import { decryptToken } from "./utils/auth";

const resolvers = {
  ...authResolver,
  ...creditResolver,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.start().then(() => {
  const app = express();
  app.use(
    cors(),
    bodyParser.json(),
    expressMiddleware(server, {
      context: async ({ req, res }) => {
        const token = req.headers.authorization;

        if (token === undefined) return;

        const jwtData = decryptToken(token);

        return { user: jwtData };
      },
    })
  );
  app.listen({ port: 8080 });
});
