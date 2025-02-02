"use server";
import { API_URL } from "@/app/inventory/utils/constants";
import { revalidatePath } from "next/cache";

export async function deleteAction(id) {
  await fetch(API_URL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([id]),
  });
  revalidatePath("/");
}
