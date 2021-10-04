import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Layout from "~/c/Layout";

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

import { GET } from "~/lib/api";

const Home: NextPage = ({ node }) => {
  return (
    <Layout>
      <Head>
        <title>{node.name}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <article dangerouslySetInnerHTML={{ __html: node.content }} />
      </main>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const node = await GET(`public/root`);

  const content = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .processSync(node.content).value;

  return {
    props: { node: { ...node, content } }, // will be passed to the page component as props
  };
}

export default Home;
