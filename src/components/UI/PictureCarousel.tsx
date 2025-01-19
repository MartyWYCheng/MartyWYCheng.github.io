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
        {images.map((image, index) => {
          const imagePath = `/img/${image}`;
          console.log(`Image path: ${imagePath}`);
          return (
            <div key={index} className="flex-shrink-0 w-64 h-40">
              <img
                src={imagePath}
                alt={`Project image ${index + 1}`}
                className="w-full h-full object-contain rounded-lg"
                onError={(e) => console.error(`Failed to load image: ${imagePath}`, e)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
