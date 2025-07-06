import { getPageContent } from '@/lib/content';
import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = await getPageContent('about');
  return {
    title: frontmatter.title,
  };
}

export default async function AboutPage() {
  const { frontmatter, content } = await getPageContent('about');

  return <AboutPageClient frontmatter={frontmatter} content={content} />;
}
