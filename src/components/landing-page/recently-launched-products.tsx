import { CalendarIcon, RocketIcon } from "lucide-react";
import { Suspense } from "react";
import { getRecentlyLaunchedProducts } from "@/lib/products/product-select";
import EmptyState from "../common/empty-state";
import SectionHeader from "../common/section-header";
import RecentlyLaunchedProductsShimmer from "../common/shimmer/recently-launched-products-shimmer";
import ProductCard from "../products/product-card";

export default function RecentlyLaunchedProducts() {
  return (
    <section className="py-20">
      <div className="wrapper space-y-12">
        <SectionHeader
          title="Recently Launched"
          icon={RocketIcon}
          description="Discover the latest products from our community"
        />

        <Suspense fallback={<RecentlyLaunchedProductsShimmer />}>
          <RecentlyLaunchedProductsContent />
        </Suspense>
      </div>
    </section>
  );
}

async function RecentlyLaunchedProductsContent() {
  const recentlyLaunchedProducts = await getRecentlyLaunchedProducts();

  return (
    <>
      {recentlyLaunchedProducts.length ? (
        <div className="grid-wrapper">
          {recentlyLaunchedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <EmptyState
          message="No products launched in the last week. Check back soon for new launches."
          icon={CalendarIcon}
        />
      )}
    </>
  );
}
