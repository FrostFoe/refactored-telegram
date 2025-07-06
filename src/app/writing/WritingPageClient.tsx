'use client';

import type { PostFrontmatter } from '@/types';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const PostItem = ({ post }: { post: PostFrontmatter }) => (
  <motion.div variants={itemVariants}>
    <Link href={`/writing/${post.slug}`} className="block py-8 md:py-10 group">
      <div className="mb-2">
        <span className="text-sm text-gray-500">{post.date}</span>
      </div>
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800 group-hover:text-primary transition-colors duration-300">{post.title}</h3>
      <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">{post.excerpt}</p>
      <div className="flex items-center mt-6 text-sm md:text-base font-medium text-gray-800 transition-colors duration-300 group-hover:text-primary">
        Read Article
        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  </motion.div>
);

export default function WritingPageClient({ posts }: { posts: PostFrontmatter[] }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const headerItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div 
      className="w-full min-h-screen flex flex-col items-center px-4 pt-24 md:pt-32 pb-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="text-center mb-12 md:mb-16"
        variants={headerItemVariants}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-800">Thoughts & Ideas</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Exploring design, technology, and the space in between.
        </p>
      </motion.div>

      <motion.div
        className="w-full max-w-4xl divide-y divide-gray-200/60"
        variants={containerVariants}
      >
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </motion.div>
    </motion.div>
  );
}
