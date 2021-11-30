import Head from "next/head";

import Layout from "../../components/common/Layout/Layout";
import Season from "../../components/pages/Seasons/Season";
// import { getMenuSections } from "../../services";
import { menuSections } from "../api/menu";

const Seasons = ({ menuSections }) => (
  <Layout menuSections={menuSections}>
    <Head>
      <title>Temporades | El Búnquer</title>
      <meta name="description" content="Temporades del Búnquer" />
    </Head>
    <Season />
  </Layout>
);

export async function getStaticProps({ params }) {
  return {
    props: {
      menuSections,
    },
  };
}

export default Seasons;
