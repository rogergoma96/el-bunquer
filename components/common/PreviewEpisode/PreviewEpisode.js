import Link from "next/link";
import Image from "next/image";

import styles from "./PreviewEpisode.module.css";

const PreviewEpisode = ({ title, coverImage, tags, season, url }) => {
  return (
    <Link href={`/temporades/${season}/${url}`}>
      <a className={styles.link} href={`/temporades/${season}/${url}`}>
        <Image
          alt={title}
          src={coverImage}
          layout="responsive"
          width="1920px"
          height="1391px"
          className={styles.image}
        />
        {tags && (
          <div className={`text-action ${styles.tags}`}>
            {tags.map((tag) => (
              <p key={tag} className={styles.tag}>
                {tag}
              </p>
            ))}
          </div>
        )}
        <p className={`text-body ${styles.title}`}>{title}</p>
      </a>
    </Link>
  );
};

export default PreviewEpisode;
