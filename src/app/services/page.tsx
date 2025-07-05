'use server';

import { getPageContent } from '@/lib/content';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function ServicesPage() {
  const { frontmatter, content } = await getPageContent('services');

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-16">
      <div
        className="w-full max-w-4xl mx-auto"
      >
        <h1
          className="text-3xl md:text-5xl font-medium text-gray-800 mb-16 text-center"
        >
          {frontmatter.title}
        </h1>
        <div className="prose lg:prose-xl max-w-none mx-auto text-xl md:text-2xl text-gray-600 leading-relaxed space-y-12 text-left">
            <MDXRemote source={content} />
        </div>
      </div>
    </div>
  );
}
