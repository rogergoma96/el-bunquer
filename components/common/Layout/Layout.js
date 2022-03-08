import Footer from "./Footer/Footer";
import Header from "./Header/Header";

import styles from "./Layout.module.css";

const Layout = ({ menuItems, children }) => (
  <>
    <Header menuItems={menuItems} />
    <main className={styles.main}>{children}</main>
    <Footer />
  </>
);

export default Layout;
