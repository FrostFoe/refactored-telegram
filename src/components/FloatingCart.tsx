"use client";

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Rocket, ShoppingCart, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { Separator } from './ui/separator';
import Link from 'next/link';

const FloatingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, removeFromCart, updateQuantity, cartCount } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-accent shadow-lg shadow-accent/50 transition-all duration-300 hover:scale-110 hover:bg-accent/90"
        aria-label="Open cart"
      >
        <Rocket className="h-8 w-8" />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            {cartCount}
          </span>
        )}
      </Button>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="flex w-full flex-col sm:max-w-lg">
          <SheetHeader>
            <SheetTitle className="font-headline text-2xl">Your Space Capsule</SheetTitle>
          </SheetHeader>
          <Separator />
          {cartItems.length > 0 ? (
            <div className="flex-1 overflow-y-auto pr-4">
              <div className="flex flex-col gap-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center gap-4">
                    <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md" />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Size: {item.selectedSize}, Color: {item.selectedColor.name}
                      </p>
                      <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                        <span>{item.quantity}</span>
                        <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                      <Trash2 className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
              <ShoppingCart className="h-24 w-24 text-muted-foreground/50" />
              <h3 className="font-headline text-xl">Your capsule is empty</h3>
              <p className="text-muted-foreground">Looks like you haven't added any gear to your mission yet.</p>
              <SheetClose asChild>
                <Button asChild>
                    <Link href="/#featured">Start Shopping</Link>
                </Button>
              </SheetClose>
            </div>
          )}
          {cartItems.length > 0 && (
            <>
              <Separator />
              <SheetFooter className="mt-4">
                <div className="w-full space-y-2">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <Button size="lg" className="w-full">Proceed to Checkout</Button>
                </div>
              </SheetFooter>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};

export default FloatingCart;
