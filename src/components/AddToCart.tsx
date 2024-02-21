"use client";

import { useCartStore } from "../../store";
import { Product } from "../../typings/productTypings";
import RemoveFromCart from "./RemoveFromCart";
import { Button } from "./ui/button";

export default function AddToCart({ product }: { product: Product }) {
  const [cart, addTocart] = useCartStore((state) => [
    state.cart,
    state.addToCart,
  ]);

  const handleAdd = () => {
    addTocart(product);
  };

  const howManyIncart = cart.filter(
    (item) => item.meta.sku === product.meta.sku
  ).length;

  if (howManyIncart > 0) {
    return (
      <div className=" flex space-x-5 items-center">
        <RemoveFromCart product={product} />
        <span>{howManyIncart}</span>
        <Button className=" bg-walmart hover:bg-walmart/50" onClick={handleAdd}>
          +
        </Button>
      </div>
    );
  }

  return (
    <Button className=" bg-walmart hover:bg-walmart/50" onClick={handleAdd}>
      Add to Cart
    </Button>
  );
}
