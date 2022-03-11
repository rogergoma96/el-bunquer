import Head from "next/head";

import { getSeasons } from "../api/seasons";
import client from "../../lib/apollo/apollo";

import SeasonsList from "../../components/pages/SeasonsList/SeasonsList";

const SeasonsPage = ({ seasons }) => (
  <>
    <Head>
      <title>Temporades | El Búnquer</title>
      <meta name="description" content="Temporades del Búnquer" />
    </Head>
    <SeasonsList seasons={seasons} />
  </>
);

export async function getStaticProps() {
  const seasonsPromise = getSeasons({ client });
  const seasons = await seasonsPromise;

  return {
    props: {
      seasons,
    },
    revalidate: 60,
  };
}

export default SeasonsPage;
