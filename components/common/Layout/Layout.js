import Footer from "./Footer/Footer";
import Header from "./Header/Header";

import styles from "./Layout.module.css";

const Layout = ({ children, menuSections }) => (
  <>
    <Header menuSections={menuSections} />
    <main className={styles.main}>{children}</main>
    <Footer menuSections={menuSections} />
  </>
);

export default Layout;
