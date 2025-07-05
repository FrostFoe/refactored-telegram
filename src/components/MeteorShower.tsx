"use client";

import React, { useRef, useEffect } from 'react';

const MeteorShower = ({ onComplete }: { onComplete: () => void }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let meteors: { x: number; y: number; length: number; speed: number; opacity: number }[];

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      meteors = Array.from({ length: 30 }, () => ({
        x: Math.random() * canvas.width * 2 - canvas.width,
        y: Math.random() * canvas.height * 0.5,
        length: Math.random() * 100 + 50,
        speed: Math.random() * 10 + 5,
        opacity: Math.random() * 0.5 + 0.5,
      }));
    };

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let allMeteorsOffScreen = true;
      meteors.forEach(meteor => {
        const gradient = ctx.createLinearGradient(meteor.x, meteor.y, meteor.x - meteor.length, meteor.y + meteor.length);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${meteor.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(meteor.x - meteor.length, meteor.y + meteor.length);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();

        meteor.x += meteor.speed;
        meteor.y += meteor.speed;
        
        if (meteor.x - meteor.length < canvas.width) {
          allMeteorsOffScreen = false;
        }
      });
      
      if (allMeteorsOffScreen) {
        onComplete();
      } else {
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    setup();
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete]);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none" />;
};

export default MeteorShower;
