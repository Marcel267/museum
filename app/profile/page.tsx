import React from "react";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Profile() {
  const session = await getServerSession(options);

  return (
    <>
      {session ? (
        <Link href="/api/auth/signout">Signout</Link>
      ) : (
        <div>not logged in</div>
      )}
    </>
  );
}
