import type { InferSelectModel } from "drizzle-orm";
import type { products } from "@/db/schema";

export type FormState = {
  success: boolean;
  errors?: Record<string, string[]>;
  message: string;
};

export type ProductType = InferSelectModel<typeof products>;
