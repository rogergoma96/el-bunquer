import { gql } from "@apollo/client";

const GET_SEASONS = gql`
  query getSeasons {
    seasons {
      data {
        attributes {
          season
        }
      }
    }
  }
`;

export default GET_SEASONS;
