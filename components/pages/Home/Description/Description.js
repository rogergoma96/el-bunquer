import Image from "next/image";

import styles from "./Description.module.css";

const Description = () => (
  <section className={styles.container}>
    <Image
      src="/images/neus_peyu_jair.jpg"
      className={styles.image}
      alt="A el bunquer ens sentim més forts que mai. 70000 oients diaris."
      width="670"
      height="387"
    />
    <div className={styles.texts}>
      <h2 className={`text-title-l ${styles.title}`}>El programa</h2>
      <p className="text-body">
        {`En Peyu, Jair Domínguez i Neus Rossell, de dilluns a divendres, a les 10
        de la nit, quan ja estan cansats d'haver sigut ciutadans exemplars
        durant tot el dia, es reuneixen en el seu espai de confiança: una antiga
        de bodega que han convertit en el seu local clandestí, un lloc gairebé
        de recés espiritual on poden opinar lliurament de tots els temes que
        vulguin, sense cap mena de pressió externa.`}
      </p>
    </div>
  </section>
);

export default Description;
