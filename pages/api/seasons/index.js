import GET_SEASONS from "../../../lib/apollo/queries/getSeasons";
import client from "../../../lib/apollo/apollo";

export const getSeasons = async ({ client }) => {
  const {
    data: {
      seasons: { data: seasons },
    },
  } = await client.query({ query: GET_SEASONS });

  return seasons;
};

export default async function handler(req, res) {
  const seasons = await getSeasons({ client });

  res.status(200).json(seasons);
}
