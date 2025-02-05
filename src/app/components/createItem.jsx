"use client";
import { useActionState } from "react";
import { Button, Input, Select, SelectItem, Form } from "@heroui/react";
import { createItemAction } from "../actions/create-action";

export default function CreateItem() {
  const [state, formAction, pending] = useActionState(createItemAction, null);

  return (
    <>
      <div className="space-y-4 p-4">
        <h3 className="text-lg text-black font-semibold">Form Input Data</h3>
        <Form action={formAction}>
          <Input
            label="Nama Item"
            placeholder="Enter your Item"
            type="text"
            name="item"
          />
          <Input
            label="Stock"
            placeholder="Enter your Stock"
            type="number"
            name="stock"
          />
          <Input
            label="Price"
            placeholder="Enter your Price"
            type="number"
            name="price"
          />
          <Input
            label="Discount"
            placeholder="Enter your Discount"
            type="number"
            name="discount"
          />
          <Select label="Categories" name="categories">
            <SelectItem key="Food">Food</SelectItem>
            <SelectItem key="Beverage">Beverage</SelectItem>
            <SelectItem key="Misc">Misc</SelectItem>
          </Select>
          <Button type="submit" color="primary" disabled={pending}>
            Create
          </Button>
        </Form>
      </div>
    </>
  );
}
