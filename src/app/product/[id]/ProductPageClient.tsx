"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { ProjectFrontmatter } from "@/types";

export default function ProductPageClient({
  frontmatter,
  children,
}: {
  frontmatter: ProjectFrontmatter;
  children: React.ReactNode;
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      className="w-full min-h-screen flex flex-col items-center px-4 pt-20 sm:pt-24 md:pt-32 pb-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-full max-w-4xl">
        <motion.div
          className="mb-8 md:mb-12"
          variants={itemVariants}
          whileHover={{
            x: -4,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
        >
          <Button
            variant="ghost"
            asChild
            className="text-gray-600 hover:text-gray-900"
          >
            <Link href="/work">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Work
            </Link>
          </Button>
        </motion.div>

        <motion.article>
          {frontmatter.image && (
            <motion.div
              className="mb-8 md:mb-12 overflow-hidden rounded-lg shadow-xl"
              variants={itemVariants}
            >
              <Image
                src={frontmatter.image}
                alt={frontmatter.title}
                width={1200}
                height={600}
                className="object-cover w-full"
                data-ai-hint="project hero"
                priority
              />
            </motion.div>
          )}

          <motion.header className="mb-8 text-center" variants={itemVariants}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-800">
              {frontmatter.title}
            </h1>
          </motion.header>

          <motion.div
            className="mb-8 md:mb-12 border-b border-t py-6"
            variants={itemVariants}
          >
            <div className="flex flex-wrap gap-x-8 gap-y-6 md:gap-x-12 justify-center items-center text-center">
              <div>
                <p className="text-sm text-gray-500 mb-1">Client</p>
                <p className="font-semibold text-gray-800">
                  {frontmatter.client}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Year</p>
                <p className="font-semibold text-gray-800">
                  {frontmatter.year}
                </p>
              </div>
              <div className="flex-shrink-0">
                <p className="text-sm text-gray-500 mb-1">Services</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {frontmatter.services?.map((service: string) => (
                    <Badge key={service} variant="secondary">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>
              {frontmatter.live_url && (
                <div className="flex-shrink-0">
                  <Button asChild variant="outline">
                    <Link
                      href={frontmatter.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Website <Globe className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>{children}</motion.div>
        </motion.article>
      </div>
    </motion.div>
  );
}
