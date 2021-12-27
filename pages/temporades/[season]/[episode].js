import Head from "next/head";

import Layout from "../../../components/common/Layout/Layout";
import EpisodeDetail from "../../../components/pages/EpisodeDetail/EpisodeDetail";

import client from "../../../lib/apollo/apollo";
import { menuSections } from "../../api/menu";
import { getLastEpisodes } from "../../api/last-episodes";
import { getEpisodeDetail } from "../../api/episodes/[season]/[episode]";
import { getAllEpisodes } from "../../api/episodes";

const EpisodeDetailPage = ({ menuSections, episodeDetail, lastEpisodes }) => {
  if (!episodeDetail) {
    return null;
  }

  return (
    <Layout menuSections={menuSections}>
      <Head>
        <title>{episodeDetail.name} | El bunquer</title>
        <meta name="description" content={episodeDetail.description} />
      </Head>
      <EpisodeDetail
        lastEpisodes={lastEpisodes}
        episodeDetail={episodeDetail}
      />
    </Layout>
  );
};

export async function getStaticPaths() {
  const allEpisodes = await getAllEpisodes({ client });
  const paths = allEpisodes.map((episode) => ({
    params: {
      episode: episode.attributes.canonicalUrl,
      season: episode.attributes?.season?.data?.attributes?.season,
    },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params: { episode } }) {
  // TODO: SEO
  // TODO: Menú
  const episodeDetailPromise = getEpisodeDetail({ client, episode });
  const lastEpisodesPromise = getLastEpisodes({ client });

  const episodeDetail = await episodeDetailPromise;
  const lastEpisodes = await lastEpisodesPromise;

  return {
    props: {
      lastEpisodes,
      episodeDetail,
      menuSections,
    },
    revalidate: 60,
  };
}

export default EpisodeDetailPage;
