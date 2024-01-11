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
import { Product } from "@prisma/client";

export default function Cart({ articles }: { articles: Product[] }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative">
          {articles.length > 0 && (
            <Badge className="absolute right-[-9%] top-[-25%]">
              {articles.length}
            </Badge>
          )}
          <ShoppingCart className="mr-2 h-4 w-4" />
          Einkaufswagen
        </Button>
      </SheetTrigger>
      {/* <SheetContent> */}
      <SheetContent className="sm:max-w-md">
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
        <div className="flex flex-col gap-4 py-4">
          {articles.map((product) => {
            return (
              <section className="flex justify-between">
                <div className="flex">
                  <div className="h-15 w-20 rounded bg-white text-black">i</div>
                  <div className="ml-4 flex flex-col">
                    <span>{product.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {product.price}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <Input type="number" value={1} className=" w-16" />
                  {/* <Input id="name" value="Pedro Duarte" className="col-span-2" /> */}
                  <Button size="icon" variant="destructive" className="h-8 w-8">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </section>
            );
          })}

          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div> */}
        </div>
        <SheetFooter>
          {/* <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose> */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
