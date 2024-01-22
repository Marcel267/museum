import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart, Trash2 } from "lucide-react";
import { Badge } from "./ui/badge";
import Checkout from "./checkout";
import { Product } from "@prisma/client";
import Image from "next/image";

type Type = {
  cart: Product[];
  deleteArticle: (product: Product) => void;
  articleCount: number;
  articleSum: number;
  setCart: (cart: Product[]) => void;
  updateArticleCountAndSum: () => void;
};

export default function Cart({
  cart,
  deleteArticle,
  articleCount,
  articleSum,
  setCart,
  updateArticleCountAndSum,
}: Type) {
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
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center">
            <ShoppingCart className="mr-4 h-8 w-8" />
            Dein Einkaufswagen
          </SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col justify-between ">
          <div className="flex flex-col justify-between gap-4 pt-8">
            {cart.map((cartItem) => {
              return (
                <section key={cartItem.id} className="flex justify-between">
                  <div className="flex">
                    <Image
                      width={50}
                      height={25}
                      className="h-15 aspect-video w-20 rounded object-cover"
                      alt={`${cartItem.name}-Bild`}
                      src={`/${cartItem.image}`}
                    />
                    <div className="ml-2 flex flex-col sm:ml-4">
                      <span>{cartItem.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {cartItem.price}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4">
                    {/* <Input
                      type="number"
                      value={cartItem.count}
                      className=" w-16"
                    /> */}
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
              <Checkout
                cart={cart}
                articleSum={articleSum}
                setCart={setCart}
                updateArticleCountAndSum={updateArticleCountAndSum}
              />
            )}
          </footer>
        </div>
      </SheetContent>
    </Sheet>
  );
}
