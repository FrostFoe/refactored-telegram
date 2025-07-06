import { getProjects, getPageContent } from '@/lib/content';
import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = await getPageContent('home');
  return {
    title: frontmatter.title,
    description: frontmatter.subtitle,
  };
}

export default async function Home() {
  const projects = await getProjects();
  const { frontmatter } = await getPageContent('home');

  return <HomePageClient projects={projects} frontmatter={frontmatter} />;
}
