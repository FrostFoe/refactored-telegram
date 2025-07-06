import { getPosts } from '@/lib/content';
import type { Metadata } from 'next';
import WritingPageClient from './WritingPageClient';

export const metadata: Metadata = {
    title: 'Writing',
    description: 'Exploring design, technology, and the space in between.',
};

export default async function WritingPage() {
  const posts = await getPosts();

  return <WritingPageClient posts={posts} />;
}
