import Link from "next/link";
import Image from "next/image";

import styles from "./PreviewEpisode.module.css";

const PreviewEpisode = ({ title, coverImage, season, url, episodeNumber }) => {
  const getFormatedTag = () => {
    let episode = episodeNumber;
    let seasonNumber = season;

    if (episode.toString().length <= 1) {
      episode = `0${episodeNumber}`;
    }

    if (season.toString().length <= 1) {
      seasonNumber = `0${season}`;
    }

    return `${seasonNumber}x${episode}`;
  };

  const tag = getFormatedTag();

  return (
    <Link href={`/temporades/${season}/${url}`}>
      <a className={styles.link} href={`/temporades/${season}/${url}`}>
        <Image
          alt={title}
          src={coverImage?.data?.attributes?.url || "/images/portada.jpg"}
          layout="responsive"
          width={coverImage?.data?.attributes?.width || "1200px"}
          height={coverImage?.data?.attributes?.height || "675px"}
          className={styles.image}
        />
        <div className={`text-action ${styles.tags}`}>
          <p key={tag} className={styles.tag}>
            {tag}
          </p>
        </div>
        <p className={`text-body ${styles.title}`}>{title}</p>
      </a>
    </Link>
  );
};

export default PreviewEpisode;
