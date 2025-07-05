import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'nebula-t-shirt',
    name: 'Nebula T-Shirt',
    description: 'A comfortable cotton t-shirt featuring a vibrant print of the Orion Nebula. Each shirt is unique.',
    price: 29.99,
    image: 'https://htmlcolorcodes.com/assets/images/colors/pastel-pink-color-solid-background-1920x1080.png',
    category: 'Apparel',
    rating: 4.8,
    reviews: 125,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Cosmic Black', hex: '#000000' },
      { name: 'Starlight White', hex: '#FFFFFF' },
    ],
  },
  {
    id: 'supernova-sneakers',
    name: 'Supernova Sneakers',
    description: 'Light-up sneakers that mimic the explosion of a supernova. Perfect for night walks on any planet.',
    price: 149.99,
    image: 'https://htmlcolorcodes.com/assets/images/colors/pastel-pink-color-solid-background-1920x1080.png',
    category: 'Footwear',
    rating: 4.9,
    reviews: 210,
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: [
      { name: 'Galaxy Blue', hex: '#2c3e50' },
      { name: 'Meteor Grey', hex: '#808080' },
    ],
  },
  {
    id: 'galaxy-hoodie',
    name: 'Galaxy Hoodie',
    description: 'A warm and stylish hoodie with a swirling galaxy print. Made with fleece from the Andromeda sector.',
    price: 79.99,
    image: 'https://htmlcolorcodes.com/assets/images/colors/pastel-pink-color-solid-background-1920x1080.png',
    category: 'Apparel',
    rating: 4.7,
    reviews: 98,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Deep Space', hex: '#1d1d1d' }
    ],
  },
  {
    id: 'orion-belt',
    name: 'Orion Belt',
    description: 'A stylish leather belt with a buckle shaped like the Orion constellation. Studded with star-like crystals.',
    price: 45.50,
    image: 'https://htmlcolorcodes.com/assets/images/colors/pastel-pink-color-solid-background-1920x1080.png',
    category: 'Accessories',
    rating: 4.6,
    reviews: 76,
    sizes: ['30', '32', '34', '36', '38'],
    colors: [
      { name: 'Asteroid Brown', hex: '#8B4513' },
      { name: 'Void Black', hex: '#000000' },
    ],
  },
  {
    id: 'rocket-fuel-mug',
    name: 'Rocket Fuel Mug',
    description: 'A ceramic mug that changes its design when hot, revealing a launching rocket. Holds 12oz of your favorite fuel.',
    price: 19.99,
    image: 'https://htmlcolorcodes.com/assets/images/colors/pastel-pink-color-solid-background-1920x1080.png',
    category: 'Accessories',
    rating: 4.9,
    reviews: 342,
    sizes: ['12oz'],
    colors: [
      { name: 'Matte Black', hex: '#222222' }
    ],
  },
  {
    id: 'planet-pendant-necklace',
    name: 'Planet Pendant Necklace',
    description: 'A beautiful necklace featuring a miniature, hand-painted Jupiter pendant, orbiting a silver chain.',
    price: 65.00,
    image: 'https://htmlcolorcodes.com/assets/images/colors/pastel-pink-color-solid-background-1920x1080.png',
    category: 'Jewelry',
    rating: 4.8,
    reviews: 150,
    sizes: ['18-inch'],
    colors: [
      { name: 'Sterling Silver', hex: '#C0C0C0' }
    ],
  },
];
