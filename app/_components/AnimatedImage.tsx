"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedImage({
  id,
  src,
  alt,
  isThumb
}: {
  id: string;
  src: string;
  alt: string;
  isThumb?: boolean;
}) {
  return (
    <motion.div
      // layoutId={`wrapper_image_${id}`}
      layout
      transition={{ duration: 0.4, ease: "easeInOut" }}
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.2 }}
      className={`image-container w-full h-auto aspect-video relative mb-8 ${isThumb ? 'rounded-lg' : 'rounded-none'}  overflow-hidden`}
    >
      <Image
        className="object-cover"
        sizes={`${isThumb ? '25vw,' : '' } (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw`}
        src={src}
        alt={alt? alt : "Image"}
        fill
      />
    </motion.div>
  );
}
