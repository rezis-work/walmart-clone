"use client";
import { getCartTotal } from "@/lib/getCartTotal";
import { useCartStore } from "../../store";
import { groupBySKU } from "@/lib/groupBySKU";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import AddToCart from "./AddToCart";
import { Button } from "./ui/button";

export default function Basket() {
  const cart = useCartStore((state) => state.cart);
  const grouped = groupBySKU(cart);
  const basketTotal = getCartTotal(cart);

  return (
    <div className=" max-w-7xl mx-auto">
      <ul className=" space-y-5 divide-y-2">
        {Object.keys(grouped).map((sku) => {
          const item = grouped[sku][0];
          const total = getCartTotal(grouped[sku]);

          return (
            <li key={uuidv4()} className="flex pt-6 flex-col lg:flex-row">
              {item.images[0] && (
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  width={100}
                  height={100}
                />
              )}

              <div className="flex flex-col md:flex-row lg:space-x-4 lg:pl-4">
                <div className=" flex flex-col items-center justify-center">
                  <p className=" line-clamp-2 font-bold">{item.title}</p>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.description }}
                    className=" line-clamp-1 font-light text-sm mt-2"
                  />
                </div>

                <div className=" flex flex-col border rounded-md p-5 mt-5 md:mt-0">
                  <AddToCart product={item} />

                  <p className=" mt-4 font-bold text-left md:text-right">
                    {total}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className=" flex flex-col justify-end p-5">
        {cart.length > 0 && (
          <>
            <p className=" font-bold text-2xl text-right text-walmart mb-5">
              Total: {basketTotal}
            </p>

            <Button className="mt-5 h-20 bg-walmart hover:bg-walmart/50">
              Checkout
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
