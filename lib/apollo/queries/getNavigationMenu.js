import { gql } from "@apollo/client";

const GET_NAVIGATION_MENU = gql`
  query getNavigationMenu {
    navigations {
      data {
        attributes {
          menu
        }
      }
    }
  }
`;

export default GET_NAVIGATION_MENU;
