import Head from "next/head";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import Layout from "../components/common/Layout/Layout";
import Home from "../components/pages/Home/Home";
// import { getLastEpisodes, getMenuSections } from "../services";
import { menuSections } from "./api/menu";
import { getLastEpisodes } from "./api/last-episodes";

const HomePage = ({ menuSections, lastEpisodes }) => (
  <Layout menuSections={menuSections}>
    <Head>
      <title>El Búnquer</title>
      <meta name="description" content="El bunquer" />
    </Head>
    <Home lastEpisodes={lastEpisodes} />
  </Layout>
);

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://el-bunquer-cms.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });

  const {
    data: { seasons },
  } = await client.query({
    query: gql`
      query getSeasons {
        seasons {
          data {
            attributes {
              season
            }
          }
        }
      }
    `,
  });

  const lastEpisodes = await getLastEpisodes({ client });

  return {
    props: {
      menuSections,
      lastEpisodes,
      seasons: seasons.data,
    },
  };
}

export default HomePage;
