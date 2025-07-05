'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-16">
      <motion.h1
        className="text-4xl md:text-5xl font-medium text-center text-gray-800 max-w-2xl leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        A design and technology studio.
      </motion.h1>
    </div>
  );
}
