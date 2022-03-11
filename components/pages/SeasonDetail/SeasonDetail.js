import { useState } from "react";

import { DEFAULT_PAGE_SIZE } from "../../common/constants/constants";
import PreviewEpisode from "../../common/PreviewEpisode/PreviewEpisode";

import styles from "./SeasonDetail.module.css";

const SeasonDetail = ({ season, episodes }) => {
  const [pageNum, setPageNum] = useState(1);
  const [episodesList, setEpisodesList] = useState(episodes);
  const [moreEpisodes, setMoreEpisodes] = useState(
    episodes.length === DEFAULT_PAGE_SIZE
  );

  const getSeasonEpisodes = ({ page }) => {
    fetch(`/api/episodes/${season}?page=${page + 1}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEpisodesList((prevState) => prevState.concat(data));

        if (data.length < DEFAULT_PAGE_SIZE) {
          setMoreEpisodes(false);
        }
      });

    setPageNum(page + 1);
  };

  return (
    <div className={styles.container}>
      <p className={`text-title-m ${styles.season}`}>Temporada {season}</p>
      <div className={styles.episodes}>
        {episodesList.map((episode) => (
          <PreviewEpisode
            {...episode.attributes}
            key={episode.attributes.name}
            season={season}
          />
        ))}
      </div>
      {moreEpisodes && (
        <button
          className={`text-action ${styles.showMore}`}
          onClick={() => getSeasonEpisodes({ page: pageNum })}
        >
          Veure més capítols
        </button>
      )}
    </div>
  );
};

export default SeasonDetail;
