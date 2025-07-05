"use client";

import type { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from './ui/button';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultSize = product.sizes[0];
    const defaultColor = product.colors[0];
    addToCart(product, defaultSize, defaultColor);
    toast({
        title: "Quick Add!",
        description: `${product.name} (Size: ${defaultSize}, Color: ${defaultColor.name}) added to cart.`
    })
  };

  return (
    <Link href={`/product/${product.id}`} className="block group">
      <Card className="w-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-accent/20 hover:border-accent/50 hover:-translate-y-2">
        <CardContent className="p-0">
          <div className="relative aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={`${product.category} ${product.name}`}
            />
          </div>
          <div className="p-4 space-y-2">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-lg truncate pr-2">{product.name}</h3>
              <p className="font-bold text-lg text-accent">${product.price.toFixed(2)}</p>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm text-muted-foreground">{product.rating} ({product.reviews} reviews)</span>
              </div>
              <Button size="sm" variant="outline" onClick={handleAddToCart}>
                <ShoppingBag className="mr-2 h-4 w-4" />
                Quick Add
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
