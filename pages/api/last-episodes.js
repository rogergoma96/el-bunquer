import GET_LAST_EPISODES from "../../lib/apollo/queries/getLastEpisodes";
import client from "../../lib/apollo/apollo";

export const getLastEpisodes = async ({ client }) => {
  const {
    data: {
      episodes: { data: lastEpisodes },
    },
  } = await client.query({ query: GET_LAST_EPISODES });

  return lastEpisodes;
};

export default async function handler(req, res) {
  const lastEpisodes = await getLastEpisodes({ client });

  res.status(200).json(lastEpisodes);
}
