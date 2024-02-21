import GridOption from "@/components/GridOption";
import Head from "next/head";
export default function Home() {
  return (
    <main className=" flex-1">
      <div className=" grid gird-cols-1 grid-flow-dense md:grid-cols-4 gap-6 m-6">
        <GridOption
          title="Sweet gifts for less"
          image="https://links.papareact.com/1dy"
          className=" bg-pink-200 h-full mf:h-32"
        />
        <GridOption
          title="Shop Wardrobe"
          image="https://links.papareact.com/8ko"
          className=" bg-blue-100 col-span-2 row-span-2"
        />
        <GridOption
          title="Shop home"
          image="https://links.papareact.com/szu"
          className=" bg-pink-200 row-span-2"
        />
        <GridOption
          title="Shop Electronics"
          image="https://links.papareact.com/n7r"
          className=" bg-yellow-100 h-64"
        />
        <GridOption
          title="Shop Toys"
          image="https://links.papareact.com/pj2"
          className=" bg-green-100 h-64 col-span-2"
        />
        <GridOption
          title="All need for March Day"
          image="https://links.papareact.com/m8e"
          className="bg-red-100 col-span-2 row-span-2"
        />
        <GridOption
          title="Shop Gadgets"
          image="https://links.papareact.com/gs1"
          className=" bg-orange-100 h-64"
        />
        <GridOption
          title="Shop Beauty"
          image="https://links.papareact.com/4y0"
          className=" bg-blue-100 h-64"
        />
        <GridOption
          title="Shop Sports"
          image="https://links.papareact.com/sq2"
          className=" bg-orange-100 h-64"
        />
        <GridOption
          title="Enjoy free Shopping"
          image="https://links.papareact.com/9fh"
          className=" bg-rose-100 h-64"
        />
        <GridOption
          title="Flash Deals"
          image="https://links.papareact.com/qx7"
          className=" bg-orange-200 h-64 col-span-2"
        />
      </div>
    </main>
  );
}
