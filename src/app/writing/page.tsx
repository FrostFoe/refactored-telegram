import { getPosts, getPageContent } from "@/lib/content";
import type { Metadata } from "next";
import WritingPageClient from "./WritingPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = await getPageContent("writing");
  return {
    title: frontmatter.title,
    description: frontmatter.subtitle,
  };
}

export default async function WritingPage() {
  const posts = await getPosts();
  const { frontmatter } = await getPageContent("writing");

  return <WritingPageClient posts={posts} frontmatter={frontmatter} />;
}
