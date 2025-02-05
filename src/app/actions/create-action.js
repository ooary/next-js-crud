"use server";

import { revalidatePath } from "next/cache";
import { BASE_URL } from "../api/api";

export const createItemAction = async (_, data) => {
  const item = data.get("item");
  const stock = Number(data.get("stock"));
  const price = Number(data.get("price"));
  const discount = Number(data.get("discount")) / 100;
  const categories = data.get("categories");

  await fetch(BASE_URL, {
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify([{ item, categories, stock, price, discount }]),
    method: "POST",
  });

  revalidatePath("/");
  console.log(data);
};
