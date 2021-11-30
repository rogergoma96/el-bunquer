import Head from "next/head";
import Layout from "../components/common/Layout/Layout";

import Home from "../components/pages/Home/Home";
import { getLastEpisodes, getMenuSections } from "../services";

const HomePage = ({ menuSections, lastEpisodes }) => (
  <Layout menuSections={menuSections}>
    <Head>
      <title>El Búnquer</title>
      <meta name="description" content="El bunquer" />
    </Head>
    <Home lastEpisodes={lastEpisodes} />
  </Layout>
);

export async function getStaticProps() {
  const menuSectionsPromise = getMenuSections();
  const lastEpisodesPromise = getLastEpisodes();
  const menuSections = await menuSectionsPromise;
  const lastEpisodes = await lastEpisodesPromise;

  return {
    props: {
      menuSections,
      lastEpisodes,
    },
  };
}

export default HomePage;
