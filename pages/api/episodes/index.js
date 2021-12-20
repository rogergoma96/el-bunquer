import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const ALL_EPISODES_QUERY = gql`
  query getEpisode($episode: String) {
    episodes(filters: { canonicalUrl: { eq: $episode } }) {
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
          pageDescription
          youtubeUrl
          canonicalUrl
          season {
            data {
              attributes {
                season
              }
            }
          }
          programNumber
        }
      }
    }
  }
`;

export const getAllEpisodes = async ({ client }) => {
  const {
    data: {
      episodes: { data: allEpisodes },
    },
  } = await client.query({ query: ALL_EPISODES_QUERY });

  return allEpisodes;
};

export default async function handler(req, res) {
  const client = new ApolloClient({
    uri: "https://el-bunquer-cms.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });
  const getAllEpisodes = await getAllEpisodes({ client });

  res.status(200).json(getAllEpisodes);
}
