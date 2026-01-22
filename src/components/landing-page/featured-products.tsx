"use cache";

import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import { cacheLife } from "next/cache";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getApprovedProducts } from "@/lib/products/product-select";
import { SectionHeader } from "../common/section-header";
import { ProductCard } from "../products/product-card";

export const FeaturedProducts = async () => {
  cacheLife("max");

  const featuredProducts = await getApprovedProducts();

  return (
    <section className="py-20 bg-muted/20">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader
            title="Featured Today"
            icon={StarIcon}
            description="Top picks from our community this week"
          />
          <Button variant="outline" asChild className="hidden sm:flex">
            <Link href="/explore">
              View All <ArrowUpRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid-wrapper">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
