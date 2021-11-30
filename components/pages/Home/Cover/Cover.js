import Image from "next/image";

import styles from "./Cover.module.css";

const Cover = () => (
  <section className={styles.container}>
    <div className={styles.image}>
      <Image
        src="/images/portada.jpg"
        alt="El bunquer, amb la Neus, en Peyu i en Jair"
        layout="fill"
        objectFit="contain"
        objectPosition="bottom"
        priority="true"
      />
    </div>
  </section>
);

export default Cover;
