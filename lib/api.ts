const baseUrl = process.env.BASE_URL;
const Authorization = process.env.API_TOKEN || "";

import Node from "~/t/Node";

export const GET = async (path: string) => {
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set("Authorization", Authorization);
  const res = await fetch(`${baseUrl}/${encodeURI(path)}`, {
    headers: requestHeaders,
  });
  const obj = await res.json();

  return obj;
};

export const getNode = async (slug: string): Promise<Node> => {
  console.log("getting node", slug);
  return GET(`public/node/${slug}`);
};

export const getIndex = async (): Promise<Node> => {
  console.log("getting index");
  const node = await GET(`public/root`);

  console.log("got index", node);

  return node;
};
