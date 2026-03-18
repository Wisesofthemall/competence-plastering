'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

export interface CarouselImage {
  src: string;
  alt: string;
  title?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoPlayInterval?: number;
}

export function ImageCarousel({ images, autoPlayInterval = 5000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [currentIndex, goToNext, autoPlayInterval, images.length]);

  if (images.length === 0) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-xl bg-stone-200 text-stone-500">
        Add your project images
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-stone-100 shadow-lg">
      <div className="relative aspect-[16/10] w-full">
        {images.map((img, index) => (
          <div
            key={`${img.src}-${index}`}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'z-10 opacity-100' : 'z-0 opacity-0'
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority={index === 0}
            />
            {img.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-sm font-medium text-white md:text-base">{img.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={goToPrev}
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 text-stone-800 shadow-md transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 md:left-4 md:p-3"
            aria-label="Previous image"
          >
            <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 text-stone-800 shadow-md transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 md:right-4 md:p-3"
            aria-label="Next image"
          >
            <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all md:h-2.5 md:w-2.5 ${
                  index === currentIndex
                    ? 'bg-amber-400 w-6 md:w-8'
                    : 'bg-white/70 hover:bg-white/90'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
