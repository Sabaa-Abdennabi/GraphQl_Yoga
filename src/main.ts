import {  createPubSub, createSchema, createYoga } from "graphql-yoga";
import { createServer } from "http";
import { Query } from "./resolvers/Query";
import { db } from "./db/database"; // Import db from database.ts
import { Mutation } from './resolvers/Mutation';
import path from "path";
import { Subscription } from "./resolvers/Sub";
import { PrismaClient } from '@prisma/client'

const pubSub = createPubSub();
const fs = require("fs");


const prisma = new PrismaClient()

// Create the schema with the correct context type
export const schema = createSchema({
  typeDefs: fs.readFileSync(
    path.join(__dirname, "schema/schema.graphql"),
    "utf-8"
  ),

  resolvers: {
    Query,
    Mutation,
    Subscription,
  },
});

function main() {
  const pubSub = createPubSub();
  const yoga = createYoga({ schema, context: {prisma } }); // Use db as the context
  const server = createServer(yoga);
  server.listen(4000, () => {
    console.info("Server is running on http://localhost:4000/graphql");
  });
}

main();