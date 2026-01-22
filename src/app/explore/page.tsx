"use cache";

import { CompassIcon } from "lucide-react";
import { cacheLife } from "next/cache";
import { SectionHeader } from "@/components/common/section-header";
import ProductExplorer from "@/lib/products/product-explorer";
import { getApprovedProducts } from "@/lib/products/product-select";

export default async function ExplorePage() {
  cacheLife("max");

  const products = await getApprovedProducts();

  return (
    <div className="py-20">
      <div className="wrapper">
        <div className="mb-12">
          <SectionHeader
            title="Explore All Products"
            icon={CompassIcon}
            description="Browse and discover amazing projects from our community"
          />
        </div>
        <ProductExplorer products={products} />
      </div>
    </div>
  );
}
