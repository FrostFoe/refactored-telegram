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

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-16">
      <motion.div
        className="w-full max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-3xl md:text-5xl font-medium text-gray-800 mb-16 text-center"
          variants={itemVariants}
        >
          What We Do
        </motion.h1>
        <div className="space-y-12 text-left">
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-3">Strategy & Design</h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              We begin by understanding your vision. Through deep research and collaborative workshops, we define a clear strategy that aligns business goals with user needs. This foundation allows us to craft intuitive, beautiful designs that are not only aesthetically pleasing but also highly functional and a joy to use.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
             <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-3">Branding & Identity</h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              A brand is more than a logo; it's a story. We help you tell that story by building a comprehensive brand identity that resonates with your audience. From color palettes to typography, we create a visual language that is both memorable and authentic to your mission.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-3">Technology & Development</h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Our development process is rooted in modern best practices. We build robust, scalable, and performant web applications using technologies that are built to last. We write clean, maintainable code to ensure your digital product can evolve and grow with your business.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
