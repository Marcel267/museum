import { Product } from "@prisma/client";

type Card = {
  src: StaticImageData;
  alt: string;
  desc: string;
  width?: number;
  height?: number;
};

type Product = Product & { count?: number };
