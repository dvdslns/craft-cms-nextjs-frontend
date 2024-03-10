export interface BlogEntry {
  id: string;
  title: string;
  slug: string;
  featureImage: {
      url: string;
      id: string;
  }[];
}
export interface ContentBlock {
  id: string;
  typeHandle: string;
  text?: string;
  image?: {
    url: string;
  }[];
}