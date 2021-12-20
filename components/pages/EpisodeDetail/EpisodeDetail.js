import LastEpisodes from "../../common/LastEpisodes/LastEpisodes";
import Cover from "./Cover/Cover";
import History from "./History/History";

import styles from "./EpisodeDetail.module.css";

const EpisodeDetail = ({ lastEpisodes, episodeDetail }) => {
  const { title, name, description, historyImage, youtubeUrl, history } =
    episodeDetail;

  return (
    <>
      <Cover title={title} summary={description} youtubeUrl={youtubeUrl} />
      <div className={styles.container}>
        <History
          name={name}
          historyImage={historyImage?.data[0]?.attributes}
          history={history}
        />
        <LastEpisodes lastEpisodes={lastEpisodes} />
      </div>
    </>
  );
};

export default EpisodeDetail;
