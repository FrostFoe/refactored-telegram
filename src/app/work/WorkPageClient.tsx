'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ProjectFrontmatter } from '@/types';

export default function WorkPageClient({ projects, frontmatter }: { projects: ProjectFrontmatter[], frontmatter: any }) {
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
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-800">{frontmatter.title}</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {frontmatter.subtitle}
        </p>
      </motion.div>

      <motion.div
        className="w-full max-w-4xl divide-y divide-gray-200/60"
        variants={containerVariants}
      >
        {projects.map((project) => (
            <motion.div key={project.slug} variants={itemVariants}>
                <Link href={`/product/${project.slug}`} className="block py-8 md:py-10 group">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                        <span className="text-base md:text-lg text-gray-400">{project.year}</span>
                    </div>
                    <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">{project.description}</p>
                    <div className="flex items-center mt-6 text-sm md:text-base font-medium text-gray-800 transition-transform duration-300 ease-in-out opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0">
                        View Project
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                    </div>
                </Link>
            </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
