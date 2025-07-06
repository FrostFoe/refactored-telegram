"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { PostFrontmatter, ProjectFrontmatter } from "@/types";

const contentDirectory = path.join(process.cwd(), "content");

async function getContent<T>(
  contentType: "work" | "writing" | "pages",
  slug?: string,
): Promise<any> {
  const dir = path.join(contentDirectory, contentType);

  if (slug) {
    const filePath = path.join(dir, `${slug}.mdx`);
    try {
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      return { frontmatter: data as T, content, slug };
    } catch (error) {
      return null;
    }
  } else {
    if (!fs.existsSync(dir)) {
      return [];
    }
    const filenames = fs.readdirSync(dir);
    return filenames.map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const filePath = path.join(dir, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return { ...(data as T), slug };
    });
  }
}

export async function getProjects(): Promise<ProjectFrontmatter[]> {
  const projects = await getContent<ProjectFrontmatter>("work");
  return projects as ProjectFrontmatter[];
}

export async function getProjectBySlug(slug: string) {
  return getContent<ProjectFrontmatter>("work", slug);
}

export async function getPosts(): Promise<PostFrontmatter[]> {
  const posts = await getContent<PostFrontmatter>("writing");
  return (posts as PostFrontmatter[])
    .map((post) => {
      const filePath = path.join(
        contentDirectory,
        "writing",
        `${post.slug}.mdx`,
      );
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { content } = matter(fileContents);
      const wordCount = content.split(/\s+/).filter(Boolean).length;
      const readingTime = `${Math.ceil(wordCount / 200)} min read`;

      return {
        ...post,
        author: post.author || "FrostFoe",
        readingTime,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string) {
  const post = await getContent<PostFrontmatter>("writing", slug);
  if (post) {
    const wordCount = post.content.split(/\s+/).filter(Boolean).length;
    post.frontmatter.readingTime = `${Math.ceil(wordCount / 200)} min read`;
    post.frontmatter.author = post.frontmatter.author || "FrostFoe";
  }
  return post;
}

export async function getPageContent(slug: string) {
  const page = await getContent<any>("pages", slug);
  if (!page) {
    throw new Error(`No content found for page: ${slug}`);
  }
  return page;
}
