export interface BlogEntry {
    id: string;
    title: string;
    slug: string;
    featureImage: {
        url: string;
        id: string;
    }[];
  }