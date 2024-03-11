import { Suspense } from "react";
import PostListing from "@/app/_components/PostListing";
import EntriesSkeleton from "./_components/ui/Skeletons/EntriesSkeleton";

export default function Home() {
  return (
    <main className="max-w-screen-xl container mx-auto p-20 flex min-h-screen flex-col">

        <h1 className="text-8xl font-bold py-20 max-w-2xl">This website is running CraftCMS + NextJS 14</h1>
        <Suspense fallback={<EntriesSkeleton />}>
          <PostListing />
        </Suspense>
      
    </main>
  );
}
