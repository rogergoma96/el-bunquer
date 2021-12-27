import { gql } from "@apollo/client";

const GET_LAST_EPISODES = gql`
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

export default GET_LAST_EPISODES;
