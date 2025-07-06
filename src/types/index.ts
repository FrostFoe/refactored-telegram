export interface ProjectFrontmatter {
  slug: string;
  title: string;
  description: string;
  year: string;
  image?: string;
  services?: string[];
  client: string;
  live_url?: string;
}

export interface PostFrontmatter {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  tags?: string[];
  author: string;
  readingTime: string;
}
