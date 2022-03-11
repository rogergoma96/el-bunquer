import Head from "next/head";

import client from "../../../lib/apollo/apollo";

import SeasonDetail from "../../../components/pages/SeasonDetail/SeasonDetail";

import { getSeasons } from "../../api/seasons";
import { getAllSeasonEpisodes } from "../../api/episodes/[season]";

const SeasonPage = ({ season, episodes }) => (
  <>
    <Head>
      <title>Temporada {season} | El bunquer</title>
      <meta name="description" content="El bunquer" />
    </Head>
    <SeasonDetail season={season} episodes={episodes} />
  </>
);

export async function getStaticPaths() {
  const seasons = await getSeasons({ client });

  const paths = seasons.map((season) => ({
    params: {
      season: season.attributes?.season,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { season } }) {
  const episodesPromise = getAllSeasonEpisodes({
    client,
    season,
    page: 1,
  });
  const episodes = await episodesPromise;

  return {
    props: {
      season,
      episodes,
    },
    revalidate: 60,
  };
}

export default SeasonPage;
