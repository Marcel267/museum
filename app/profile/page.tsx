"use client";

import React from "react";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

// export default async function Profile() {
export default function Profile() {
  // const session = await getServerSession(options);
  const { data: session, status } = useSession();

  // if (!session) {
  //   return <div>No session</div>;
  // }

  return (
    <>
      <div className="flex-col space-y-3">
        <div>
          <span className="text-lg font-bold">Username</span>
          <br />
          <span>{session?.user?.name}</span>
        </div>
        <div>
          <span className="text-lg font-bold">E-Mail</span>
          <br />
          <span>{session?.user?.email}</span>
        </div>

        <Button
          variant="destructive"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Logout
        </Button>
      </div>
    </>
  );
}
