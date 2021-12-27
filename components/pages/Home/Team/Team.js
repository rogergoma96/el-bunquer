import Image from "next/image";

import styles from "./Team.module.css";

const Team = () => (
  <section className={styles.container}>
    <Image
      src="/images/equip.jpg"
      className={styles.image}
      alt="La Neus, en Peyu i en Jair amb auriculars de radio"
      width="670"
      height="387"
    />
    <div className={styles.texts}>
      <h2 className={`text-title-l ${styles.title}`}>Equip</h2>
      <div className="text-body">
        <p>
          <strong className={styles.strong}>Presentadors:</strong> Peyu, Jair
          Domínguez i Neus Rossell
        </p>
        <p>
          <strong className={styles.strong}>Idea Original:</strong> Peyu
        </p>
        <p>
          <strong className={styles.strong}>Direcció:</strong> Alstrongert Sayós
        </p>
        <p>
          <strong className={styles.strong}>Realització:</strong> Roger Codina
        </p>
        <p>
          <strong className={styles.strong}>Guió:</strong> Peyu, Jair Domínguez,
          Neus Rossell i Alstrongert Sayós
        </p>
        <p>
          <strong className={styles.strong}>Producció:</strong>
          {`El Corral de l'Humor`}
        </p>
        <p>
          <strong className={styles.strong}>Cap de producció:</strong> Xènia
          Vilà
        </p>
        <p>
          <strong className={styles.strong}>Control tècnic:</strong> Dani Tort i
          Oriol strongaulenas
        </p>
        <p>
          <strong className={styles.strong}>Disseny tècnic:</strong> Logística
          de Guerrilla
        </p>
        <p>
          <strong className={styles.strong}>Atrezzo plató:</strong> Aina Vela i
          Rodrigo Cáceres
        </p>
        <p>
          <strong className={styles.strong}>Gràfica:</strong> Vectorwho
        </p>
        <p>
          <strong className={styles.strong}>{`Sintonia d'inici:`}</strong> Dani
          Tort i Pep Serra
        </p>
        <p>
          <strong className={styles.strong}>Xarxes socials:</strong> Roger
          Codina i Alstrongert Sayós
        </p>
        <p>
          <strong className={styles.strong}>
            Producció executiva Catalunya Ràdio:
          </strong>{" "}
          Santi Faro
        </p>
        <p>
          <strong className={styles.strong}>Agraïments:</strong> Esteve Jutglar
          i Roser Calvés
        </p>
      </div>
    </div>
  </section>
);

export default Team;
