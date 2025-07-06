import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'Daybreak',
  description: 'A design and technology studio.',
};

export default function Home() {
  return <HomePageClient />;
}
