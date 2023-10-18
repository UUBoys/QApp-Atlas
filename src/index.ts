import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import typeDefs from "./graphQLTypes/typeDefs";
import authResolver from "./resolvers/authResolver";
import creditResolver from "./resolvers/creditResolver";

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
  app.use(cors(), bodyParser.json(), expressMiddleware(server));
  app.listen({ port: 4000 });
});
