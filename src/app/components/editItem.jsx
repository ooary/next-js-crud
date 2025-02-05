"use client";
import { Button, Form, Input, Select, SelectItem } from "@heroui/react";
import { editItemAction } from "../actions/edit-action";
import { useActionState } from "react";

export default function EditItem({ data }) {
  const [state, formAction, pending] = useActionState(editItemAction, null);

  return (
    <div>
      <div className="space-y-4 p-4">
        <h3 className="text-lg text-black font-semibold">Form Input Data</h3>
        <Form action={formAction}>
          <Input
            label="Nama Item"
            placeholder="Enter your Item"
            type="text"
            name="item"
            defaultValue={data.item}
          />
          <Input
            label="Stock"
            placeholder="Enter your Stock"
            type="number"
            name="stock"
            defaultValue={data.stock}
          />
          <Input
            label="Price"
            placeholder="Enter your Price"
            type="number"
            name="price"
            defaultValue={data.price}
          />
          <Input
            label="Discount"
            placeholder="Enter your Discount"
            type="number"
            name="discount"
            defaultValue={data.discount * 100}
          />
          <Select
            label="Categories"
            name="categories"
            defaultSelectedKeys={[data.categories]}
          >
            <SelectItem key="Food">Food</SelectItem>
            <SelectItem key="Beverage">Beverage</SelectItem>
            <SelectItem key="Misc">Misc</SelectItem>
          </Select>
          <input name="id" defaultValue={data._id} hidden />

          <Button type="submit" color="primary">
            edit
          </Button>
        </Form>
      </div>
    </div>
  );
}
