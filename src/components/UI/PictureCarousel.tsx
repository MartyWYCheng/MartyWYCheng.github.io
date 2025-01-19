import React from 'react';

interface PictureCarouselProps {
  images: string[];
}

export function PictureCarousel({ images }: PictureCarouselProps) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-white mb-3">Project Images</h2>
      <div className="flex space-x-4 overflow-x-auto">
        {images.map((image, index) => (
          <img
            key={index}
            src={`/assets/img/${image}`}
            alt={`Project image ${index + 1}`}
            className="w-64 h-40 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}
