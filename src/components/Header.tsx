'use client';

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const DaybreakLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-700">
        <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z" fill="currentColor"/>
        <path d="M12 7C9.24 7 7 9.24 7 12H9C9 10.34 10.34 9 12 9V7Z" fill="currentColor"/>
    </svg>
)

const navItems = [
  { name: 'Work', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Writing', href: '/writing' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const MotionLink = motion(Link);

const Header = () => {
  const pathname = usePathname();

  return (
    <motion.header 
      className="fixed top-4 z-50 w-full flex justify-center"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
    >
      <div className="flex items-center gap-2 rounded-full bg-gray-100/50 backdrop-blur-lg border border-gray-200/60 shadow-md px-2 sm:px-3 py-2 text-gray-700">
        <MotionLink 
          href="/" 
          className="flex items-center gap-2 px-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
            <DaybreakLogo />
            <span className="font-medium text-sm hidden sm:inline">Daybreak</span>
        </MotionLink>
        <div className="w-px h-5 bg-gray-200/80 mx-1 hidden sm:block"></div>
        <nav className="flex items-center">
          {navItems.map((item) => (
            <MotionLink
              key={item.name}
              href={item.href}
              className={`relative text-sm px-3 sm:px-4 py-1.5 rounded-full transition-colors duration-200 ${
                pathname === item.href
                  ? 'text-gray-800'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {item.name}
              {pathname === item.href && (
                <motion.div
                  className="absolute inset-0 bg-white rounded-full shadow-sm -z-10"
                  layoutId="active-nav-link"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </MotionLink>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
