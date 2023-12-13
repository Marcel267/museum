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
  // const { data: session, status } = useSession();

  return (
    <>
      {/* {session ? ( */}
      {/* <Link */}
      {/* href="/api/auth/signout" */}
      {/* className={buttonVariants({ variant: "destructive" })} */}
      {/* > */}
      {/* Signout */}
      {/* </Link> */}
      {/* ) : ( */}
      {/* <div>not logged in</div> */}
      {/* )} */}

      {/* {status === "authenticated" && <p>Signed in as {session?.user?.email}</p>} */}

      <Button
        variant="destructive"
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Logout
      </Button>
    </>
  );
}
