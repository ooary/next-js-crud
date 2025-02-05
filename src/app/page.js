import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@heroui/react";
import CreateItem from "./components/createItem";
import { BASE_URL } from "./api/api";
import DeleteItem from "./components/deleteItem";
import Link from "next/link";

export default async function Home() {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  return (
    <>
      <section className="flex justify-center items-center  bg-gray-100">
        <div className="m-5 p-5 space-y-2 bg-white rounded-lg shadow-lg w-full max-w-4xl">
          <h1 className="text-lg font-semibold">Inventory Price</h1>
          <div className="grid grid-cols-2 space-y-5">
            {data.data.map((item) => {
              const discountPrice = item.price - item.price * item.discount;
              const totalInventory = item.price * item.stock;

              //https://medium.com/codelabs-unikom/membuat-format-rupiah-dengan-javascript-9a3334f42bad
              const numberFormat = (number) => {
                return new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(number);
              };

              return (
                <Card className="max-w-[400px]" key={item.id}>
                  <CardHeader className="flex gap-3">
                    <div className="flex flex-col">
                      <p className="text-lg font-semibold">{item.item}</p>
                    </div>
                  </CardHeader>
                  <Divider />
                  <CardBody>
                    <p>Price : {numberFormat(item.price)}</p>
                    <p>Stock : {item.stock}</p>
                    <p>Total Cost Inventory : {numberFormat(totalInventory)}</p>
                    <p>Discount Price : {numberFormat(discountPrice)}</p>
                  </CardBody>
                  <Divider />
                  <CardFooter className="flex flex-row">
                    <div className="items-start">
                      <p>Discount : {item.discount * 100} %</p>
                    </div>
                    <div className="items-end">
                      <Link
                        href={`edit/${item._id}`}
                        key={item.id}
                        className="bg-indigo-500"
                      >
                        <Button color="secondary"> Edit</Button>
                      </Link>
                    </div>
                    <div className="items-end">
                      <DeleteItem id={item._id} />
                    </div>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
          <CreateItem />
        </div>
      </section>
    </>
  );
}
