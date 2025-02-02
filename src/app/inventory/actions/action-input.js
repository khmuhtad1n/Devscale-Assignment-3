"use server";
import { API_URL } from "@/app/inventory/utils/constants";
import { revalidatePath } from "next/cache";

export async function inputAction(_, formData) {
  const gudang =
    formData.get("gudang").charAt(0).toUpperCase() +
    formData.get("gudang").slice(1);
  const item =
    formData.get("item").charAt(0).toUpperCase() +
    formData.get("item").slice(1);
  const quantity = Number(formData.get("quantity"));
  const satuan = formData.get("satuan");

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([
      {
        lokasi_gudang: gudang,
        item,
        quantity,
        satuan,
      },
    ]),
  });

  revalidatePath("/");
}
