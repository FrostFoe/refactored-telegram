import { getPageContent } from '@/lib/content';
import type { Metadata } from 'next';
import ServicesPageClient from './ServicesPageClient';

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = await getPageContent('services');
  return {
    title: frontmatter.title,
  };
}

export default async function ServicesPage() {
  const { frontmatter, content } = await getPageContent('services');

  return <ServicesPageClient frontmatter={frontmatter} content={content} />;
}
