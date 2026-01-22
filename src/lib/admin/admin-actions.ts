"use server";

import { eq } from "drizzle-orm";
import { revalidatePath, revalidateTag } from "next/cache";
import { db } from "@/db";
import { products } from "@/db/schema";
import type { ProductType } from "@/types";

export const approveProductAction = async (productId: ProductType["id"]) => {
  try {
    await db
      .update(products)
      .set({ status: "approved", approvedAt: new Date() })
      .where(eq(products.id, productId));

    revalidateTag("/products", "max");
    revalidatePath("/admin");

    return {
      success: true,
      message: "Product approved successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Failed to approve product",
    };
  }
};

export const rejectProductAction = async (productId: ProductType["id"]) => {
  try {
    await db
      .update(products)
      .set({ status: "rejected" })
      .where(eq(products.id, productId));

    revalidateTag("/products", "max");
    revalidatePath("/admin");

    return {
      success: true,
      message: "Product rejected successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Failed to reject product",
    };
  }
};
