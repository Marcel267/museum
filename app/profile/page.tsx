"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Loader2 } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// export default async function Profile() {
export default function Profile() {
  // const session = await getServerSession(options);
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  // @TODO: use deletionError
  const [deletionError, setDeletionError] = useState("");

  async function deleteProfile() {
    setLoading(true);
    try {
      const res = await fetch(`/api/profile`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: session?.user?.id,
        }),
      });

      if (res.ok) {
        setDeletionError("");
        signOut({ callbackUrl: "/" });
        console.log(res);
      } else {
        setDeletionError("Profil konnte nicht gelöscht werden");
        console.error("Failed to delete profile:", res.status, res.body);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }

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

        <Dialog>
          <DialogTrigger>
            <Button variant="destructive">Profil löschen</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Bist du sicher?</DialogTitle>
              <DialogDescription>
                Diese Aktion kann nicht rückgängig gemacht werden. Dadurch wird
                Ihr Konto dauerhaft gelöscht und Ihre Daten werden von unseren
                Servern entfernt.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Abbrechen
                </Button>
              </DialogClose>
              {loading ? (
                <Button disabled variant="destructive">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Profil löschen
                </Button>
              ) : (
                <Button onClick={() => deleteProfile()} variant="destructive">
                  Profil löschen
                </Button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
