import ProductSlider from '@/components/ProductSlider';
import StarrySky from '@/components/StarrySky';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <StarrySky />
      <div className="container mx-auto px-4">
        <section className="text-center py-20 md:py-32">
          <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Welcome to CosmoCart
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Your portal to the universe of interstellar fashion. Explore galaxies of style and wear the cosmos.
          </p>
          <Button asChild size="lg" className="font-bold text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/50">
            <Link href="#featured">Explore Collections</Link>
          </Button>
        </section>
        
        <section id="featured" className="py-16">
          <h2 className="font-headline text-4xl font-bold text-center mb-12">
            Featured Products
          </h2>
          <ProductSlider />
        </section>
      </div>
    </>
  );
}
