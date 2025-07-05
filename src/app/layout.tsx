import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCart from '@/components/FloatingCart';
import KonamiListener from '@/components/KonamiListener';

export const metadata: Metadata = {
  title: 'CosmoCart',
  description: 'Your portal to the universe of interstellar fashion.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <CartProvider>
          <div className="relative flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow z-10">{children}</main>
            <Footer />
            <FloatingCart />
          </div>
          <Toaster />
          <KonamiListener />
        </CartProvider>
      </body>
    </html>
  );
}
