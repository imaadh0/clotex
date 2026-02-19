"use client";
import { motion } from "motion/react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a] text-white">
      <div className="relative flex flex-col items-center justify-center gap-4">
        <div className="overflow-hidden flex items-center">
          {["C", "L", "O", "T", "E", "X"].map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.33, 1, 0.68, 1]
              }}
              className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-xs font-bold tracking-[0.5em] uppercase text-neutral-500">
            Premium Streetwear
          </p>
          <motion.div
            className="h-[2px] bg-white w-24 rounded-full overflow-hidden mt-4"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut"
              }}
              className="h-full w-full bg-neutral-500/50"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;
