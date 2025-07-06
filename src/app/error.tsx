'use client'; 

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-16 text-center">
        <h1 className="text-3xl md:text-5xl font-medium text-gray-800 mb-4">কিছু একটা ভুল হয়েছে!</h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            {error.message || "একটি অপ্রত্যাশিত ত্রুটি ঘটেছে। অনুগ্রহ করে আবার চেষ্টা করুন।"}
        </p>
        <Button onClick={() => reset()} size="lg">
            আবার চেষ্টা করুন
        </Button>
    </div>
  );
}
