import React, { useState } from 'react';

interface PictureCarouselProps {
  images: string[];
}

export function PictureCarousel({ images }: PictureCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const currentImage = images[currentIndex];
  const isVideo = currentImage.endsWith('.mp4') || currentImage.endsWith('.webm') || currentImage.endsWith('.ogg');

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-white mb-3 text-left">Project Media</h2>
      <div className="relative inline-block text-center">
        {isVideo ? (
          <video
            src={`/img/${currentImage}`}
            controls
            className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg"
            onError={(e) => console.error(`Failed to load video: /img/${currentImage}`, e)}
          />
        ) : (
          <img
            src={`/img/${currentImage}`}
            alt={`Project media ${currentIndex + 1}`}
            className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg"
            onError={(e) => console.error(`Failed to load image: /img/${currentImage}`, e)}
          />
        )}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
