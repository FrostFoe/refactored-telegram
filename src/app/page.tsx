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
    image: 'https://via.placeholder.com/150/111827/FFFFFF?text=.'
  },
  {
    id: 'superpower',
    tag: 'Superpower',
    title: 'Superpower',
    date: 'June 6, 2024',
    image: 'https://via.placeholder.com/150/111827/FFFFFF?text=.'
  },
  {
    id: 'adidas',
    tag: 'Adidas',
    title: 'Adidas x Crypto the Game',
    date: 'May 15, 2024',
    image: 'https://via.placeholder.com/150/111827/FFFFFF?text=.'
  }
];

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div 
    className="flex items-center gap-4"
    whileHover={{ scale: 1.03 }}
    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
  >
    <div className="relative w-14 h-14 shrink-0">
      <Image src={project.image} alt={project.title} fill className="rounded-xl object-cover" data-ai-hint={project.tag === 'Strategy' ? 'strategy interface' : project.title.toLowerCase()} />
      {project.tag === 'Strategy' && (
         <div className="absolute inset-0 bg-black/40 rounded-xl flex items-start justify-start p-1.5">
          <div className="bg-black/70 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md border border-white/20">Strategy</div>
        </div>
      )}
    </div>
    <div className="flex-1">
      <h3 className="text-sm font-semibold text-gray-800">{project.title}</h3>
      <p className="text-xs text-gray-500">{project.date}</p>
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
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-16 overflow-x-hidden">
      <motion.h1 
        className="text-3xl md:text-5xl font-medium text-center text-gray-800 max-w-sm md:max-w-lg leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
      >
        A design and technology studio.
      </motion.h1>
      
      <motion.div 
        className="relative w-full max-w-7xl h-[700px] lg:h-[800px] mt-16 sm:mt-20 mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="absolute top-28 left-4 md:top-24 md:left-[15%] w-32 h-24 md:w-48 md:h-32 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/30 overflow-hidden shadow-lg" 
          style={{ transform: 'rotate(-5deg)' }}
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5, rotate: -7 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Image src="https://via.placeholder.com/300/e2e8f0/e2e8f0?text=." alt="Abstract colors" fill className="object-cover opacity-50" data-ai-hint="abstract color blur"/>
        </motion.div>
        
        <motion.div 
          className="absolute top-1/2 -translate-y-1/2 left-[50%] -translate-x-[calc(100%+120px)] sm:-translate-x-[calc(100%+160px)] md:-translate-x-[calc(100%+200px)] lg:-translate-x-[calc(100%+280px)] w-60 sm:w-64 md:w-72 bg-white/40 backdrop-blur-2xl rounded-3xl p-4 md:p-5 border border-white/50 shadow-2xl space-y-3 md:space-y-5"
          style={{ transform: 'rotate(-8deg)' }}
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5, rotate: -10 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {projects.map((p, i) => (
            <React.Fragment key={p.id}>
              <ProjectCard project={p} />
              {i < projects.length - 1 && <div className="h-px bg-gray-500/20" />}
            </React.Fragment>
          ))}
        </motion.div>

        <motion.div 
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[280px] h-[210px] sm:w-[400px] sm:h-[300px] lg:w-[500px] lg:h-[375px] bg-gray-900/80 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden shadow-2xl z-10"
          variants={itemVariants}
          whileHover={{ scale: 1.03, y: -4 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
            <Image src="https://via.placeholder.com/600x400/000000/FFFFFF?text=." alt="Adeline Preview" fill className="object-cover" data-ai-hint="code editor landscape" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-between">
                <div>
                    <h3 className="text-white font-semibold">Adeline</h3>
                    <p className="text-sm text-gray-300">Preview</p>
                </div>
                <motion.div 
                  className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                </motion.div>
            </div>
        </motion.div>

        <motion.div 
          className="absolute top-12 right-4 md:top-10 md:right-[15%] w-48 h-40 md:w-80 md:h-64 bg-white/20 backdrop-blur-lg rounded-3xl border border-white/30 overflow-hidden shadow-xl" 
          style={{ transform: 'rotate(6deg)' }}
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5, rotate: 8 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
             <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
             >
                <Image src="https://via.placeholder.com/400/f1f5f9/f1f5f9?text=." alt="Unicorn illustration" fill className="object-cover" data-ai-hint="unicorn abstract" />
             </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-16 right-4 md:bottom-24 md:right-[20%] w-28 h-24 md:w-40 md:h-32 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/70 shadow-2xl flex flex-col items-center justify-center space-y-3" 
          style={{ transform: 'rotate(10deg)' }}
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5, rotate: 12 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
            <motion.div 
              className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center shadow-inner"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 opacity-80"></div>
            </motion.div>
            <div className="flex gap-2.5">
                <motion.div className="w-3.5 h-3.5 rounded-full bg-blue-500 border border-white/50" animate={{ y: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0 }}></motion.div>
                <motion.div className="w-3.5 h-3.5 rounded-full bg-orange-500 border border-white/50" animate={{ y: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}></motion.div>
                <motion.div className="w-3.5 h-3.5 rounded-full bg-red-500 border border-white/50" animate={{ y: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}></motion.div>
            </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
