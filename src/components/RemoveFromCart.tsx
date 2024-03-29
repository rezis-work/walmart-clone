"use client";

import { useCartStore } from "../../store";
import { Product } from "../../typings/productTypings";
import { Button } from "./ui/button";

export default function RemoveFromCart({ product }: { product: Product }) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handleRemove = () => {
    removeFromCart(product);
  };

  return (
    <Button className=" bg-walmart hover:bg-walmart/50" onClick={handleRemove}>
      -
    </Button>
  );
}
