"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Carousel({
  images,
  title,
  subtitle,
}: {
  images: string[];
  title: string;
  subtitle: string;
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setDirection(0);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute h-full w-full transition-transform duration-500 ease-in-out ${
            index === currentImage
              ? "translate-x-0"
              : index === (currentImage + 1) % images.length
                ? direction === 1
                  ? "translate-x-0"
                  : "translate-x-full"
                : "translate-x-full"
          }`}
        >
          <Image
            src={src}
            alt={`Carousel image ${index + 1}`}
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
            priority={index === 0}
          />
          {index === 0 && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/50">
              <h1 className="text-4xl font-bold text-white lg:text-8xl">
                {title}
              </h1>
              <p className="text-xl text-white lg:text-2xl">{subtitle}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
