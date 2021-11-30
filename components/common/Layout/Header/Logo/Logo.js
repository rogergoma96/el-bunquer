import Link from "next/link";
import Image from "next/image";

import styles from "./Logo.module.css";

const Logo = () => (
  <Link href="/">
    <a className={styles.logo}>
      <Image
        src="/images/elbunquer-logo.png"
        alt="El bunquer"
        width="64"
        height="64"
        priority
      />
    </a>
  </Link>
);

export default Logo;
