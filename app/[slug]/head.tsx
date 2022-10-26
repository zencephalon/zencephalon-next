import { getNode } from "~/lib/api";

interface Props {
  params: { slug: string };
}

export default async function Head({ params }: Props) {
  const node = await getNode(params.slug);
  return (
    <>
      <title>{node.name}</title>
      <meta name="description" content={`${node.name} on zencephalon.com`} />
      <link rel="icon" href="/zenchinese.png" />
    </>
  );
}
