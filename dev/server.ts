// A placeholder server for use in development that emulates just the needed
// Github api's to make saving work.

import { ApolloServer, ExpressContext } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer, Config, gql } from "apollo-server-core";
import express from "express";
import http from "http";
import { readFileSync } from "fs";
import path from "path";
import { promises as fs } from "fs";
import { RollCallPDF } from "../src/lib/generate-pdf";
import { fileURLToPath } from "url";

async function startApolloServer(
  typeDefs?: Config<ExpressContext>["typeDefs"],
  resolvers?: Config<ExpressContext>["resolvers"],
) {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

const typeDefs = readFileSync("./dev/github-schema.graphql").toString("utf-8");

const resolvers = {
  Query: {
    repository(_parent: unknown, _args: Record<string, any>) {
      return {};
    },
  },

  Mutation: {
    async createCommitOnBranch(_parent: unknown, args) {
      const additions: { contents: string; path: string }[] = args.input.fileChanges.additions;
      for (const addition of additions) {
        await localWrite(addition);
      }
      await RollCallPDF.generate();
      return {
        commit: {
          url: "commit url",
        },
      };
    },
  },

  Repository: {
    async object(_parent: unknown, { expression }: { expression: string }) {
      return {
        oid: "dev-non-hash",
        text: expression === "local-branch" ? undefined : await localGet(expression.split(":")[1]),
        _type: expression === "local-branch" ? "Commit" : "Blob",
      };
    },
  },

  GitObject: {
    __resolveType(obj: { _type: string }) {
      return obj._type;
    },
  },
};

async function localGet(name: string): Promise<string> {
  const filePath = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", name);
  console.log("Getting: ", filePath);

  const contents = await fs.readFile(filePath);
  return contents.toString("utf-8");
}

async function localWrite({
  contents,
  path: filePath,
}: {
  contents: string;
  path: string;
}): Promise<boolean> {
  console.log("Writing data to: ", filePath);

  try {
    await fs.writeFile(
      path.join(path.dirname(fileURLToPath(import.meta.url)), "..", filePath),
      JSON.stringify(JSON.parse(atob(contents)), null, 2),
      {
        encoding: "utf8",
      },
    );
    return true;
  } catch (e) {
    console.error(`Failed to write ${filePath}`, e);
    return false;
  }
}

startApolloServer(typeDefs, resolvers).catch((e) => console.log("Filed to start GQL server", e));
