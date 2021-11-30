import { useState } from "react";
import Image from "next/image";

import styles from "./History.module.css";

const History = ({ name, historyImage, history }) => {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <article className={styles.article}>
      <div className={styles.protagonist}>
        <div className={styles.image}>
          <Image
            alt={`Foto de ${name}`}
            src={historyImage}
            layout="responsive"
            width="100vw"
            height="100vh"
          />
        </div>
        <p className={`text-action ${styles.info}`}>
          Nom <span className="text-body">{name}</span>
        </p>
        <p className={`text-action ${styles.info}`}>
          Data de neixament <span className="text-body">31/10/1930</span>
        </p>
        <p className={`text-action ${styles.info}`}>
          Lloc de neixament <span className="text-body">Roma</span>
        </p>
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
