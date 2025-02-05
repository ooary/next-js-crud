"use client";
import { useActionState } from "react";
import { deleteAction } from "../actions/delete-action";
import { Button } from "@heroui/react";

export default function DeleteItem({ id }) {
  const [state, formAction, pending] = useActionState(deleteAction, null);
  return (
    <>
      <form action={formAction}>
        <input name="id" defaultValue={id} hidden />
        <Button color="danger" type="submit">
          Delete
        </Button>
      </form>
    </>
  );
}
