import Image, { StaticImageData } from "next/image";
import React from "react";

type Card = {
  src: StaticImageData;
  alt: string;
  desc: string;
  width?: number;
  height?: number;
};

export default function Card({
  src,
  alt,
  desc,
  width = 250,
  height = 250,
}: Card) {
  return (
    <div className="max-w-[250px]">
      <Image
        className="aspect-video rounded-md object-cover"
        alt={alt}
        width={width}
        height={height}
        src={src}
      />
      <span className="flex flex-row flex-wrap justify-center py-3 text-sm md:text-base">
        {desc}
      </span>
    </div>
  );
}
