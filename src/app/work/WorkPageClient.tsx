'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ProjectFrontmatter } from '@/types';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

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
        className="w-full max-w-4xl space-y-8"
        variants={containerVariants}
      >
        {projects.map((project) => (
            <motion.div 
              key={project.slug} 
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2, ease: 'easeInOut' } }}
              whileTap={{ scale: 0.98 }}
            >
                <Link href={`/product/${project.slug}`} className="block group">
                  <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {project.image && (
                        <div className="overflow-hidden">
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={800}
                              height={400}
                              className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                              data-ai-hint="project thumbnail"
                            />
                        </div>
                    )}
                    <div className="p-6 md:p-8">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                            <h3 className="text-2xl sm:text-3xl font-medium text-gray-800 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                            <span className="text-base md:text-lg text-gray-400 mt-1 sm:mt-0">{project.year}</span>
                        </div>
                        <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">{project.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.services.slice(0, 3).map((service) => (
                              <Badge key={service} variant="secondary">{service}</Badge>
                          ))}
                        </div>
                        <div className="flex items-center mt-6 text-sm md:text-base font-medium text-gray-800 transition-colors duration-300 group-hover:text-primary">
                            View Project
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                        </div>
                    </div>
                  </Card>
                </Link>
            </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
