'use client';

import Image from 'next/image';

interface BackgroundImageProps {
  transform?: 'none' | 'flipX' | 'rotate180';
}

export default function BackgroundImage({
  transform = 'none'
}: BackgroundImageProps) {
  const getTransformClass = () => {
    switch (transform) {
      case 'flipX':
        return 'scale-x-[-1] scale-110';
      case 'rotate180':
        return 'rotate-180 scale-110';
      default:
        return 'scale-110';
    }
  };

  return (
    <div className="absolute inset-0 z-0">
      <Image
        src="/hero background.png"
        alt="Background"
        fill
        className={`object-cover ${getTransformClass()}`}
      />
      {/* Grain/Blur Overlay */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-3xl"></div>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>
    </div>
  );
}
