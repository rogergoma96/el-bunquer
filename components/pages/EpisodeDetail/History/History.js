import { useState } from "react";
import Image from "next/image";

import styles from "./History.module.css";

const History = ({ name, historyImage, history }) => {
  const [showHistory, setShowHistory] = useState(false);

  if (!history) {
    return null;
  }

  return (
    <article className={styles.article}>
      <div className={styles.protagonist}>
        {historyImage && (
          <div className={styles.image}>
            <Image
              alt={`Foto de ${name}`}
              src={historyImage.url}
              layout="responsive"
              width={historyImage.width}
              height={historyImage.height}
            />
          </div>
        )}
      </div>
      <div className={styles.history}>
        <h3 className={`text-title-l ${styles.articleTitle}`}>{name}</h3>
        <div
          className={`text-body ${
            showHistory ? styles.showHistory : styles.hideHistory
          }`}
          dangerouslySetInnerHTML={{ __html: history }}
        ></div>
        {!showHistory && (
          <button
            className={`text-caption ${styles.showMore}`}
            onClick={() => setShowHistory(!showHistory)}
          >
            + Continuar llegint
          </button>
        )}
      </div>
    </article>
  );
};

export default History;
