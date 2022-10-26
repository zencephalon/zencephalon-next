import Article from "~/c/Article";
import Backlinks from "~/c/Backlinks";

import { getIndex, getNode, GET } from "~/lib/api";
import TitleReload from "~/c/TitleReload";

interface Props {
  params: { slug: string };
}

const NodePage = async ({ params }: Props) => {
  const node = await (params.slug === "" ? getIndex() : getNode(params.slug));
  return (
    <>
      <TitleReload title={node.name} />
      <main>
        <Article markdown={node.content} />
      </main>
      <Backlinks backlinks={node.backlinks} />
    </>
  );
};

export async function generateStaticParams() {
  const slugs = await GET(`public/index`);

  console.log(slugs);

  return slugs.map((slug: string) => ({
    slug,
  }));
}

export default NodePage;
