import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-headline text-2xl font-bold">CosmoCart</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/#featured" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Featured
          </Link>
          <Link href="#" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Apparel
          </Link>
          <Link href="#" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Accessories
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
