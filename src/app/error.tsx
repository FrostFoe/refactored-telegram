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
        <h1 className="text-3xl md:text-5xl font-medium text-gray-800 mb-4">Something went wrong!</h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            {error.message || "An unexpected error occurred. Please try again."}
        </p>
        <Button onClick={() => reset()} size="lg">
            Try again
        </Button>
    </div>
  );
}
