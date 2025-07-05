
'use client';

import { motion } from 'framer-motion';
import { Compass, Lightbulb, PenTool, Code } from 'lucide-react';

const services = [
  {
    icon: Compass,
    title: 'Strategy',
    description: 'Defining a clear path to success with market analysis, user research, and product roadmapping.',
  },
  {
    icon: Lightbulb,
    title: 'Product Design',
    description: 'Creating intuitive and beautiful interfaces that are a joy to use, from wireframes to high-fidelity prototypes.',
  },
  {
    icon: PenTool,
    title: 'Branding',
    description: 'Crafting unique brand identities that resonate with your audience and tell a compelling story.',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Building robust and scalable web applications with modern technologies and best practices.',
  },
];

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

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-5xl font-medium text-gray-800">Our Expertise</h1>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          We partner with ambitious teams to create exceptional digital products and experiences.
        </p>
      </motion.div>

      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            className="bg-white/40 backdrop-blur-2xl rounded-3xl p-6 border border-white/50 shadow-xl text-center flex flex-col items-center group"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center mb-6 shadow-inner">
              <service.icon className="w-8 h-8 text-gray-700 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
