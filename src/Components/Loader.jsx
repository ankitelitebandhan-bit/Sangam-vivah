import React, { useState, useEffect } from "react";

const word = "SANGAMVIVAH";

const Loader = ({ onFinish }) => {
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    if (visibleLetters < word.length) {
      const timer = setTimeout(() => {
        setVisibleLetters((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      const finishTimer = setTimeout(() => {
        if (onFinish) onFinish();
      }, 1000);
      return () => clearTimeout(finishTimer);
    }
  }, [visibleLetters]);

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex space-x-2 text-4xl text-pink-600 italic  font-bold tracking-widest">
        {word.split("").map((letter, index) => (
          <span
            key={index}
            className={`transition-opacity duration-500 ${
              index < visibleLetters ? "opacity-100" : "opacity-0"
            }`}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loader;
