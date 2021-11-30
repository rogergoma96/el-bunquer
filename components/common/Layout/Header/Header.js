import { useEffect, useState } from "react";

import Menu from "./Menu/Menu";
import Logo from "./Logo/Logo";

import styles from "./Header.module.css";

const Header = ({ menuSections }) => (
  <header className={`${styles.container} ${styles.transparent}`}>
    <Logo />
    <Menu sections={menuSections} />
  </header>
);

export default Header;
