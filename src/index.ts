import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import authResolver from "./resolvers/authResolver";
import creditResolver from "./resolvers/creditResolver";
import establishmentResolver from "./resolvers/establishmentResolver";
import { decryptToken } from "./utils/auth";
import logger from "./logger/log";
import { Resolvers } from "./graphQLTypes/resolvers-types";

import { readFileSync } from "fs";

const typeDefs = readFileSync("./src/graphQLTypes/schema.graphql", "utf8");

const resolvers: Resolvers = {
  Establishment: {
    ...establishmentResolver.Establishment,
  },
  Mutation: {
    ...authResolver.Mutation,
    ...creditResolver.Mutation,
    ...establishmentResolver.Mutation,
  },
  Query: {
    ...creditResolver.Query,
    ...establishmentResolver.Query,
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
  app.listen({ port: 8080 }, () => {
    logger.info(`🚀 Server ready at http://localhost:8080/graphql` );
  });
});
