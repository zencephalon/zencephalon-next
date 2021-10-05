import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import Layout from "~/c/Layout";
import Article from "~/c/Article";

import { GET } from "~/lib/api";

import Node from "~/t/Node";

interface Props {
  node: Node;
}

const Home: NextPage<Props> = ({ node }) => {
  return (
    <Layout>
      <Head>
        <title>{node.name}</title>
        <meta name="description" content={`Zencephalon.com index`} />
      </Head>

      <main className={styles.main}>
        <Article markdown={node.content} />
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const node = await GET(`public/root`);

  return {
    props: { node },
    revalidate: 10,
  };
};

export default Home;
