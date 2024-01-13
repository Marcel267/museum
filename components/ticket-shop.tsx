"use client";

import TicketCard from "./ticket-card";
import Cart from "./cart";
import { useLayoutEffect, useState } from "react";
import { Product } from "@/types";

export default function TicketShop({ products }: { products: Product[] }) {
  // console.log(products);
  const [cart, setCart] = useState<Product[]>([]);
  const [articleCount, setArticleCount] = useState(0);
  const [articleSum, setArticleSum] = useState(0);

  function updateArticleCountAndSum() {
    // Use the callback provided by setCart to ensure you get the updated state
    setCart((updatedCart) => {
      console.log("cart", updatedCart);

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
      // console.log(articleCount);
      return updatedCart; // Return the updatedCart to complete the state update
    });
  }

  function deleteArticle(product: Product) {
    const existingProductIndex = cart.findIndex(
      (cartItem) => cartItem.id === product.id,
    );

    if (existingProductIndex !== -1) {
      // If the product is found, remove the first occurrence
      setCart((prevCart) => [
        ...prevCart.slice(0, existingProductIndex),
        ...prevCart.slice(existingProductIndex + 1),
      ]);
    }
    updateArticleCountAndSum();
  }

  function addArticle(product: Product) {
    if (cart.length <= 0) {
      // If the cart is empty, set count to 1 and add the product
      product.count = 1;
      setCart([product]);
    } else {
      const existingProductIndex = cart.findIndex(
        (cartProduct) => cartProduct.id === product.id,
      );

      if (existingProductIndex === -1) {
        // If the product is not in the cart, set count to 1 and add it
        product.count = 1;
        setCart((prevCart) => [...prevCart, product]);
      } else {
        // If the product is already in the cart, update its count
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

  // __________________________

  // cart.forEach((cartItem: Product) => {
  // const existingArticle = uniqueArticles.find(
  //   (article) => article.id === product.id,
  // );

  // if (existingArticle) {
  //   existingArticle.count = (existingArticle.count ?? 0) + 1;
  // } else {
  //   product.count = 1;
  //   // uniqueArticlespush(product);
  //   setCart([...uniqueArticles, product]);
  // }
  // });
  // console.log("uniqueArticles ", uniqueArticles);

  // Versuch: einfach produkt hinzufügen und manuell anzahl zählen
  // setCart((prevCart) => [...prevCart, product]);
  // }

  return (
    <>
      <div className="mb-5 flex flex-col justify-between sm:mb-0 sm:flex-row">
        <h1 className="mb-5 text-3xl">Ticket-Shop</h1>
        <Cart
          deleteArticle={deleteArticle}
          cart={cart}
          articleCount={articleCount}
          articleSum={articleSum}
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
