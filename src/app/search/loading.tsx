import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className=" p-10">
      <h1 className=" text-3xl font-bold mb-2">Scraping Results</h1>
      <h2 className=" mb-5 text-gray-400">We won&apos;t be long</h2>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-col-3 xl:grid-col-4 gap-7">
        <Skeleton className="w-[300px] h-[400px]" />
        <Skeleton className="w-[300px] h-[400px]" />
        <Skeleton className="w-[300px] h-[400px]" />
        <Skeleton className="w-[300px] h-[400px]" />
        <Skeleton className="w-[300px] h-[400px]" />
        <Skeleton className="w-[300px] h-[400px]" />
        <Skeleton className="w-[300px] h-[400px]" />
        <Skeleton className="w-[300px] h-[400px]" />
      </div>
    </div>
  );
}
