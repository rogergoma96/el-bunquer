import Head from "next/head";
import client from "../../../lib/apollo/apollo";

import Layout from "../../../components/common/Layout/Layout";

import { menuSections } from "../../api/menu";
import { getSeasons } from "../../api/seasons";
import { getAllSeasonEpisodes } from "../../api/episodes/[season]";
import SeasonDetail from "../../../components/pages/SeasonDetail/SeasonDetail";

const Season = ({ menu, season, episodes }) => (
  <Layout menuSections={menu}>
    <Head>
      <title>El bunquer | Season</title>
      <meta name="description" content="El bunquer" />
    </Head>
    <SeasonDetail season={season} episodes={episodes} />
  </Layout>
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
  // TODO: Menú

  const episodesPromise = getAllSeasonEpisodes({ client, season });
  const episodes = await episodesPromise;

  return {
    props: {
      season,
      menu: menuSections,
      episodes,
    },
    revalidate: 60,
  };
}

export default Season;
