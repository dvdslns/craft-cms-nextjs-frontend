"use client";
import { motion } from "framer-motion";

const PostWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 30,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
};
const PostTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-hidden">
      <motion.h1
        initial={{ opacity: 1, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 1,
          type: "spring",
          stiffness: 100,
          damping: 30,
          ease: "easeInOut",
        }}
        className="text-7xl font-bold leading-none mb-6"
      >
        {children}
      </motion.h1>
    </div>
  );
};

export { PostWrapper, PostTitle };
