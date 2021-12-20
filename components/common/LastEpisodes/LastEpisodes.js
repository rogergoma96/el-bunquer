import PreviewEpisode from "../PreviewEpisode/PreviewEpisode";

import styles from "./LastEpisodes.module.css";

const LastEpisodes = ({ lastEpisodes = [] }) => {
  if (lastEpisodes.length === 0) {
    return null;
  }

  return (
    <section className={styles.container}>
      <p className={`text-title-s ${styles.title}`}>Últims programes</p>
      <div className={styles.episodes}>
        {lastEpisodes.map((episode) => (
          <PreviewEpisode
            key={episode.attributes?.title}
            title={episode.attributes?.title}
            coverImage={episode.attributes?.coverImg}
            tags={episode.attributes?.tags}
            season={episode.attributes?.season || 1}
            url={episode.attributes?.canonicalUrl}
            episodeNumber={episode.attributes?.programNumber}
          />
        ))}
      </div>
    </section>
  );
};

export default LastEpisodes;
