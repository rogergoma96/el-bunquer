import GET_ALL_SEASON_EPISODES from "../../../../lib/apollo/queries/getAllSeasonEpisodes";
import client from "../../../../lib/apollo/apollo";

export const getAllSeasonEpisodes = async ({ client, season }) => {
  const {
    data: {
      episodes: { data: allEpisodes },
    },
  } = await client.query({
    query: GET_ALL_SEASON_EPISODES,
    variables: { season },
  });

  return allEpisodes;
};

export default async function handler(req, res) {
  const episodes = await getAllSeasonEpisodes({
    client,
    season: req.query.season,
  });

  res.status(200).json(episodes);
}
