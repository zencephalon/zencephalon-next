import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import Layout from "~/c/Layout";
import Article from "~/c/Article";

const NodePage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Page not Found</title>
        <meta name="description" content={`500 on zencephalon.com`} />
      </Head>

      <main className={styles.main}>
        <Article
          markdown="# Sorry
        
        Couldn't find this page."
        />
      </main>
    </Layout>
  );
};

export default NodePage;
