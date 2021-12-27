import Image from "next/image";

import styles from "./Spectators.module.css";

const Spectators = () => (
  <section className={styles.container}>
    <div className={styles.texts}>
      <h2 className={`text-title-l ${styles.title}`}>Vols venir de públic?</h2>
      <p className="text-body">
        Per venir de públic al programa, envía un correu elctrònic a
        elbunquer@catradio.cat.
      </p>
      <p className="text-body">
        {`Tingues encompte que ‘El búnquer’ té unes normes estrictes per tal de no
      ser descoberts i seguir la lluita des de la clandestinitat. Així que si
      vols verir, hauras d'estar disposat a ajudarnos a mantenir aquesta
      clandestinitat.`}
      </p>
      <p className="text-body">
        El programa és un espai lliure de censura intel·lectual. Si vols, podràs
        tenir-hi una participació activa: explicant una anècdota, fent una
        pregunta, recitant un poema… el que més et vingui de gust!
      </p>
    </div>
    <Image
      src="/images/public.jpg"
      className={styles.image}
      alt="Imatge del bunquer amb les cadires del públic"
      width="670"
      height="387"
    />
  </section>
);

export default Spectators;
