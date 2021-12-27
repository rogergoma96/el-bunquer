import Cover from "./Cover/Cover";
import Description from "./Description/Description";
import LastEpisodes from "../../common/LastEpisodes/LastEpisodes";
import Team from "./Team/Team";
import Sponsors from "./Sponsors/Sponsors";

import styles from "./Home.module.css";
import Spectators from "./Spectatos/Spectators";

const Home = ({ lastEpisodes }) => (
  <>
    <Cover />
    <div className={styles.content}>
      <LastEpisodes lastEpisodes={lastEpisodes} />
      <Description />
      <Spectators />
      <Team />
      <Sponsors />
    </div>
  </>
);

export default Home;
