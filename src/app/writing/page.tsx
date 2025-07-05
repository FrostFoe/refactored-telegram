'use client';

import { posts, type Post } from '@/lib/writing';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

const PostItem = ({ post }: { post: Post }) => (
  <motion.div variants={itemVariants}>
    <Link href="#" className="block py-8 group">
      <div className="flex justify-between items-start mb-4">
        <Badge
          variant={post.tag === 'Design' ? 'default' : post.tag === 'Strategy' ? 'secondary' : 'outline'}
          className="capitalize"
        >
          {post.tag}
        </Badge>
        <span className="text-sm text-gray-500">{post.date}</span>
      </div>
      <h3 className="text-2xl font-semibold text-gray-800">{post.title}</h3>
      <p className="mt-2 text-gray-600 leading-relaxed">{post.excerpt}</p>
      <div className="flex items-center mt-4 text-sm font-semibold text-gray-800 transition-colors duration-300 group-hover:text-primary">
        Read More
        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  </motion.div>
);

export default function WritingPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center px-4 pt-32 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl md:text-5xl font-medium text-gray-800">Thoughts & Ideas</h1>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          Exploring design, technology, and the space in between.
        </p>
      </motion.div>

      <motion.div
        className="w-full max-w-3xl divide-y divide-gray-200/60"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </motion.div>
    </div>
  );
}
