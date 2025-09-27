"use client";

import { useState, useEffect } from 'react';

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
};

const FloatingParticles = ({ count = 30 }: { count?: number }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 15 + 10, // 10 to 25 seconds
        delay: Math.random() * 10,
      });
    }
    setParticles(newParticles);
  }, [count]);

  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle absolute rounded-full bg-accent/30"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.x}%`,
            top: `${p.y}%`,
            animationName: 'float',
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
