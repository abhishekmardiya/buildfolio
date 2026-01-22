import "server-only";

import { desc, eq } from "drizzle-orm";
import { cacheLife, cacheTag } from "next/cache";
import { db } from "@/db";
import { type Product, products } from "@/db/schema";

export const getAllProducts = async (): Promise<Product[]> => {
  "use cache";
  cacheLife("max");
  cacheTag("products");

  const productsData = await db
    .select()
    .from(products)
    .orderBy(desc(products.voteCount));

  return productsData;
};

// cache at page level
export const getApprovedProducts = async (): Promise<Product[]> => {
  "use cache";
  cacheLife("max");
  cacheTag("products");

  const allProducts = await getAllProducts();

  return allProducts.filter((product) => product.status === "approved");
};

// no caching for this function as we are using new Date()
export const getRecentlyLaunchedProducts = async (): Promise<Product[]> => {
  const productsData = await db
    .select()
    .from(products)
    .where(eq(products.status, "approved"))
    .orderBy(desc(products.voteCount));

  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  return productsData.filter(
    (product) =>
      product.createdAt &&
      new Date(product.createdAt.toISOString()) >= oneWeekAgo,
  );
};

export const getProductBySlug = async (
  slug: string,
): Promise<Product | null> => {
  const product = await db
    .select()
    .from(products)
    .where(eq(products.slug, slug))
    .limit(1);

  return product?.[0] ?? null;
};
