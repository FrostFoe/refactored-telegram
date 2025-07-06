import { getPosts } from '@/lib/content';
import type { Metadata } from 'next';
import WritingPageClient from './WritingPageClient';

export const metadata: Metadata = {
    title: 'লেখা',
    description: 'ডিজাইন, প্রযুক্তি এবং এর মধ্যবর্তী স্থান অন্বেষণ।',
};

export default async function WritingPage() {
  const posts = await getPosts();

  return <WritingPageClient posts={posts} />;
}
