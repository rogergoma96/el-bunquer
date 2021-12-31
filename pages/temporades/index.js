import Head from "next/head";

import { getSeasons } from "../api/seasons";
import client from "../../lib/apollo/apollo";

import Layout from "../../components/common/Layout/Layout";
import SeasonsList from "../../components/pages/SeasonsList/SeasonsList";

import { menuSections } from "../api/menu";

const Seasons = ({ seasons, menuSections }) => (
  <Layout menuSections={menuSections}>
    <Head>
      <title>Temporades | El Búnquer</title>
      <meta name="description" content="Temporades del Búnquer" />
    </Head>
    <SeasonsList seasons={seasons} />
  </Layout>
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

export default Seasons;
