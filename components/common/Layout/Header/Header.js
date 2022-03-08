import Menu from "./Menu/Menu";
import Logo from "./Logo/Logo";

import styles from "./Header.module.css";

const Header = ({ menuItems }) => (
  <header className={styles.container}>
    <Logo />
    <Menu menuItems={menuItems} />
  </header>
);

export default Header;
