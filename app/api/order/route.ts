import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Status } from "@prisma/client";

export async function POST(request: any) {
  try {
    const params: any = await request.json();
    const formData = JSON.parse(params.formData);
    const cart = JSON.parse(params.cart);
    console.log(params);
    const user = await prisma.user.findUnique({
      where: {
        email: formData.email,
      },
    });

    const createdOrder = await prisma.order.create({
      data: {
        userId: user?.id!,
        products: cart,
        // status: Status.PENDING,
        payingMethod: formData.payingMethod,
      },
    });

    if (!createdOrder) {
      throw new Error("Order could not be created");
    }

    return NextResponse.json(
      { message: `Order with id ${createdOrder.id} created` },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
