import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'ডেব্রিক',
  description: 'একটি ডিজাইন এবং প্রযুক্তি স্টুডিও।',
};

export default function Home() {
  return <HomePageClient />;
}
