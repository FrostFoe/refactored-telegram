export interface ProjectFrontmatter {
  slug: string;
  title: string;
  description: string;
  year: string;
  image?: string;
}

export interface PostFrontmatter {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
}
