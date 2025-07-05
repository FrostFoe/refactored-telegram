"use client";

import { useEffect, useState, useCallback } from 'react';

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

export const useKonamiCode = (callback: () => void) => {
  const [keys, setKeys] = useState<string[]>([]);

  const keydownHandler = useCallback((e: KeyboardEvent) => {
    setKeys((prevKeys) => {
      const newKeys = [...prevKeys, e.key].slice(-konamiCode.length);
      if (JSON.stringify(newKeys) === JSON.stringify(konamiCode)) {
        callback();
        return [];
      }
      return newKeys;
    });
  }, [callback]);

  useEffect(() => {
    window.addEventListener('keydown', keydownHandler);
    return () => {
      window.removeEventListener('keydown', keydownHandler);
    };
  }, [keydownHandler]);
};
