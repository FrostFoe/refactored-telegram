'use client';

import { MDXRemote } from 'next-mdx-remote/rsc';
import { motion } from 'framer-motion';

export default function ServicesPageClient({ frontmatter, content }: { frontmatter: any, content: string }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, -0.01, 0.9],
      }
    },
  };

  return (
    <motion.div 
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div
        className="w-full max-w-4xl mx-auto"
      >
        <motion.h1
          className="text-3xl md:text-5xl font-medium text-gray-800 mb-16 text-center"
          variants={itemVariants}
        >
          {frontmatter.title}
        </motion.h1>
        <motion.div 
          className="prose lg:prose-xl max-w-none mx-auto text-xl md:text-2xl text-gray-600 leading-relaxed space-y-12 text-left"
          variants={itemVariants}
        >
            <MDXRemote source={content} />
        </motion.div>
      </div>
    </motion.div>
  );
}
