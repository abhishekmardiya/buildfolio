import { desc, eq } from "drizzle-orm";
import { cacheLife } from "next/cache";
import { db } from "@/db";
import { products } from "@/db/schema";

export const getAllProducts = async () => {
  "use cache";
  cacheLife("max");

  const productsData = await db
    .select()
    .from(products)
    .orderBy(desc(products.voteCount));

  return productsData;
};

// cache at page level
export const getFeaturedProducts = async () => {
  const allProducts = await getAllProducts();

  return allProducts.filter((product) => product.status === "approved");
};

// no caching for this function
export const getRecentlyLaunchedProducts = async () => {
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
