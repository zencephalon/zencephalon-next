import { getNode } from "~/lib/api";

export default async function Head({ params }) {
  const node = await getNode(params.slug);
  return (
    <>
      <title>{node.name}</title>
      <meta name="description" content={`${node.name} on zencephalon.com`} />
      <link rel="icon" href="/zenchinese.png" />
    </>
  );
}
