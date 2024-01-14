import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart, Trash2 } from "lucide-react";
import { Badge } from "./ui/badge";
import { useLayoutEffect, useState } from "react";
import { Product } from "@/types";
import { useRouter } from "next/navigation";
import Checkout from "./checkout";

type Type = {
  cart: Product[];
  deleteArticle: (product: Product) => void;
  articleCount: number;
  articleSum: number;
};

export default function Cart({
  cart,
  deleteArticle,
  articleCount,
  articleSum,
}: Type) {
  // const [uniqueArticles, setUniqueArticles] = useState<Product[]>([]);

  // useLayoutEffect(() => {
  //   if (cart.length > 0) {
  //     cart.forEach((cartItem) => {
  //       const isDuplicate = uniqueArticles.some(
  //         (uniqueArticle: Product) => uniqueArticle.id === cartItem.id,
  //       );

  //       if (!isDuplicate) {
  //         setUniqueArticles((prev: Product[]) => [...prev, cartItem]);
  //       }
  //     });
  //   }
  // }, [cart]);

  // const router = useRouter();

  // function handleCheckout() {
  //   router.push(
  //     "/shop/checkout",
  //     // query: { objects: JSON.stringify(cart) },
  //   );
  // }

  // console.log("uniqueArticles ", uniqueArticles);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative">
          {articleCount > 0 && (
            <Badge
              variant="secondary"
              className="absolute right-[-5%] top-[-25%] bg-muted py-1"
            >
              {articleCount}
            </Badge>
          )}
          <ShoppingCart className="mr-2 h-4 w-4" />
          Einkaufswagen
        </Button>
      </SheetTrigger>
      {/* <SheetContent> */}
      <SheetContent className="w-full sm:max-w-md">
        {/* <SheetContent className="w-[400px] sm:w-[540px]"> */}
        <SheetHeader>
          {/* <div className="flex space-y-2 text-center sm:text-left"> */}
          <SheetTitle className="flex items-center">
            <ShoppingCart className="mr-4 h-8 w-8" />
            Dein Einkaufswagen
          </SheetTitle>
          {/* </div> */}
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription> */}
        </SheetHeader>
        <div className="flex h-full flex-col justify-between ">
          <div className="flex flex-col justify-between gap-4 pt-8">
            {cart.map((cartItem) => {
              return (
                <section key={cartItem.id} className="flex justify-between">
                  <div className="flex">
                    <div className="h-15 w-20 rounded bg-white text-black">
                      i
                    </div>
                    <div className="ml-2 flex flex-col sm:ml-4">
                      <span>{cartItem.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {cartItem.price}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4">
                    <Input
                      type="number"
                      value={cartItem.count}
                      className=" w-16"
                    />
                    {/* <Input id="name" value="Pedro Duarte" className="col-span-2" /> */}
                    <Button
                      onClick={() => deleteArticle(cartItem)}
                      size="icon"
                      variant="destructive"
                      className="h-8 w-8"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </section>
              );
            })}
          </div>
          <footer className="mb-8 flex flex-col gap-4 rounded-md p-4 text-lg font-semibold text-foreground">
            <span className="flex justify-between">
              Gesamtpreis: <span>{articleSum} €</span>
            </span>
            {articleSum == 0 ? (
              <>
                <Button disabled>Checkout</Button>
              </>
            ) : (
              <Checkout cart={cart} />
            )}
          </footer>
        </div>
        {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div> */}
        {/* <SheetFooter > */}
        {/* <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose> */}
        {/* </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
