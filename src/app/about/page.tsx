
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
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
        className="bg-white/40 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/50 shadow-2xl w-full max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <h1 className="text-4xl md:text-5xl font-medium text-gray-800 leading-tight">
              We are a small, passionate team of creators.
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Daybreak is a design and technology studio founded on the belief that great products are born from collaboration, curiosity, and a relentless focus on the user. We partner with startups and established companies to turn ambitious ideas into beautiful, functional, and impactful digital experiences.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Our approach is hands-on and transparent. We work as an extension of your team, providing the strategy, design, and engineering expertise needed to bring your vision to life.
            </p>
          </motion.div>
          <motion.div
            className="relative w-full h-80 md:h-[500px] rounded-3xl overflow-hidden border border-white/30 shadow-2xl"
            variants={itemVariants}
            initial="hidden" 
            animate="visible"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
          >
            <Image
              src="https://placehold.co/600x800.png"
              alt="The Daybreak team"
              fill
              className="object-cover"
              data-ai-hint="team portrait candid"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
