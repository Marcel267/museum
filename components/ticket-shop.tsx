"use client";

import { Product } from "@prisma/client";
import TicketCard from "./ticket-card";
import Cart from "./cart";
import { useState } from "react";

export default function TicketShop({ products }: { products: Product[] }) {
  // console.log(products);
  const [articles, setArticles] = useState(products);

  function addArticle(product: Product) {
    console.log(product);
  }

  return (
    <>
      <div className="flex justify-between">
        <h1 className="mb-5 text-3xl">Ticket-Shop</h1>
        <Cart articles={articles} />
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-20 xl:grid-cols-4">
          {products.map((product) => {
            return (
              <TicketCard
                addArticle={addArticle}
                key={product.id}
                product={product}
              />
            );
          })}
        </div>
        <div></div>
      </div>
    </>
  );
}
