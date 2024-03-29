import { CardType } from "@/types";
import Image from "next/image";
import React from "react";

export default function Card({
  src,
  alt,
  desc,
  width = 250,
  height = 250,
}: CardType) {
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
