import Article from "~/c/Article";
import Backlinks from "~/c/Backlinks";

import { getNode } from "~/lib/api";
import TitleReload from "~/c/TitleReload";

interface Props {
  params: { slug: string };
}

const NodePage = async ({ params }: Props) => {
  const node = await getNode(params.slug);
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

export default NodePage;
