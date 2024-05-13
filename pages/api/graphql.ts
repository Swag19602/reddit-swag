import { ApolloServer } from "apollo-server-micro";

// we'll create these in a second!
import { schema  } from "../../graphql/schema";
import { createContext } from "./../../graphql/context";
import { ApolloServerPluginUsageReporting } from "apollo-server-core";

const apolloServer = new ApolloServer({
  context: createContext,
  schema,
  plugins: [ApolloServerPluginUsageReporting()],
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({
  path: "/api/graphql",
});
