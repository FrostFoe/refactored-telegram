'use client';

import { MDXRemote } from 'next-mdx-remote/rsc';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { PostFrontmatter } from '@/types';
import { Badge } from '@/components/ui/badge';

export default function PostPageClient({ post }: { post: { frontmatter: PostFrontmatter, content: string } }) {
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
        <motion.div 
          className="mb-8 md:mb-12" 
          variants={itemVariants}
          whileHover={{ x: -4, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
        >
            <Button variant="ghost" asChild className="text-gray-600 hover:text-gray-900">
                <Link href="/writing">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Writing
                </Link>
            </Button>
        </motion.div>
        
        <motion.article>
          {post.frontmatter.image && (
            <motion.div className="mb-8 md:mb-12 overflow-hidden rounded-lg shadow-lg" variants={itemVariants}>
              <Image
                src={post.frontmatter.image}
                alt={post.frontmatter.title}
                width={1200}
                height={600}
                className="object-cover w-full"
                data-ai-hint="article hero"
                priority
              />
            </motion.div>
          )}

          <motion.header className="mb-8 text-center" variants={itemVariants}>
            <p className="text-base md:text-lg text-gray-500 mb-2">{post.frontmatter.date}</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-800">{post.frontmatter.title}</h1>
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {post.frontmatter.tags && post.frontmatter.tags.map((tag: string) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
            </div>
          </motion.header>

          <motion.div 
            className="prose md:prose-lg lg:prose-xl max-w-none mx-auto text-gray-600 leading-relaxed"
            variants={itemVariants}
          >
            <MDXRemote source={post.content} />
          </motion.div>
        </motion.article>
      </div>
    </motion.div>
  );
}
