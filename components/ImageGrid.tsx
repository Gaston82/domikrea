import React from 'react';
import Image from 'next/image';

export interface Image {
  src: string;
  alt: string;
}

export interface ImageGridProps {
  images: Image[];
}

const ImageGrid = ({ images }: ImageGridProps) => {
  return (
    <div className="grid w-[80%] gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {images.map((image, index) => (
        <Image
          key={index}
          className="w-full h-[250px] object-cover"
          src={image.src}
          alt={image.alt}
          width={200}
          height={100}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
