import styles from "./Sponsors.module.css";

const Sponsors = () => (
  <section className={styles.sponsors}>
    <img src="/images/catalunya_radio.png" className={styles.sponsor} />
    <img src="/images/el_corral.png" className={styles.sponsor} />
    <img src="/images/ferrer.png" className={styles.sponsor} />
    <img src="/images/logistica_de_guerrilla.png" className={styles.sponsor} />
    <img src="/images/vector_who.png" className={styles.sponsor} />
  </section>
);

export default Sponsors;
