import styles from "./SeasonsList.module.css";

const Season = ({ seasons }) => (
  <div className={styles.container}>
    {seasons.map((season) => (
      <p key={season.attributes.season}>Temporada {season.attributes.season}</p>
    ))}
  </div>
);

export default Season;
