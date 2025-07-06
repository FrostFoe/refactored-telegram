'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

export default function ContactPageClient({ frontmatter }: { frontmatter: any }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, -0.01, 0.9],
      }
    },
  };

  return (
    <motion.div
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="text-center mb-16"
        variants={itemVariants}
      >
        <h1 className="text-3xl md:text-5xl font-medium text-gray-800">{frontmatter.title}</h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {frontmatter.subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl">
        <motion.div
          className="md:col-span-2 bg-white/50 border border-gray-200/80 p-8 rounded-lg shadow-sm"
          variants={itemVariants}
        >
          <ContactForm />
        </motion.div>
        <motion.div
            className="space-y-8 pt-2"
            variants={itemVariants}
        >
            <div>
                <h3 className="font-semibold text-xl text-gray-800 mb-2 flex items-center"><Mail className="w-5 h-5 mr-3 text-gray-500" /> Email</h3>
                <p className="text-lg text-gray-600">hello@daybreak.studio</p>
            </div>
            <div>
                <h3 className="font-semibold text-xl text-gray-800 mb-2 flex items-center"><MapPin className="w-5 h-5 mr-3 text-gray-500" /> Based In</h3>
                <p className="text-lg text-gray-600">The Cloud, Everywhere</p>
            </div>
             <div>
                <h3 className="font-semibold text-xl text-gray-800 mb-2">Start a Conversation</h3>
                <p className="text-lg text-gray-600">
                    We're always open to discussing new projects, creative ideas, or opportunities to be part of something visionary.
                </p>
            </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
