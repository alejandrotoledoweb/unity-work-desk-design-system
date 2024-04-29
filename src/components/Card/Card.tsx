// components/StyledCard.tsx
import React from "react";
import Image from "next/image";

interface StyledCardProps {
  imageUrl: string;
  title: string;
  highlightText: string;
}

export const StyledCard: React.FC<StyledCardProps> = ({
  imageUrl,
  title,
  highlightText,
}) => {
  return (
    <div className="relative w-full max-w-xs h-96 rounded-2xl overflow-hidden shadow-lg">
      <div className="relative w-full h-full">
        <Image
          src={imageUrl}
          alt="Background"
          layout="fill" // Use the available space, maintain aspect ratio
          objectFit="cover" // Cover the area without distorting aspect ratio
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-atoll-300"></div>
      <div className="absolute bottom-0 p-6">
        <div className="text-4xl font-semibold text-atoll-600 drop-shadow-sm tracking-tight leading-none">
          {title}
          <br />
          <span className="text-atoll-800">{highlightText}</span>
        </div>
      </div>
    </div>
  );
};
