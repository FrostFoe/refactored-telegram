'use client';

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const DaybreakLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-700">
        <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z" fill="currentColor"/>
        <path d="M12 7C9.24 7 7 9.24 7 12H9C9 10.34 10.34 9 12 9V7Z" fill="currentColor"/>
    </svg>
)

const navItems = ["Services", "Work", "Writing", "About", "Contact"];

const MotionLink = motion(Link);

const Header = () => {
  return (
    <motion.header 
      className="fixed top-6 z-50 w-full flex justify-center"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.5 }}
    >
      <div className="flex items-center gap-2 rounded-full bg-gray-100/50 backdrop-blur-lg border border-gray-200/60 shadow-md px-2 py-1.5 text-gray-700">
        <MotionLink 
          href="/" 
          className="flex items-center gap-2 px-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
            <DaybreakLogo />
            <span className="font-medium text-sm">Daybreak</span>
        </MotionLink>
        <div className="w-px h-5 bg-gray-200/80 mx-1"></div>
        <nav className="flex items-center">
          {navItems.map((item) => (
            <MotionLink
              key={item}
              href="#"
              className={`text-sm px-4 py-1 rounded-full transition-colors duration-200 ${
                item === 'Work'
                  ? 'bg-white text-gray-800 shadow-sm'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              {item}
            </MotionLink>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
