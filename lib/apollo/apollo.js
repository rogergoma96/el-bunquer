import { ApolloClient, InMemoryCache } from "@apollo/client";

const newApolloClient = () =>
  new ApolloClient({
    uri: process.env.GRAPHQL_URL,
    cache: new InMemoryCache(),
  });

export default newApolloClient();
