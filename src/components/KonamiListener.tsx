"use client";

import React, { useState, useCallback } from 'react';
import { useKonamiCode } from '@/hooks/useKonamiCode';
import MeteorShower from './MeteorShower';

const KonamiListener = () => {
  const [showShower, setShowShower] = useState(false);

  const onKonamiCode = useCallback(() => {
    setShowShower(true);
  }, []);
  
  useKonamiCode(onKonamiCode);

  const handleAnimationComplete = useCallback(() => {
    setShowShower(false);
  }, []);

  return showShower ? <MeteorShower onComplete={handleAnimationComplete} /> : null;
};

export default KonamiListener;
