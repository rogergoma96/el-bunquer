import GET_NAVIGATION_MENU from "../../lib/apollo/queries/getNavigationMenu";
import client from "../../lib/apollo/apollo";

export const getNavigationMenu = async ({ client }) => {
  const { data } = await client.query({ query: GET_NAVIGATION_MENU });

  return data.navigations.data[0].attributes.menu;
};

export default async function handler(req, res) {
  const navigationMenu = await getNavigationMenu({ client });

  res.status(200).json(navigationMenu);
}
