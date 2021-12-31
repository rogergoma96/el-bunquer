import { gql } from "@apollo/client";

const GET_ALL_SEASON_EPISODES = gql`
  query getAllSeasonEpisodes($season: String) {
    episodes(filters: { season: { season: { eq: $season } } }) {
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
          coverImg {
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

export default GET_ALL_SEASON_EPISODES;
