import { getPageContent } from "@/lib/content";
import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = await getPageContent("contact");
  return {
    title: frontmatter.title,
    description: frontmatter.subtitle,
  };
}

export default async function ContactPage() {
  const { frontmatter } = await getPageContent("contact");
  return <ContactPageClient frontmatter={frontmatter} />;
}
