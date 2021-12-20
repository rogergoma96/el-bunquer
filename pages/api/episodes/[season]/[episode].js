import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const EPISODE_DETAIL_QUERY = gql`
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

export const getEpisodeDetail = async ({ client, episode }) => {
  const {
    data: {
      episodes: { data: episodeDetail },
    },
  } = await client.query({
    query: EPISODE_DETAIL_QUERY,
    variables: { episode },
  });

  return episodeDetail;
};

export default async function handler(req, res) {
  const client = new ApolloClient({
    uri: "https://el-bunquer-cms.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });
  const episodeDetail = await getEpisodeDetail({
    client,
    episode: req.query.episode,
  });

  res.status(200).json(episodeDetail);
}
