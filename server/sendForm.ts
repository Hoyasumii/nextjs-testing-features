"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function sendForm(data: FormData) {
  const message = data.get("message");
  (await cookies()).set("message", message!.toString());

  redirect(`/${message!.toString()}`);
}
