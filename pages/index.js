import Head from "next/head";

import client from "../lib/apollo/apollo";

import Home from "../components/pages/Home/Home";

import { getLastEpisodes } from "./api/last-episodes";

const HomePage = ({ lastEpisodes }) => (
  <>
    <Head>
      <title>El Búnquer | Catalunya Ràdio</title>
      <meta
        name="description"
        content="Un programa de denúncia social a través de les notes de veu dels oients, que dona a conèixer els personatges històrics més desgraciats del planeta, la cara B dels llibres d'història, gent que també mereix ser homenatjada. Biografies explicades per en Peyu i teatralitzades per en Jair."
      />
    </Head>
    <Home lastEpisodes={lastEpisodes} />
  </>
);

export async function getStaticProps() {
  const lastEpisodesPromise = getLastEpisodes({ client });
  const lastEpisodes = await lastEpisodesPromise;

  return {
    props: {
      lastEpisodes,
    },
  };
}

export default HomePage;
