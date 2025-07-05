'use server';

import { motion } from 'framer-motion';
import { getPageContent } from '@/lib/content';
import { MDXRemote } from 'next-mdx-remote/rsc';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

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
