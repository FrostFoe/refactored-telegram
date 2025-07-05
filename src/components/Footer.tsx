import { Github, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-gray-200/60 py-6 md:py-8 mt-24">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Daybreak. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-5 w-5 text-gray-400 transition-colors hover:text-gray-800" />
          </Link>
          <Link href="#" aria-label="GitHub">
            <Github className="h-5 w-5 text-gray-400 transition-colors hover:text-gray-800" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
