const express = require("express");
const app = express();

const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./graphql/TypeDef");
const { resolvers } = require("./graphql/Resolver");

const PORT = 3000;

const serverInstance = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });
};

serverInstance();

app.get("/", (_req, res) => res.status(200).send(`<h1>Hello world</h1>`));

app.listen(PORT, () => console.log(`Node server listening at ${PORT}`));
