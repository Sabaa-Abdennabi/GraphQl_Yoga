import { createPubSub, createSchema, createYoga } from "graphql-yoga";
import { createServer } from "http";
import { Cv, Query,Skill, User } from "./resolvers/Query";
import { db } from "./db/database"; // Import db from database.ts
import { Mutation } from './resolvers/Mutation';
const fs = require("fs");
const path = require("path");

// Define the context type
interface Context {
  db: {
    cvs: typeof db.cvs;
    users: typeof db.users;
    skills: typeof db.skills;
  };
}

// Create the schema with the correct context type
export const schema = createSchema({
  typeDefs: fs.readFileSync(
    path.join(__dirname, "schema/schema.graphql"),
    "utf-8"
  ),

  resolvers: {
    Query,
    Skill,
    Cv,
    User,
    Mutation
  },
});

function main() {
  const pubSub = createPubSub();
  const yoga = createYoga({ schema, context: { db,pubSub } }); // Use db as the context
  const server = createServer(yoga);
  server.listen(4000, () => {
    console.info("Server is running on http://localhost:4000/graphql");
  });
}

main();