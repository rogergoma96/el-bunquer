import Head from "next/head";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import Layout from "../../../components/common/Layout/Layout";
import EpisodeDetail from "../../../components/pages/EpisodeDetail/EpisodeDetail";

import { menuSections } from "../../api/menu";
import { getLastEpisodes } from "../../api/last-episodes";
import { getEpisodeDetail } from "../../api/episodes/[season]/[episode]";
import { getAllEpisodes } from "../../api/episodes";

const EpisodeDetailPage = ({ menuSections, episodeDetail, lastEpisodes }) => (
  <Layout menuSections={menuSections}>
    <Head>
      <title>{episodeDetail.pageTitle}</title>
      <meta name="description" content={episodeDetail.pageDescription} />
    </Head>
    <EpisodeDetail lastEpisodes={lastEpisodes} episodeDetail={episodeDetail} />
  </Layout>
);

export async function getStaticPaths() {
  const client = new ApolloClient({
    uri: "https://el-bunquer-cms.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });

  const allEpisodes = await getAllEpisodes({ client });
  const paths = allEpisodes.map((episode) => ({
    params: {
      episode: episode.attributes.canonicalUrl,
      season: episode.attributes?.season?.data.attributes?.season,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { episode } }) {
  const client = new ApolloClient({
    uri: "https://el-bunquer-cms.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });
  const episodeDetail = await getEpisodeDetail({ client, episode });
  const lastEpisodes = await getLastEpisodes({ client });

  return {
    props: {
      lastEpisodes,
      episodeDetail: episodeDetail[0].attributes,
      menuSections,
    },
  };
}

export default EpisodeDetailPage;
