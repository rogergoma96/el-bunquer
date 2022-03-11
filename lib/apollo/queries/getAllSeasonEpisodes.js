import { gql } from "@apollo/client";

const GET_ALL_SEASON_EPISODES = gql`
  query getAllSeasonEpisodes($season: String, $page: Int, $pageSize: Int) {
    episodes(
      filters: { season: { season: { eq: $season } } }
      pagination: { page: $page, pageSize: $pageSize }
    ) {
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
