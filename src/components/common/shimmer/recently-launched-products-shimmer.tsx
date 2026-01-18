import { Card, CardFooter, CardHeader } from "@/components/ui/card";

export default function RecentlyLaunchedProductsShimmer() {
  return (
    <section className="grid-wrapper">
      {Array.from({ length: 6 }).map((_, index) => (
        <Card
          key={index.toString()}
          className="border-solid border-gray-400 min-h-50"
        >
          <CardHeader className="flex-1">
            <div className="flex items-start gap-4">
              <div className="flex-1 min-w-0 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-40 bg-muted animate-pulse rounded" />
                  <div className="h-5 w-16 bg-muted animate-pulse rounded" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-muted animate-pulse rounded" />
                  <div className="h-4 w-3/4 bg-muted animate-pulse rounded" />
                </div>
              </div>
              {/* Voting buttons shimmer */}
              <div className="flex flex-col items-center gap-1 shrink-0">
                <div className="h-8 w-8 bg-muted animate-pulse rounded" />
                <div className="h-4 w-6 bg-muted animate-pulse rounded" />
                <div className="h-8 w-8 bg-muted animate-pulse rounded" />
              </div>
            </div>
          </CardHeader>
          <CardFooter>
            <div className="flex items-center gap-2">
              <div className="h-5 w-16 bg-muted animate-pulse rounded-full" />
              <div className="h-5 w-20 bg-muted animate-pulse rounded-full" />
              <div className="h-5 w-14 bg-muted animate-pulse rounded-full" />
            </div>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}
