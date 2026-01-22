import { auth, clerkClient } from "@clerk/nextjs/server";
import { InboxIcon, ShieldIcon } from "lucide-react";
import { cacheLife, cacheTag } from "next/cache";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import AdminProductCard from "@/components/admin/admin-product-card";
import AdminStatsCard from "@/components/admin/admin-stats-card";
import { EmptyState } from "@/components/common/empty-state";
import { SectionHeader } from "@/components/common/section-header";
import { AdminPageShimmer } from "@/components/common/shimmer/admin-page-shimmer";
import { getAllProducts } from "@/lib/products/product-select";

export default async function AdminPage() {
  return (
    <Suspense fallback={<AdminPageShimmer />}>
      <AdminPageContent />
    </Suspense>
  );
}

const AdminPageContent = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const response = await clerkClient();
  const user = await response.users.getUser(userId);

  const metadata = user.publicMetadata;
  const isAdmin = metadata?.isAdmin ?? false;

  if (!isAdmin) {
    redirect("/");
  }

  return <AdminProductsView />;
};

const AdminProductsView = async () => {
  "use cache";
  cacheLife("max");
  cacheTag("products");

  const allProducts = await getAllProducts();
  const approvedProducts = allProducts.filter(
    (product) => product.status === "approved",
  );

  const pendingProducts = allProducts.filter(
    (product) => product.status === "pending",
  );

  const rejectedProducts = allProducts.filter(
    (product) => product.status === "rejected",
  );

  return (
    <div className="py-20">
      <div className="wrapper">
        <div className="mb-12">
          <SectionHeader
            title="Product Admin"
            icon={ShieldIcon}
            description="Review and manage submitted products"
          />
        </div>
        <AdminStatsCard
          approved={approvedProducts.length}
          pending={pendingProducts.length}
          rejected={rejectedProducts.length}
          all={allProducts.length}
        />

        <section className="my-12">
          <div className="section-header-with-count">
            <h2 className="text-2xl font-bold mb-1">
              Pending Products ({pendingProducts.length})
            </h2>
          </div>
          <div className="space-y-4">
            {pendingProducts.length === 0 && (
              <EmptyState
                message="No pending products to review"
                icon={InboxIcon}
              />
            )}
            {pendingProducts.map((product) => (
              <AdminProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="my-12">
          <div className="section-header-with-count">
            <h2 className="text-2xl font-bold mb-1">
              Approved Products ({approvedProducts.length})
            </h2>
          </div>
          <div className="space-y-4">
            {approvedProducts.map((product) => (
              <AdminProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="my-12">
          <div className="section-header-with-count">
            <h2 className="text-2xl font-bold mb-1">
              Rejected Products ({rejectedProducts.length})
            </h2>
          </div>
          <div className="space-y-4">
            {rejectedProducts.map((product) => (
              <AdminProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
