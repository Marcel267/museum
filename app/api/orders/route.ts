import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { PayingMethod, Product, Status } from "@prisma/client";

export async function POST(request: any) {
  try {
    // setTimeout(() => {}, 2000);
    const params: any = await request.json();
    const formData = JSON.parse(params.formData);
    const cart = JSON.parse(params.cart);
    const articleSum = params.articleSum;
    // console.log(typeof articleSum);
    const user = await prisma.user.findUnique({
      where: {
        email: formData.email,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const createdOrder = await prisma.order.create({
      data: {
        userId: user?.id!,
        products: {
          connect: cart.map((product: Product) => ({ id: product.id })),
        },
        status: Status.DELIVERED,
        payingMethod: formData.payingMethod as PayingMethod,
        total: articleSum,
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
