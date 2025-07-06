'use client';

import { MDXRemote } from 'next-mdx-remote/rsc';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PostPageClient({ post }: { post: any }) {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      }
    },
  };

  return (
    <motion.div 
      className="w-full min-h-screen flex flex-col items-center px-4 pt-24 md:pt-32 pb-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div
        className="w-full max-w-4xl"
      >
        <motion.div className="mb-8 md:mb-12" variants={itemVariants}>
            <Button variant="ghost" asChild className="text-gray-600 hover:text-gray-900">
                <Link href="/writing">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    লেখায় ফিরে যান
                </Link>
            </Button>
        </motion.div>
        
        <motion.article variants={itemVariants}>
          <header className="mb-8 text-center">
            <p className="text-base md:text-lg text-gray-500 mb-2">{post.frontmatter.date}</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-800">{post.frontmatter.title}</h1>
          </header>

          <div 
            className="prose md:prose-lg lg:prose-xl max-w-none mx-auto text-gray-600 leading-relaxed"
          >
            <MDXRemote source={post.content} />
          </div>
        </motion.article>
      </div>
    </motion.div>
  );
}
