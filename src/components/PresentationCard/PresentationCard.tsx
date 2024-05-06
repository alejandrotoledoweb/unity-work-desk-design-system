import React from "react";
import Image from "next/image";
import Text from "../Text/Text";

interface PresentationCardProps {
  company: string;
  tagline: string;
  imageUrl: string;
}

export const PresentationCard: React.FC<PresentationCardProps> = ({
  company,
  tagline,
  imageUrl,
}) => {
  return (
    <article className="flex flex-col bg-gray-200 w-full h-screen justify-center items-center gap-16" >
      <Image
        src={imageUrl}
        alt="Working desk"
        width={400}
        height={400}
      />
      <div className="flex flex-col gap-4">
        <Text variant="h1" className="font-black text-center">
          {company}
        </Text>
        <Text variant="p" className="text-center">
          {tagline}
        </Text>
      </div>
    </article>
  );
};