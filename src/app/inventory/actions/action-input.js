"use server";
import { API_URL } from "@/app/inventory/utils/constants";
import { revalidatePath } from "next/cache";

export async function inputAction(_, formData) {
  const gudangRaw = formData.get("gudang").replace(/[^a-zA-Z\s]/g, "");
  const gudang = gudangRaw.charAt(0).toUpperCase() + gudangRaw.slice(1);
  const itemRaw = formData.get("item").replace(/[^a-zA-Z\s]/g, "");
  const item = itemRaw.charAt(0).toUpperCase() + itemRaw.slice(1);
  const quantity = Number(formData.get("quantity"));
  const satuan =
    formData.get("satuan").charAt(0).toUpperCase() +
    formData.get("satuan").slice(1);

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
