"use client";

import TicketCard from "./ticket-card";
import Cart from "./cart";
import { useState } from "react";
import { Product } from "@prisma/client";

export default function TicketShop({ products }: { products: Product[] }) {
  const [cart, setCart] = useState<Product[]>([]);
  const [articleCount, setArticleCount] = useState(0);
  const [articleSum, setArticleSum] = useState(0);

  function updateArticleCountAndSum() {
    setCart((updatedCart) => {
      const totalCount = updatedCart.reduce(
        (sum, cartItem) => sum + (cartItem.count || 0),
        0,
      );
      setArticleCount(totalCount);

      const totalSum = updatedCart.reduce(
        (sum, cartItem) => sum + cartItem.price * (cartItem.count || 0),
        0,
      );
      setArticleSum(totalSum);
      return updatedCart;
    });
  }

  function deleteArticle(product: Product) {
    const existingProductIndex = cart.findIndex(
      (cartItem) => cartItem.id === product.id,
    );

    if (existingProductIndex !== -1) {
      setCart((prevCart) => [
        ...prevCart.slice(0, existingProductIndex),
        ...prevCart.slice(existingProductIndex + 1),
      ]);
    }
    updateArticleCountAndSum();
  }

  function addArticle(product: Product) {
    if (cart.length <= 0) {
      product.count = 1;
      setCart([product]);
    } else {
      const existingProductIndex = cart.findIndex(
        (cartProduct) => cartProduct.id === product.id,
      );

      if (existingProductIndex === -1) {
        product.count = 1;
        setCart((prevCart) => [...prevCart, product]);
      } else {
        // if product is already in cart, increment count
        setCart((prevCart) => [
          ...prevCart.slice(0, existingProductIndex),
          {
            ...prevCart[existingProductIndex],
            count: (prevCart[existingProductIndex].count || 0) + 1,
          },
          ...prevCart.slice(existingProductIndex + 1),
        ]);
      }
    }
    updateArticleCountAndSum();
  }

  return (
    <>
      <div className="mb-5 flex flex-col justify-between sm:mb-0 sm:flex-row">
        <h1 className="mb-5 text-3xl">Ticket-Shop</h1>
        <Cart
          deleteArticle={deleteArticle}
          cart={cart}
          articleCount={articleCount}
          articleSum={articleSum}
          setCart={setCart}
        />
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
      </div>
    </>
  );
}
