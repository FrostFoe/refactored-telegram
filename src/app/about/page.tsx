import { getPageContent } from '@/lib/content';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = await getPageContent('about');
  return {
    title: frontmatter.title,
  };
}

export default async function AboutPage() {
  const { frontmatter, content } = await getPageContent('about');

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-16">
      <div
        className="w-full max-w-4xl mx-auto text-center"
      >
        <h1
          className="text-3xl md:text-5xl font-medium text-gray-800 mb-12"
        >
          {frontmatter.title}
        </h1>
        <div className="space-y-8 text-2xl md:text-3xl text-gray-600 leading-relaxed prose lg:prose-xl max-w-none">
          <MDXRemote source={content} />
        </div>
      </div>
    </div>
  );
}
