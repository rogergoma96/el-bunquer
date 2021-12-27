import styles from "./Sponsors.module.css";

const Sponsors = () => (
  <section className={styles.sponsors}>
    <a href="https://www.ccma.cat/catradio/">
      <img src="/images/catalunya_radio.png" className={styles.sponsor} />
    </a>

    <a href="https://www.elcorral.cat/">
      <img src="/images/el_corral.png" className={styles.sponsor} />
    </a>
    <a href="https://www.c-ferrer.com/">
      <img src="/images/ferrer.png" className={styles.sponsor} />
    </a>
    <a href="http://logisticadeguerrilla.cat/">
      <img
        src="/images/logistica_de_guerrilla.png"
        className={styles.sponsor}
      />
    </a>
    <a href="http://vectorwho.com/">
      <img src="/images/vector_who.png" className={styles.sponsor} />
    </a>
  </section>
);

export default Sponsors;
