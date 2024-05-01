// components/StyledCard.tsx
import React from "react";
import Image from "next/image";
import Text from "../Text/Text";

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
    <main className="relative w-full max-w-xs h-96 rounded-2xl overflow-hidden shadow-lg">
      <section className="relative w-full h-full">
        <Image
          src={imageUrl}
          alt="Background"
          layout="fill" // Use the available space, maintain aspect ratio
          objectFit="cover" // Cover the area without distorting aspect ratio
        />
      </section>
      <section className="absolute inset-0 bg-gradient-to-b from-transparent to-atoll-700"></section>
      <article className="absolute bottom-0 p-6">
        <Text
          variant="h1"
          className=" font-semibold text-atoll-300 drop-shadow-sm tracking-tight leading-none"
        >
          {title}
        </Text>
        <Text variant="h2" className="text-atoll-200 font-bold">
          {highlightText}
        </Text>
      </article>
    </main>
  );
};
