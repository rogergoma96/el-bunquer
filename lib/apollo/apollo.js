import { ApolloClient, InMemoryCache } from "@apollo/client";

const newApolloClient = () =>
  new ApolloClient({
    uri: `${process.env.STRAPI_API_URL}/graphql`,
    cache: new InMemoryCache(),
  });

export default newApolloClient();
