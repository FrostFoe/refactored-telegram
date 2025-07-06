import { getPageContent } from "@/lib/content";
import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = await getPageContent("services");
  return {
    title: frontmatter.title,
  };
}

export default async function ServicesPage() {
  const { frontmatter, content } = await getPageContent("services");

  return (
    <ServicesPageClient frontmatter={frontmatter}>
      <div className="prose md:prose-lg lg:prose-xl max-w-none mx-auto text-gray-600 leading-relaxed text-left">
        <MDXRemote source={content} />
      </div>
    </ServicesPageClient>
  );
}
