import Head from "next/head";
import styles from "../../styles/Home.module.css";

import Layout from "~/c/Layout";
import Article from "~/c/Article";
import Backlinks from "~/c/Backlinks";

import { GET } from "~/lib/api";

import Node from "~/t/Node";

interface Props {
  params: { slug: string };
}

const NodePage = async ({ params }: Props) => {
  const node = await getNode(params.slug);
  return (
    <Layout>
      <Head>
        <title>{node.name}</title>
        <meta name="description" content={`${node.name} on zencephalon.com`} />
      </Head>

      <main className={styles.main}>
        <Article markdown={node.content} />
      </main>
      <Backlinks backlinks={node.backlinks} />
    </Layout>
  );
};

const getNode = async (slug: string): Promise<Node> => {
  const node = await GET(`public/node/${slug}`);
  return node;
};

export default NodePage;
