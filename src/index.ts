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
  Mutation: {
    ...authResolver.Mutation,
    ...creditResolver.Mutation,
  },
  Query: {
    ...creditResolver.Query,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  includeStacktraceInErrorResponses: false,
});

server.start().then(() => {
  const app = express();
  app.use(
    cors(),
    bodyParser.json(),
    expressMiddleware(server, {
      context: async ({ req, res }) => {
        const token = req.headers.authorization;

        if (token === undefined) return { user: null };

        const jwtData = decryptToken(token);

        return { user: jwtData };
      },
    })
  );
  app.listen({ port: 8080 });
});
