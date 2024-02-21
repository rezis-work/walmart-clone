import { Product } from "../../typings/productTypings";

export function groupBySKU(products: Product[]): Record<string, Product[]> {
  return products?.reduce((acc: Record<string, Product[]>, cur: Product) => {
    const sku = cur.meta.sku;
    if (!acc[sku]) {
      acc[sku] = [];
    }
    acc[sku].push(cur);
    return acc;
  }, {});
}
