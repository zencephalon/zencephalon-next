// const baseUrl = 'http://localhost:8000';
const baseUrl = process.env.BASE_URL;
const Authorization = process.env.API_TOKEN;

export const GET = async (path: string): any => {
  const res = await fetch(`${baseUrl}/${path}`, {
    headers: { Authorization },
  });
  const obj = await res.json();

  return obj;
};
