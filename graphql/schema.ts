import { objectType,queryType, makeSchema } from "@nexus/schema";
import { nexusPrisma } from "nexus-plugin-prisma";
import path from "path";
const Post = objectType({
  name: "Post",
  definition(t) {
    t.int("id");
    t.field("createdAt", { type: "DateTime" });
    t.string("title");
    t.string("body");
    t.string("images");
    t.string("username");
    t.int("subredditId");
    t.list.field("comments", { type: "Comment" });
    t.field("subreddit", { type: "Subreddit" });
    t.list.field("votes", { type: "Vote" });
  },
});

const Comment = objectType({
  name: "Comment",
  definition(t) {
    t.int("id");
    t.field("createdAt", { type: "DateTime" });
    t.int("postId");
    t.string("text");
    t.string("username");
    t.field("post", { type: "Post" });
  },
});

const Subreddit = objectType({
  name: "Subreddit",
  definition(t) {
    t.int("id");
    t.field("createdAt", { type: "DateTime" });
    t.string("topic");
    t.list.field("posts", { type: "Post" });
  },
});

const Vote = objectType({
  name: "Vote",
  definition(t) {
    t.int("id");
    t.field("createdAt", { type: "DateTime" });
    t.int("postId");
    t.boolean("upvote");
    t.string("username");
    t.field("post", { type: "Post" });
  },
});

export const schema = makeSchema({
  types: [Post,Comment,Subreddit,Vote],
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    typegen: path.join(process.cwd(), "generated", "nexus-typegen.ts"),
    schema: path.join(process.cwd(), "generated", "schema.graphql"),
  },
  typegenAutoConfig: {
    contextType: "Context.Context",
    sources: [
      {
        source: "@prisma/client",
        alias: "prisma",
      },
      {
        source: path.join(process.cwd(), "graphql", "context.ts"),
        alias: "Context",
      },
    ],
  },
});
