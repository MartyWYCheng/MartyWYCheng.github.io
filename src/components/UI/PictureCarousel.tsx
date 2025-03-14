import React from 'react';

interface PictureCarouselProps {
  images: string[];
}

export function PictureCarousel({ images }: PictureCarouselProps) {
  if (!images || images.length === 0) {
    return null;
  }

  const isPortrait = (image: string) => {
    const img = new Image();
    img.src = `/img/${image}`;
    return img.naturalHeight > img.naturalWidth;
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-white mb-3">Project Images</h2>
      <div className={images.every(isPortrait) ? "flex space-x-4 overflow-x-auto" : "space-y-4"}>
        {images.map((image, index) => {
          const imagePath = `/img/${image}`;
          console.log(`Image path: ${imagePath}`);
          return (
            <div key={index} className={isPortrait(image) ? "flex-shrink-0 w-full" : "w-full"}>
              <img
                src={imagePath}
                alt={`Project image ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg"
                onError={(e) => console.error(`Failed to load image: ${imagePath}`, e)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
