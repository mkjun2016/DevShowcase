import { useState, useEffect } from "react";
import { getRandomArbitrary } from "@/lib/utils";

interface Particle {
  x: number;
  y: number;
  moveX: number;
  moveY: number;
  size: number;
  opacity: number;
  duration: number;
}

export function useParticles(count: number = 50) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const createdParticles = Array.from({ length: count }, (_, i) => ({
      x: getRandomArbitrary(0, 100),
      y: getRandomArbitrary(0, 100),
      moveX: getRandomArbitrary(-10, 10),
      moveY: getRandomArbitrary(-10, 10),
      size: getRandomArbitrary(2, 5),
      opacity: getRandomArbitrary(0.1, 0.5),
      duration: getRandomArbitrary(10, 20),
    }));

    setParticles(createdParticles);
  }, [count]);

  return { particles };
}
