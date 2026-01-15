// src/components/PhotoGallery.tsx
'use client'; // Клиентский компонент, т.к. нужен state для lightbox

import { useState } from 'react';
import Image from 'next/image';

interface Photo {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <div>
      {/* Masonry Grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="break-inside-avoid group cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="relative overflow-hidden rounded-xl shadow-md transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.02]">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==" // низкое качество placeholder
              />
              {/* Overlay на hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Увеличить
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox (модалка) */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 transition"
            onClick={() => setSelectedPhoto(null)}
          >
            ×
          </button>

          <div className="relative max-w-5xl max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              width={selectedPhoto.width * 2}
              height={selectedPhoto.height * 2}
              className="rounded-xl shadow-2xl object-contain"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}