'use client';

import { motion } from 'framer-motion';

const DaybreakLogo = () => (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-700">
        <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z" fill="currentColor"/>
        <path d="M12 7C9.24 7 7 9.24 7 12H9C9 10.34 10.34 9 12 9V7Z" fill="currentColor"/>
    </svg>
)

export default function HomePageClient() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="mb-6">
        <DaybreakLogo />
      </motion.div>
      <motion.h1 
        className="text-4xl sm:text-5xl md:text-6xl font-medium text-gray-800 mb-4"
        variants={itemVariants}
      >
        ডেব্রিক
      </motion.h1>
      <motion.p 
        className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
        variants={itemVariants}
      >
        একটি ডিজাইন এবং প্রযুক্তি স্টুডিও যা ডিজিটাল অভিজ্ঞতা তৈরি করে যা সঠিক মনে হয় এবং ভাল কাজ করে।
      </motion.p>
    </motion.div>
  );
}
