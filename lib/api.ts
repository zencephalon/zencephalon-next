// const baseUrl = 'http://localhost:8000';
const baseUrl = process.env.BASE_URL;
const Authorization = process.env.API_TOKEN || "";

export const GET = async (path: string) => {
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set("Authorization", Authorization);
  const res = await fetch(`${baseUrl}/${encodeURI(path)}`, {
    headers: requestHeaders,
  });
  const obj = await res.json();

  return obj;
};
