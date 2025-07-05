"use client";

import React, { useRef, useEffect } from 'react';

const StarrySky = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; radius: number; alpha: number; twinklingSpeed: number }[];

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      stars = Array.from({ length: 200 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        alpha: Math.random(),
        twinklingSpeed: Math.random() * 0.05
      }));
    };

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.alpha += star.twinklingSpeed;
        if (star.alpha > 1) {
          star.alpha = 1;
          star.twinklingSpeed *= -1;
        } else if (star.alpha < 0) {
          star.alpha = 0;
          star.twinklingSpeed *= -1;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(150, 150, 150, ${star.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    setup();
    draw();

    const handleResize = () => {
      setup();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default StarrySky;
