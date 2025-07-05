
'use client';

import Image from 'next/image';
import React from 'react';
import type { Project } from '@/types';
import { motion } from 'framer-motion';

const projects: Project[] = [
  {
    id: 'dropbox',
    tag: 'Strategy',
    title: 'Dropbox',
    date: 'January 15, 2025',
    image: 'https://placehold.co/150x150.png'
  },
  {
    id: 'superpower',
    tag: 'Superpower',
    title: 'Superpower',
    date: 'June 6, 2024',
    image: 'https://placehold.co/150x150.png'
  },
  {
    id: 'adidas',
    tag: 'Adidas',
    title: 'Adidas x Crypto the Game',
    date: 'May 15, 2024',
    image: 'https://placehold.co/150x150.png'
  }
];

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div 
    className="flex items-center gap-6"
    whileHover={{ scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
  >
    <div className="relative w-16 h-16 shrink-0">
      <Image src={project.image} alt={project.title} fill className="rounded-2xl object-cover" data-ai-hint={project.id === 'superpower' ? 'woman silhouette sunset' : project.id} />
      {project.tag === 'Strategy' && (
         <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-start justify-start p-1.5">
          <div className="bg-black/70 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md border border-white/20">Strategy</div>
        </div>
      )}
    </div>
    <div className="flex-1">
      <h3 className="text-base font-semibold text-gray-800">{project.title}</h3>
      <p className="text-sm text-gray-500">{project.date}</p>
    </div>
  </motion.div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
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

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center px-4 pt-24 md:pt-32 pb-16 overflow-x-hidden">
      <motion.h1 
        className="text-4xl md:text-5xl font-medium text-center text-gray-800 max-w-lg leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
      >
        A design and technology studio.
      </motion.h1>
      
      <motion.div 
        className="relative w-full max-w-6xl h-[850px] mt-12 sm:mt-16 mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="absolute top-2 left-[5%] w-48 h-64 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/30 overflow-hidden shadow-lg" 
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5, zIndex: 22 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Image src="https://placehold.co/300x400.png" alt="Abstract person" fill className="object-cover opacity-80" data-ai-hint="person abstract blur"/>
        </motion.div>
        
        <motion.div 
          className="absolute top-1/2 -translate-y-[45%] left-0 md:left-[10%] lg:left-[15%] w-[340px] bg-white/40 backdrop-blur-2xl rounded-3xl p-6 border border-white/50 shadow-2xl space-y-6 z-20"
          variants={itemVariants}
           whileHover={{ scale: 1.02, y: -5, x: -5, zIndex: 21 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </motion.div>

        <motion.div 
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[320px] h-[240px] sm:w-[480px] sm:h-[360px] lg:w-[500px] lg:h-[375px] bg-gray-900/80 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden shadow-2xl z-10"
          variants={itemVariants}
          whileHover={{ scale: 1.03, y: -4, zIndex: 22 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
            <Image src="https://placehold.co/600x400.png" alt="Adeline Preview" fill className="object-cover opacity-90" data-ai-hint="code editor perspective" />
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
                <div>
                    <h3 className="text-white font-semibold text-lg">Adeline</h3>
                    <p className="text-sm text-gray-300">Preview</p>
                </div>
            </div>
        </motion.div>

        <motion.div 
          className="absolute top-20 right-[2%] md:right-[5%] lg:right-[8%] w-[320px] h-[280px] sm:w-[380px] sm:h-[320px] bg-white/20 backdrop-blur-lg rounded-3xl border border-white/30 overflow-hidden shadow-xl" 
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5, zIndex: 22 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
             <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
             >
                <Image src="https://placehold.co/400x400.png" alt="Unicorn illustration" fill className="object-cover" data-ai-hint="unicorn iridescent" />
             </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-20 right-[12%] md:right-[15%] lg:right-[18%] w-36 h-36 bg-white/60 backdrop-blur-xl rounded-[32px] border border-white/70 shadow-2xl flex flex-col items-center justify-center space-y-4"
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5, zIndex: 22 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
            <motion.div 
              className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center shadow-inner"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
                 <div className="w-11 h-11 rounded-full bg-white/90 shadow-inner"></div>
            </motion.div>
            <div className="flex gap-4">
                <motion.div className="w-3.5 h-3.5 rounded-full bg-blue-500 border border-white/50" animate={{ y: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0 }}></motion.div>
                <motion.div className="w-3.5 h-3.5 rounded-full bg-orange-500 border border-white/50" animate={{ y: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}></motion.div>
                <motion.div className="w-3.5 h-3.5 rounded-full bg-red-500 border border-white/50" animate={{ y: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}></motion.div>
            </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
