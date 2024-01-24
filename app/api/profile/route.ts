import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { PayingMethod, Product, Status } from "@prisma/client";

export async function DELETE(request: NextRequest) {
  try {
    const params: { userId: number } = await request.json();
    const userId = params.userId;
    console.log(userId);

    // @TODO: refactor
    try {
      const orders = await prisma.order.delete({
        where: {
          id: userId,
        },
      });
    } catch (error) {}

    const user = await prisma.user.delete({
      where: {
        id: userId,
      },
    });

    console.log(user);
    if (!user) {
      throw new Error("User not deleted");
    }

    return NextResponse.json(
      { message: `User with id ${user.id} deleted` },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
