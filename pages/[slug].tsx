import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import Layout from "~/c/Layout";
import Article from "~/c/Article";

import { GET } from "~/lib/api";

import Node from "~/t/Node";

interface Props {
  node: Node;
}

const NodePage: NextPage<Props> = ({ node }) => {
  return (
    <Layout>
      <Head>
        <title>{node.name}</title>
        <meta name="description" content={`${node.name} on zencephalon.com`} />
      </Head>

      <main className={styles.main}>
        <Article markdown={node.content} />
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context?.params?.slug;
  const node = await GET(`public/node/${slug}`);

  return {
    props: { node },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await GET(`public/index`);
  console.log(slugs);
  return {
    paths: slugs.map((slug: string) => {
      return { params: { slug } };
    }),
    // TODO: setup a fallback page
    fallback: false,
  };
};

export default NodePage;
