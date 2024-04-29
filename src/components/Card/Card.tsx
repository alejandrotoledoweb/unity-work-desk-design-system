// components/Card.tsx
import React from "react";
import Image from "next/image";
import Text from "../Text/Text";

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  altText: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  altText,
}) => {
  return (
    <main className="max-w-sm rounded overflow-hidden shadow-lg bg-atoll-100 hover:bg-atoll-200 transition-colors duration-300 font-sans min-w-60">
      {imageUrl && (
        <section className="w-full h-48 relative">
          <Image
            src={imageUrl}
            alt={altText}
            layout="fill" // Uses CSS to adjust the size and layout of the image.
            objectFit="cover" // Resizes the image to cover the frame while maintaining aspect ratio.
          />
        </section>
      )}
      <section className="px-6 py-4">
        <Text variant="h3">{title}</Text>
        <Text variant="p">{description}</Text>
      </section>
    </main>
  );
};
