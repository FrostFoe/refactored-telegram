'use client';

import type { PostFrontmatter } from '@/types';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
  <motion.div 
    variants={itemVariants}
    whileHover={{ scale: 1.01, transition: { duration: 0.2, ease: 'easeInOut' } }}
    whileTap={{ scale: 0.99 }}
    className="transition-shadow hover:shadow-lg rounded-lg"
  >
    <Link href={`/writing/${post.slug}`} className="block py-8 md:py-10 group">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 items-start">
        <div className="md:col-span-1 mb-4 md:mb-0">
          {post.image ? (
            <div className="overflow-hidden rounded-lg">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="object-cover w-full aspect-video transition-transform duration-300 group-hover:scale-105"
                data-ai-hint="article thumbnail"
              />
            </div>
          ) : (
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-gray-300"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            </div>
          )}
        </div>
        <div className="md:col-span-2">
          <div className="mb-2">
            <span className="text-sm text-gray-500">{post.date}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-medium text-gray-800 group-hover:text-primary transition-colors duration-300">{post.title}</h3>
          <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center mt-6 text-sm md:text-base font-medium text-gray-800 transition-colors duration-300 group-hover:text-primary">
            প্রবন্ধটি পড়ুন
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </div>
        </div>
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
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-800">চিন্তা ও ধারণা</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          ডিজাইন, প্রযুক্তি এবং এর মধ্যবর্তী স্থান অন্বেষণ।
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
