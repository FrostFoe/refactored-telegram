import { products } from '@/lib/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Star } from 'lucide-react';
import ProductDetailsClient from '@/components/ProductDetailsClient';
import { Badge } from '@/components/ui/badge';
import StarrySky from '@/components/StarrySky';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <>
        <StarrySky />
        <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl shadow-primary/20">
            <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                data-ai-hint={`${product.category} ${product.name}`}
            />
            </div>

            <div className="flex flex-col justify-center">
            <Badge variant="secondary" className="w-fit mb-2">{product.category}</Badge>
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                    <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.round(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'}`}
                    />
                ))}
                </div>
                <span className="text-muted-foreground text-sm">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="text-muted-foreground text-lg mb-6">{product.description}</p>
            
            <ProductDetailsClient product={product} />
            </div>
        </div>
        </div>
    </>
  );
}
