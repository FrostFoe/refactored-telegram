'use client';

import { Github, Twitter } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const DaybreakLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-700">
        <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z" fill="currentColor"/>
        <path d="M12 7C9.24 7 7 9.24 7 12H9C9 10.34 10.34 9 12 9V7Z" fill="currentColor"/>
    </svg>
)

const Footer = () => {
  return (
    <motion.footer 
      className="relative z-10 border-t border-gray-200/60 mt-32"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-4 py-10 md:py-16 flex flex-col items-center text-center">
        
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
        >
            <Link href="/" className="flex flex-col items-center gap-2 mb-4 md:mb-6 text-gray-800 transition-colors hover:text-primary">
                <DaybreakLogo />
                <span className="font-semibold text-base md:text-lg">FrostFoe</span>
            </Link>
        </motion.div>

        <div className="flex items-center gap-6 mb-6 md:mb-8">
            <motion.a href="#" aria-label="Twitter" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
                <Twitter className="h-6 w-6 text-gray-500 transition-colors hover:text-gray-800" />
            </motion.a>
            <motion.a href="#" aria-label="GitHub" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
                <Github className="h-6 w-6 text-gray-500 transition-colors hover:text-gray-800" />
            </motion.a>
        </div>

        <div className="text-sm text-gray-500">
          <p>© {new Date().getFullYear()} FrostFoe. All rights reserved.</p>
          <p className="mt-1">Design that feels right. Technology that works better.</p>
        </div>

      </div>
    </motion.footer>
  );
};

export default Footer;
