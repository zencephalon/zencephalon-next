import Article from "~/c/Article";

import { getIndex } from "~/lib/api";

const Home = async () => {
  const node = await getIndex();
  return (
    <>
      <main>
        <Article markdown={node.content} />
      </main>
    </>
  );
};

export default Home;
