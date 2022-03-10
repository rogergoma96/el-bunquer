import Head from "next/head";

import client from "../../../lib/apollo/apollo";

import EpisodeDetail from "../../../components/pages/EpisodeDetail/EpisodeDetail";

import { getLastEpisodes } from "../../api/last-episodes";
import { getEpisodeDetail } from "../../api/episodes/[season]/[episode]";
import { getAllEpisodes } from "../../api/episodes";

const DEFAULT_SEASSON = "1";

const EpisodeDetailPage = ({ menuSections, episodeDetail, lastEpisodes }) => {
  if (!episodeDetail) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{episodeDetail.name} | El bunquer</title>
        <meta name="description" content={episodeDetail.description} />
      </Head>
      <EpisodeDetail
        lastEpisodes={lastEpisodes}
        episodeDetail={episodeDetail}
      />
    </>
  );
};

export async function getStaticPaths() {
  const allEpisodes = await getAllEpisodes({ client });
  const paths = allEpisodes.map((episode) => ({
    params: {
      episode: episode.attributes.canonicalUrl,
      season:
        episode.attributes?.season?.data?.attributes?.season || DEFAULT_SEASSON,
    },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params: { episode } }) {
  const episodeDetailPromise = getEpisodeDetail({ client, episode });
  const lastEpisodesPromise = getLastEpisodes({ client });

  const episodeDetail = await episodeDetailPromise;
  const lastEpisodes = await lastEpisodesPromise;

  return {
    props: {
      lastEpisodes,
      episodeDetail,
    },
    revalidate: 60,
  };
}

export default EpisodeDetailPage;
