"use client";

import { Product } from "@prisma/client";
import TicketCard from "./ticket-card";

export default function TicketShop({ products }: { products: Product[] }) {
  // console.log(products);
  return (
    <>
      <h1 className="mb-5 text-3xl">Ticket-Shop</h1>

      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-20">
          {products.map((product) => {
            return <TicketCard product={product} />;
          })}
        </div>
      </div>
    </>
  );
}
