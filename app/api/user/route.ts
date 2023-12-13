import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: any) {
  try {
    const params: any = await request.json();
    console.log(params);
    const createdUser = await prisma.user.create({
      data: {
        email: params.email,
        password: params.password1,
        name: params.username,
      },
    });

    if (!createdUser) {
      throw new Error("User could not be created");
    }

    return NextResponse.json(
      { message: `User with id ${createdUser.id} created` },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
