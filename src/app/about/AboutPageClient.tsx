'use client';

import { motion } from 'framer-motion';

export default function AboutPageClient({ frontmatter, children }: { frontmatter: any, children: React.ReactNode }) {
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
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 pt-24 md:pt-32 pb-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div
        className="w-full max-w-4xl mx-auto text-center"
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-800 mb-8 md:mb-12"
          variants={itemVariants}
        >
          {frontmatter.title}
        </motion.h1>
        <motion.div
          variants={itemVariants}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}
