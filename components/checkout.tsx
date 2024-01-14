import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Product } from "@prisma/client";
import { Loader2 } from "lucide-react";

type Type = {
  articleSum: number;
  cart: Product[];
  setCart: (cart: Product[]) => void;
};

const formSchema = z.object({
  email: z.string().email(),
  username: z.string(),
  street: z.string(),
  payingMethod: z.enum(["CARD", "COD"]),
});

export default function Checkout({ articleSum, cart, setCart }: Type) {
  const { data: session } = useSession();
  const myRef = useRef<HTMLButtonElement>(null);
  const [loading, setLoading] = useState(false);
  const [createOrderError, setCreateOrderError] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: session?.user?.name!,
      email: session?.user?.email!,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    setLoading(true);
    try {
      const res = await fetch(`/api/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formData: JSON.stringify(values),
          articleSum,
          cart: JSON.stringify(cart),
        }),
      });

      if (res.ok) {
        setCreateOrderError("");
        // setCart([]);
      } else {
        setCreateOrderError("Bestellung konnte nicht angelegt werden");
        console.error("Failed to add order:", res.status, res.body);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }

    if (myRef.current) {
      myRef.current.click();
    }
    console.log(values);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-full">Checkout</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-4">Lieferadresse</AlertDialogTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-Mail</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="street"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Straße</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="payingMethod"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Bezahlmethode</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="CARD" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Kreditkarte
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="COD" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Bezahlen bei Lieferung
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="p-4 text-lg font-semibold ">
                <span className="flex justify-between">
                  Gesamtpreis: <span>{articleSum} €</span>
                </span>
              </div>
              <div className="flex justify-end space-x-2">
                <AlertDialogCancel>Abbrechen</AlertDialogCancel>
                {loading ? (
                  <Button disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Bitte warten
                  </Button>
                ) : (
                  <Button type="submit">Bezahlen</Button>
                )}
              </div>
            </form>
          </Form>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction ref={myRef} className="hidden">
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
