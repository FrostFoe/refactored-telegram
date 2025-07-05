"use client";

import { useState } from 'react';
import type { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductDetailsClientProps {
  product: Product;
}

const ProductDetailsClient = ({ product }: ProductDetailsClientProps) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor);
  };

  return (
    <div className="space-y-6">
      <div>
        <Label className="text-base font-medium mb-2 block">Color: {selectedColor.name}</Label>
        <div className="flex items-center gap-2">
          {product.colors.map(color => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color)}
              className={cn(
                "h-8 w-8 rounded-full border-2 transition-transform duration-200 hover:scale-110",
                selectedColor.name === color.name ? 'border-accent' : 'border-muted-foreground'
              )}
              style={{ backgroundColor: color.hex }}
              aria-label={`Select color ${color.name}`}
            />
          ))}
        </div>
      </div>

      <div>
        <Label className="text-base font-medium mb-2 block">Size</Label>
        <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex flex-wrap gap-2">
          {product.sizes.map(size => (
            <Label
              key={size}
              htmlFor={`size-${size}`}
              className={cn(
                "flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium cursor-pointer transition-colors",
                selectedSize === size
                  ? "bg-primary text-primary-foreground border-primary"
                  : "hover:bg-muted"
              )}
            >
              <RadioGroupItem value={size} id={`size-${size}`} className="sr-only" />
              {size}
            </Label>
          ))}
        </RadioGroup>
      </div>

      <div className="flex items-baseline gap-4">
        <span className="font-headline text-4xl font-bold text-accent">${product.price.toFixed(2)}</span>
      </div>

      <Button size="lg" className="w-full font-bold text-lg py-7" onClick={handleAddToCart}>
        <ShoppingBag className="mr-2 h-6 w-6" />
        Add to Capsule
      </Button>
    </div>
  );
};

export default ProductDetailsClient;
