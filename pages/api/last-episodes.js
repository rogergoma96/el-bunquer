import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const LAST_EPISODES_QUERY = gql`
  query {
    episodes(sort: "publishedAt:desc", pagination: { limit: 5 }) {
      data {
        attributes {
          name
          description
          title
          pageTitle
          history
          historyImage {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
          coverImg {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
          pageDescription
          youtubeUrl
          canonicalUrl
          name
          publishedAt
          programNumber
        }
      }
    }
  }
`;

export const getLastEpisodes = async ({ client }) => {
  const {
    data: {
      episodes: { data: lastEpisodes },
    },
  } = await client.query({ query: LAST_EPISODES_QUERY });

  return lastEpisodes;
};

export default async function handler(req, res) {
  const client = new ApolloClient({
    uri: "https://el-bunquer-cms.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });
  const lastEpisodes = await getLastEpisodes({ client });

  res.status(200).json(lastEpisodes);
}
