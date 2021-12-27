import { gql } from "@apollo/client";

const GET_ALL_EPISODES = gql`
  query getEpisode($episode: String) {
    episodes(filters: { canonicalUrl: { eq: $episode } }) {
      data {
        attributes {
          name
          description
          title
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

export default GET_ALL_EPISODES;
