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
            key={episode.id}
            title={episode.title}
            coverImage={episode.coverImage}
            tags={episode.tags}
            season={episode.season}
            url={episode.url}
          />
        ))}
      </div>
    </section>
  );
};

export default LastEpisodes;
