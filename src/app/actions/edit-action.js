"use server";
import { revalidatePath } from "next/cache";
import { BASE_URL } from "../api/api";
import { redirect } from "next/navigation";

export const editItemAction = async (_, data) => {
  const item = data.get("item");
  const _id = data.get("id");
  const stock = Number(data.get("stock"));
  const price = Number(data.get("price"));
  const discount = Number(data.get("discount")) / 100;
  const categories = data.get("categories");

  await fetch(BASE_URL, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ _id, item, categories, stock, price, discount }),
  });

  redirect("/");
};
