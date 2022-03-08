import Layout from "../components/common/Layout/Layout";
import client from "../lib/apollo/apollo";

import { getNavigationMenu } from "./api/menu";

import "../styles/styles.css";

const MyApp = ({ Component, pageProps, menuItems }) => (
  <Layout menuItems={menuItems}>
    <Component {...pageProps} />
  </Layout>
);

MyApp.getInitialProps = async () => {
  const menuItems = await getNavigationMenu({ client });
  return { menuItems };
};

export default MyApp;
