import Head from "next/head";

import Layout from "../../../components/common/Layout/Layout";
import EpisodeDetail from "../../../components/pages/EpisodeDetail/EpisodeDetail";

import {
  getAllEpisodes,
  getLastEpisodes,
  getEpisodeDetail,
  getMenuSections,
} from "../../../services";

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
  const allEpisodesPromise = getAllEpisodes();
  const allEpisodes = await allEpisodesPromise;

  const paths = allEpisodes.map((episode) => ({
    params: { episode: episode.url, season: episode.season },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const menuSectionsPromise = getMenuSections();
  const lastEpisodesPromise = getLastEpisodes();
  const episodeDetailPromise = getEpisodeDetail(params.episode, params.season);
  const menuSections = await menuSectionsPromise;
  const lastEpisodes = await lastEpisodesPromise;
  const episodeDetail = await episodeDetailPromise;

  return {
    props: {
      lastEpisodes,
      episodeDetail,
      menuSections,
    },
  };
}

export default EpisodeDetailPage;
