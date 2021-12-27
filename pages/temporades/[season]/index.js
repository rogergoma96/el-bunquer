import Head from "next/head";

import Layout from "../../../components/common/Layout/Layout";
import client from "../../../lib/apollo/apollo";

import { menuSections } from "../../api/menu";
import { getSeasons } from "../../api/seasons";

const Season = ({ menuSections, season }) => (
  <Layout menuSections={menuSections}>
    <Head>
      <title>El bunquer | Season</title>
      <meta name="description" content="El bunquer" />
    </Head>
    <p className="text-title-l">Temporada {season}</p>
  </Layout>
);

export async function getStaticPaths() {
  const seasonsPromise = getSeasons({ client });
  const seasons = await seasonsPromise;

  const paths = seasons.map((season) => ({
    params: {
      season: season.attributes.season,
    },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params: { season } }) {
  // TODO: Menú
  // TODO: Get episodes de la temporada

  return {
    props: {
      season,
      menuSections,
    },
    revalidate: 60,
  };
}

export default Season;
