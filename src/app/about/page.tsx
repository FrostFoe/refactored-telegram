'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
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

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-16">
      <motion.div
        className="w-full max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-3xl md:text-5xl font-medium text-gray-800 mb-12"
          variants={itemVariants}
        >
          Our Mission
        </motion.h1>
        <div className="space-y-8">
          <motion.p
            className="text-2xl md:text-3xl text-gray-600 leading-relaxed"
            variants={itemVariants}
          >
            Daybreak Studio creates brand, web, and software experiences by integrating technology to enhance human craft.
          </motion.p>
          <motion.p
            className="text-2xl md:text-3xl text-gray-600 leading-relaxed"
            variants={itemVariants}
          >
            We work closely with ambitious companies to realize their vision for the future. Through everything we do, we aim to build works of design that are beautiful, intuitive, and functional.
          </motion.p>
          <motion.p
            className="text-2xl md:text-3xl text-gray-700 font-medium leading-relaxed"
            variants={itemVariants}
          >
            Design that feels right. Tech that works well.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
