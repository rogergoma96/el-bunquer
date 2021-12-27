import GET_EPISODE from "../../../../lib/apollo/queries/getEpisode";
import client from "../../../../lib/apollo/apollo";

export const getEpisodeDetail = async ({ client, episode }) => {
  const {
    data: {
      episodes: { data: episodeDetail },
    },
  } = await client.query({
    query: GET_EPISODE,
    variables: { episode },
  });

  return episodeDetail[0].attributes;
};

export default async function handler(req, res) {
  const episodeDetail = await getEpisodeDetail({
    client,
    episode: req.query.episode,
  });

  res.status(200).json(episodeDetail);
}
