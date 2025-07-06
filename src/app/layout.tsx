import type { Metadata } from 'next';
import { Inter, Tiro_Bangla } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const tiro = Tiro_Bangla({
  subsets: ['bengali'],
  weight: '400',
  variable: '--font-tiro',
});

export const metadata: Metadata = {
  title: {
    default: 'ডেব্রিক',
    template: '%s | ডেব্রিক',
  },
  description: 'একটি ডিজাইন এবং প্রযুক্তি স্টুডিও।',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={`${inter.variable} ${tiro.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
