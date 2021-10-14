export default interface Node {
  content: string;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
  backlinks: Array<[string, string]>;
}
