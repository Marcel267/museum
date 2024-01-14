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
import { Clock } from "lucide-react";

export default function Orders() {
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
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>
              <ol>
                <li>produkt 1</li>
                <li>produkt 2</li>
              </ol>
            </TableCell>
            <TableCell>
              <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300">
                <Clock className="mr-1 h-4 w-4" />
                Ausstehend
              </Badge>
            </TableCell>
            <TableCell>
              {new Date("August 19, 1975 23:15:30").toLocaleString()}
            </TableCell>
            <TableCell className="text-right">250.00 €</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
