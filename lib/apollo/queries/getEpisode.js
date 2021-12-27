import { gql } from "@apollo/client";

const GET_EPISODE = gql`
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

export default GET_EPISODE;
