"use server";
import { revalidatePath } from "next/cache";
import { BASE_URL } from "../api/api";

export const deleteAction = async (_, data) => {
  console.log(data);
  const id = data.get("id");
  await fetch(BASE_URL, {
    body: JSON.stringify([{ id }]),
    headers: {
      "content-type": "application/json",
    },
    method: "DELETE",
  });
  revalidatePath("/");
};
