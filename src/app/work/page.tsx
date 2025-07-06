import { getProjects, getPageContent } from "@/lib/content";
import type { Metadata } from "next";
import WorkPageClient from "./WorkPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = await getPageContent("work");
  return {
    title: "Work",
    description: frontmatter.subtitle,
  };
}

export default async function WorkPage() {
  const projects = await getProjects();
  const { frontmatter } = await getPageContent("work");

  return <WorkPageClient projects={projects} frontmatter={frontmatter} />;
}
