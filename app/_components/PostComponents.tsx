"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ContentBlock } from "@/app/_lib/definitions";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/_components/ui/carousel";

const PostWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
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
    <div className="overflow-hidden mb-12">
      <h1
        // initial={{ opacity: 1, y: 100 }}
        // animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 1 }}
        // transition={{
        //   duration: 0.6,
        //   delay: 1,
        //   type: "spring",
        //   stiffness: 100,
        //   damping: 30,
        //   ease: "easeInOut",
        // }}
        className="text-7xl font-bold leading-none mb-6"
      >
        {children}
      </h1>
    </div>
  );
};

const PostContent = ({
  postContentData,
}: {
  postContentData: ContentBlock[];
}) => {
  return (
    <div className="prose max-w-none">
      {postContentData.map((block: ContentBlock, index: number) => {
        if (
          block.typeHandle === "text" &&
          block.text &&
          block.text.length > 0
        ) {
          return (
            <div
              className="mb-8 post-block__text"
              key={block.id}
              dangerouslySetInnerHTML={{ __html: block.text || "" }}
            />
          );
        }
        if (
          block.typeHandle === "image" &&
          block.image &&
          block.image.length > 0
        ) {
          if (block.image.length > 1) {
            return (
              <Carousel key={index}>
                <CarouselContent>
                  {block.image.map((image: any, imageIndex: number) => (
                    <CarouselItem key={imageIndex} className="basis-5/6">
                      <div className="w-full h-auto aspect-video relative mb-8 rounded-lg overflow-hidden">
                        <Image src={image.url} sizes={`(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw`} alt="NextJS Logo" fill />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            );
          } else {
            return (
              <div
                key={index}
                className="w-full h-auto aspect-video relative mb-8 rounded-lg overflow-hidden"
              >
                <Image src={block.image[0].url} alt="NextJS Logo" fill />
              </div>
            );
          }
        }
      })}
    </div>
  );
};

export { PostWrapper, PostTitle, PostContent };
