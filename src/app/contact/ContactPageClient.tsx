"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";
import { Card } from "@/components/ui/card";

export default function ContactPageClient({
  frontmatter,
}: {
  frontmatter: any;
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 pt-20 sm:pt-24 md:pt-32 pb-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="text-center mb-12 md:mb-16"
        variants={itemVariants}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-800">
          {frontmatter.title}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {frontmatter.subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-6xl">
        <motion.div className="md:col-span-2" variants={itemVariants}>
          <Card className="p-6 md:p-8">
            <ContactForm />
          </Card>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card className="p-6 md:p-8">
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-lg md:text-xl text-gray-800 mb-2 flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-gray-500" /> Email
                </h3>
                <p className="text-base md:text-lg text-gray-600">
                  hello@frostfoe.design
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg md:text-xl text-gray-800 mb-2 flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-gray-500" /> Location
                </h3>
                <p className="text-base md:text-lg text-gray-600">
                  The Internet, Everywhere
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg md:text-xl text-gray-800 mb-2">
                  Start a Conversation
                </h3>
                <p className="text-base md:text-lg text-gray-600">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of something visionary.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
