import Layout from "../components/common/Layout/Layout";

import { menuSections } from "./api/menu";

import "../styles/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout menuSections={menuSections}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
