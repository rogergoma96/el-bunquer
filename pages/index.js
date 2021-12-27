import Head from "next/head";

import client from "../lib/apollo/apollo";

import Layout from "../components/common/Layout/Layout";
import Home from "../components/pages/Home/Home";

import { menuSections } from "./api/menu";
import { getLastEpisodes } from "./api/last-episodes";

const HomePage = ({ menuSections, lastEpisodes }) => (
  <Layout menuSections={menuSections}>
    <Head>
      <title>El Búnquer | Catalunya Ràdio</title>
      <meta
        name="description"
        content="Un programa de denúncia social a través de les notes de veu dels oients, que dona a conèixer els personatges històrics més desgraciats del planeta, la cara B dels llibres d'història, gent que també mereix ser homenatjada. Biografies explicades per en Peyu i teatralitzades per en Jair."
      />
    </Head>
    <Home lastEpisodes={lastEpisodes} />
  </Layout>
);

export async function getStaticProps() {
  // TODO: SEO
  // TODO: MENU
  const lastEpisodesPromise = getLastEpisodes({ client });
  const lastEpisodes = await lastEpisodesPromise;

  return {
    props: {
      menuSections,
      lastEpisodes,
    },
    revalidate: 60,
  };
}

export default HomePage;
