'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TechCard = ({ index, title, icon }) => {
  const shiftX = index * -60;
  const shiftY = index * -20;
  const tilt = -12; 

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="w-52 h-60 md:w-64 md:h-72  backdrop-blur-md ftrncard border  rounded-xl p-4 text-white relative shadow-md mx-auto"
      style={{
        transform: `perspective(1000px) rotateY(${tilt}deg) translateX(${shiftX}px) translateY(${shiftY}px)`,
        zIndex: 10 - index,
      }}
    >
      <span className="absolute top-2 left-2 text-xs text-white/40 font-mono">
        [{`0${index + 1}`}]
      </span>
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={icon}
          alt={title}
          width={100}
          height={100}
          className="opacity-90"
        />
      </div>
      <div className="z-10 absolute bottom-4 left-0 right-0 text-center">
        <p className="text-sm font-semibold">{title}</p>
      </div>
    </motion.div>
  );
};

export default TechCard;
