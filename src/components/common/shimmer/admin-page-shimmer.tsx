import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const AdminPageShimmer = () => {
  return (
    <div className="py-20">
      <div className="wrapper">
        {/* Section Header Shimmer */}
        <div className="mb-12 space-y-4">
          <div className="flex items-center gap-3">
            <Skeleton className="h-8 w-8 rounded-lg" />
            <Skeleton className="h-8 w-48" />
          </div>
          <Skeleton className="h-5 w-96" />
        </div>

        {/* Stats Cards Shimmer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index.toString()}
              className="status-badge-card p-4 border rounded-lg"
            >
              <Skeleton className="h-4 w-16 mb-2" />
              <Skeleton className="h-8 w-12" />
            </div>
          ))}
        </div>

        {/* Pending Products Section Shimmer */}
        <section className="my-12">
          <div className="section-header-with-count mb-6">
            <Skeleton className="h-7 w-64" />
          </div>
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <Card
                key={index.toString()}
                className="border rounded-lg p-6 bg-background"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1 min-w-0 space-y-4">
                    <CardTitle className="flex justify-between items-center">
                      <Skeleton className="h-6 w-48" />
                      <Skeleton className="h-6 w-20 rounded-full" />
                    </CardTitle>
                    <CardDescription className="space-y-3">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-5 w-16 rounded-full" />
                        <Skeleton className="h-5 w-20 rounded-full" />
                        <Skeleton className="h-5 w-14 rounded-full" />
                      </div>
                      <div className="flex gap-x-4 gap-y-2">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-28" />
                      </div>
                    </CardDescription>
                    <CardFooter>
                      <Skeleton className="h-9 w-24" />
                    </CardFooter>
                  </div>
                  <div className="lg:shrink-0">
                    <div className="flex flex-col gap-2">
                      <Skeleton className="h-9 w-32" />
                      <Skeleton className="h-9 w-32" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* All Products Section Shimmer */}
        <section className="my-12">
          <div className="section-header-with-count mb-6">
            <Skeleton className="h-7 w-40" />
          </div>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <Card
                key={index.toString()}
                className="border rounded-lg p-6 bg-background"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1 min-w-0 space-y-4">
                    <CardTitle className="flex justify-between items-center">
                      <Skeleton className="h-6 w-48" />
                      <Skeleton className="h-6 w-20 rounded-full" />
                    </CardTitle>
                    <CardDescription className="space-y-3">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-5 w-16 rounded-full" />
                        <Skeleton className="h-5 w-20 rounded-full" />
                        <Skeleton className="h-5 w-14 rounded-full" />
                      </div>
                      <div className="flex gap-x-4 gap-y-2">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-28" />
                      </div>
                    </CardDescription>
                    <CardFooter>
                      <Skeleton className="h-9 w-24" />
                    </CardFooter>
                  </div>
                  <div className="lg:shrink-0">
                    <div className="flex flex-col gap-2">
                      <Skeleton className="h-9 w-32" />
                      <Skeleton className="h-9 w-32" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
