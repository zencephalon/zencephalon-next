import Head from "next/head";
import styles from "../styles/Home.module.css";

import Article from "~/c/Article";

import { GET } from "~/lib/api";

import Node from "~/t/Node";

const Home = async () => {
  const node = await getIndex();
  return (
    <>
      <Head>
        <title>{node.name}</title>
        <meta name="description" content={`Zencephalon.com index`} />
      </Head>

      <main className={styles.main}>
        <Article markdown={node.content} />
      </main>
    </>
  );
};

export const getIndex = async (): Promise<Node> => {
  const node = await GET(`public/root`);

  return node;
};

export default Home;
