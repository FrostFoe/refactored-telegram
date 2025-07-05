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
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
                <Link href="/" className="flex items-center gap-2 mb-4">
                    <DaybreakLogo />
                    <span className="font-semibold text-gray-800">Daybreak</span>
                </Link>
                <p className="text-sm text-gray-600">A design and technology studio.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 gap-8">
                <div>
                    <h4 className="font-semibold text-gray-800 mb-4">Navigate</h4>
                    <ul className="space-y-2">
                        <li><Link href="/" className="text-gray-600 hover:text-gray-900">Work</Link></li>
                        <li><Link href="/services" className="text-gray-600 hover:text-gray-900">Services</Link></li>
                        <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-semibold text-gray-800 mb-4">Engage</h4>
                    <ul className="space-y-2">
                        <li><Link href="/writing" className="text-gray-600 hover:text-gray-900">Writing</Link></li>
                        <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-semibold text-gray-800 mb-4">Connect</h4>
                    <div className="flex items-center gap-4">
                        <Link href="#" aria-label="Twitter">
                            <Twitter className="h-5 w-5 text-gray-500 transition-colors hover:text-gray-800" />
                        </Link>
                        <Link href="#" aria-label="GitHub">
                            <Github className="h-5 w-5 text-gray-500 transition-colors hover:text-gray-800" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-12 border-t border-gray-200/60 pt-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Daybreak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
