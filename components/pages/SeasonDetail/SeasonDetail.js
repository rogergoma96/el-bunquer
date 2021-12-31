import PreviewEpisode from "../../common/PreviewEpisode/PreviewEpisode";

import styles from "./SeasonDetail.module.css";

const SeasonDetail = ({ season, episodes }) => (
  <div className={styles.container}>
    <p className={`text-title-l ${styles.season}`}>Temporada {season}</p>
    <div className={styles.episodes}>
      {episodes.map((episode) => (
        <PreviewEpisode
          {...episode.attributes}
          key={episode.attributes.name}
          season={season}
        />
      ))}
    </div>
  </div>
);

export default SeasonDetail;
