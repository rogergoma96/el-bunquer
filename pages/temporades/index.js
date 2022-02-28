import Head from "next/head";

import { getSeasons } from "../api/seasons";
import client from "../../lib/apollo/apollo";

import SeasonsList from "../../components/pages/SeasonsList/SeasonsList";

import { menuSections } from "../api/menu";

const SeasonsPage = ({ seasons, menuSections }) => (
  <>
    <Head>
      <title>Temporades | El Búnquer</title>
      <meta name="description" content="Temporades del Búnquer" />
    </Head>
    <SeasonsList seasons={seasons} />
  </>
);

export async function getStaticProps() {
  // TODO: MENU
  // TODO: SEO
  const seasonsPromise = getSeasons({ client });
  const seasons = await seasonsPromise;

  return {
    props: {
      seasons,
      menuSections,
    },
    revalidate: 60,
  };
}

export default SeasonsPage;
