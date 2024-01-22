import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Check, Clock } from "lucide-react";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import prisma from "@/lib/prisma";

export default async function Orders() {
  const session = await getServerSession(options);

  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email!,
    },
  });

  const orders = await prisma.order.findMany({
    where: {
      userId: user!.id,
    },
    include: {
      products: true,
    },
  });

  return (
    <>
      <h1 className="mb-5 text-3xl">Bestellungen</h1>
      <Table>
        {/* <TableCaption>Deine Bestellungen</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Produkte</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Bestelldatum</TableHead>
            <TableHead className="text-right">Gesamtpreis</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => {
            return (
              <TableRow>
                <TableCell className="font-medium">1</TableCell>
                <TableCell>
                  <ol>
                    {order.products.map((product) => {
                      return <li>{product.name}</li>;
                    })}
                  </ol>
                </TableCell>
                <TableCell>
                  {order.status === "PENDING" && (
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300">
                      <Clock className="mr-1 h-4 w-4" />
                      Ausstehend
                    </Badge>
                  )}
                  {order.status === "DELIVERED" && (
                    <Badge className="me-2 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                      <Check className="mr-1 h-4 w-4" />
                      Geliefert
                    </Badge>
                  )}
                </TableCell>
                <TableCell>{order.createdAt.toLocaleString('de-DE')}</TableCell>
                <TableCell className="text-right">1234 €</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
