import { ApolloClient, InMemoryCache } from "@apollo/client";

const GRAPHQL_URL = process.env.GRAPHQL_URL;

const newApolloClient = () =>
  new ApolloClient({
    uri: GRAPHQL_URL,
    cache: new InMemoryCache(),
  });

export default newApolloClient();
