import styles from "./Cover.module.css";

const Cover = ({ title, summary, youtubeUrl }) => (
  <section className={styles.cover}>
    <div className={styles.coverContainer}>
      <div className={styles.info}>
        <h1 className={`text-title-l ${styles.title}`}>{title}</h1>
        <h2 className={`text-body ${styles.summary}`}>{summary}</h2>
      </div>
      <div className={styles.container}>
        <iframe
          src={`${youtubeUrl}?autoplay=1&mute=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
          className={styles.video}
        ></iframe>
      </div>
    </div>
  </section>
);

export default Cover;
