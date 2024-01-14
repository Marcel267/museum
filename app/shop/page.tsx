import TicketShop from "@/components/ticket-shop";
import prisma from "@/lib/prisma";

export default async function Shop() {
  const products = await prisma.product.findMany();
  // console.log(products);

  return <TicketShop products={products} />;
}
