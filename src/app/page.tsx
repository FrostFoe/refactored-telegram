'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-16">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h1 className="text-4xl md:text-6xl font-medium text-gray-800 max-w-3xl leading-tight">
          We build digital experiences that feel like the future.
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Daybreak is a design and technology studio crafting beautiful, intuitive, and high-performance web and software products that resonate with users and drive business goals.
        </p>
      </motion.div>
    </div>
  );
}
