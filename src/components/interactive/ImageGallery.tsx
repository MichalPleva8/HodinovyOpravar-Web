import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Image {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: Image[];
  columns?: 2 | 3 | 4;
}

export default function ImageGallery({ images, columns = 3 }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    // Re-enable body scroll
    document.body.style.overflow = '';
  };

  const goToPrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
  };

  const goToNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedIndex === null) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  const gridColsClass = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <>
      {/* Gallery Grid */}
      <div className={`grid ${gridColsClass} gap-6`}>
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="group relative overflow-hidden rounded-card focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-neutral-800 opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-800 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{image.caption}</p>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-neutral-800/95 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Zavrieť galériu"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Predchádzajúci obrázok"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Nasledujúci obrázok"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-7xl max-h-[90vh] mx-4"
          >
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            {images[selectedIndex].caption && (
              <p className="text-white text-center mt-4 text-lg">
                {images[selectedIndex].caption}
              </p>
            )}
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 px-4 py-2 rounded-full">
            <p className="text-white text-sm font-medium">
              {selectedIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
