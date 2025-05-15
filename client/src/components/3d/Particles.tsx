import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useParticles } from "@/hooks/useParticles";

export default function Particles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { particles } = useParticles(50);

  return (
    <div ref={containerRef} className="w-full h-full opacity-30 dark:opacity-20">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute bg-primary rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            top: particle.y + '%',
            left: particle.x + '%',
          }}
          animate={{
            y: [0, particle.moveY],
            x: [0, particle.moveX],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
