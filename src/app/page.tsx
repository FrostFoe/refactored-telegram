'use server';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getProjects, getPageContent } from '@/lib/content';

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

export default async function Home() {
  const projects = await getProjects();
  const { frontmatter } = await getPageContent('home');

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-4 pt-32 pb-16">
      <div
        className="text-center mb-16"
      >
        <h1 className="text-3xl md:text-5xl font-medium text-gray-800">{frontmatter.title}</h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {frontmatter.subtitle}
        </p>
      </div>

      <div
        className="w-full max-w-4xl divide-y divide-gray-200/60"
      >
        {projects.map((project) => (
            <div key={project.slug}>
                <Link href={`/product/${project.slug}`} className="block py-10 group">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-3xl md:text-4xl font-medium text-gray-800 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                        <span className="text-xl text-gray-400">{project.year}</span>
                    </div>
                    <p className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed">{project.description}</p>
                    <div className="flex items-center mt-6 text-md font-medium text-gray-800 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0">
                        View Project
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                </Link>
            </div>
        ))}
      </div>
    </div>
  );
}
