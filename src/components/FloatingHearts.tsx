import React, { useMemo } from "react";

const FloatingHearts = () => {
  const hearts = useMemo(
    () =>
      Array.from({ length: 35 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 20 + 15,
        duration: Math.random() * 15 + 15,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute text-pink-400 opacity-20 animate-float"
          style={{
            left: `${heart.left}%`,
            bottom: "-50px", // start below screen
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
