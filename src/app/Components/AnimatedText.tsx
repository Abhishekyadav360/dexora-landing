'use client'
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["Crypto", "Crypto", "Crypto", "Crypto"];

const AnimatedText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="relative h-full w-fit overflow-visible">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedText;
