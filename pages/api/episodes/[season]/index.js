import GET_ALL_SEASON_EPISODES from "../../../../lib/apollo/queries/getAllSeasonEpisodes";
import apolloClient from "../../../../lib/apollo/apollo";
import { DEFAULT_PAGE_SIZE } from "../../../../components/common/constants/constants";

export const getAllSeasonEpisodes = async ({
  client,
  season,
  pageSize = DEFAULT_PAGE_SIZE,
  page,
}) => {
  const {
    data: {
      episodes: { data: allEpisodes },
    },
  } = await client.query({
    query: GET_ALL_SEASON_EPISODES,
    variables: { season, pageSize, page },
  });

  return allEpisodes;
};

export default async function handler(req, res) {
  const episodes = await getAllSeasonEpisodes({
    client: apolloClient,
    season: req.query.season,
    pageSize: parseInt(req.query.pageSize) || DEFAULT_PAGE_SIZE,
    page: parseInt(req.query.page),
  });

  res.status(200).json(episodes);
}
