import { getPageContent } from "@/lib/content";
import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = await getPageContent("about");
  return {
    title: frontmatter.title,
  };
}

export default async function AboutPage() {
  const { frontmatter, content } = await getPageContent("about");

  return (
    <AboutPageClient frontmatter={frontmatter}>
      <div className="prose md:prose-lg lg:prose-xl max-w-none text-gray-600 text-left font-tiro">
        <MDXRemote source={content} />
      </div>
    </AboutPageClient>
  );
}
