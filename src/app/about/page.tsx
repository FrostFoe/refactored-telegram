
'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.3 },
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
          <motion.p
            className="text-2xl md:text-3xl text-gray-600 leading-relaxed"
            variants={itemVariants}
          >
            Daybreak Studio creates brand, web, and software experiences by integrating technology to enhance human craft.
          </motion.p>
          <motion.p
            className="mt-8 text-2xl md:text-3xl text-gray-600 leading-relaxed"
            variants={itemVariants}
          >
            We work closely with ambitious companies to realize their vision for the future. Through everything we do, we aim to build works of design that are beautiful, intuitive, and functional.
          </motion.p>
          <motion.p
            className="mt-8 text-2xl md:text-3xl text-gray-700 font-medium leading-relaxed"
            variants={itemVariants}
          >
            Design that feels right. Tech that works well.
          </motion.p>
      </motion.div>
    </div>
  );
}
