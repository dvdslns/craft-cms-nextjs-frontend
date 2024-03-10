"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedImage({
  id,
  src,
}: {
  id: string;
  src: string;
}) {
  return (
    <motion.div
      layoutId={`wrapper_image_${id}`}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.2 }}
      className="image-container w-full h-auto aspect-video relative mb-8 rounded-lg overflow-hidden "
    >
      <Image className="object-cover" src={src} alt="NextJS Logo" fill />
    </motion.div>
  );
}
