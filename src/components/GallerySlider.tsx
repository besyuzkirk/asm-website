'use client';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
  '/images/asM1.jpg',
  '/images/asm1.jpeg',
  '/images/asm3.jpeg',
];

export default function GallerySlider() {
  return (
    <div className="py-8 bg-gray-100 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">ASM Fotoğraf Galerisi</h2>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        interval={3000}
        dynamicHeight={false}
      >
        {images.map((src, index) => (
          <div key={index} className="h-[500px] flex items-center justify-center overflow-hidden">
            <Image src={src} alt={`ASM Fotoğraf ${index + 1}`} layout="intrinsic" width={800} height={500} className="rounded-lg shadow-md object-cover" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
