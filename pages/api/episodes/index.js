import GET_ALL_EPISODES from "../../../lib/apollo/queries/getAllEpisodes";
import client from "../../../lib/apollo/apollo";

export const getAllEpisodes = async ({ client }) => {
  const {
    data: {
      episodes: { data: allEpisodes },
    },
  } = await client.query({ query: GET_ALL_EPISODES });

  return allEpisodes;
};

export default async function handler(req, res) {
  const episodes = await getAllEpisodes({ client });

  res.status(200).json(episodes);
}
