import { Skeleton } from "@/app/_components/ui/skeleton";

export default function EntriesSkeleton() {
  return (
    <div className="grid grid-cols-4 gap-8">
      <Skeleton className="aspect-square" />
      <Skeleton className="aspect-square" />
      <Skeleton className="aspect-square" />
      <Skeleton className="aspect-square" />
    </div>
  );
}
