import { Github, Twitter } from 'lucide-react';
import Link from 'next/link';

const DaybreakLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-700">
        <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z" fill="currentColor"/>
        <path d="M12 7C9.24 7 7 9.24 7 12H9C9 10.34 10.34 9 12 9V7Z" fill="currentColor"/>
    </svg>
)

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-gray-200/60 mt-32">
      <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center">
        
        <Link href="/" className="flex flex-col items-center gap-2 mb-6 text-gray-800 transition-colors hover:text-primary">
            <DaybreakLogo />
            <span className="font-semibold text-lg">Daybreak</span>
        </Link>

        <div className="flex items-center gap-6 mb-8">
            <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-gray-500 transition-colors hover:text-gray-800" />
            </Link>
            <Link href="#" aria-label="GitHub">
                <Github className="h-6 w-6 text-gray-500 transition-colors hover:text-gray-800" />
            </Link>
        </div>

        <div className="text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Daybreak. All rights reserved.</p>
          <p className="mt-1">Design that feels right. Tech that works well.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
