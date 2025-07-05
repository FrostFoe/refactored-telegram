import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StarrySky from '@/components/StarrySky';
import KonamiListener from '@/components/KonamiListener';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Daybreak',
  description: 'A design and technology studio.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        <StarrySky />
        <KonamiListener />
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
