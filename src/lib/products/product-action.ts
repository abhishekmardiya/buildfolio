"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import z from "zod";
import { db } from "@/db";
import { products } from "@/db/schema";
import type { FormState } from "@/types";
import { productSchema } from "./product-validations";

export const addProductAction = async (
  // we don't need the previous state, so we use _prevState to suppress the unused variable warning
  _prevState: FormState,
  formData: FormData,
) => {
  // 1. check if the user is authenticated
  // 2. extract the data
  // 3. validate it
  // 4. transform the data for our request
  // 5. create the product in the table

  try {
    const { userId, orgId } = await auth();

    if (!userId) {
      return {
        success: false,
        message: "You must be signed in to submit a product",
        errors: undefined,
      };
    }

    if (!orgId) {
      return {
        success: false,
        message: "You must be a member of an organization to submit a product",
        errors: undefined,
      };
    }

    const user = await currentUser();
    const userEmail = user?.primaryEmailAddress?.emailAddress || "anonymous";

    const rawFormData = Object.fromEntries(formData.entries());

    const validatedData = productSchema.safeParse(rawFormData);

    if (!validatedData.success) {
      console.error(validatedData.error.flatten().fieldErrors);

      return {
        success: false,
        errors: validatedData.error.flatten().fieldErrors,
        message: "Invalid data",
      };
    }

    const { name, slug, tagline, description, websiteUrl, tags } =
      validatedData.data;

    const tagsArray = tags ? tags.filter((tag) => typeof tag === "string") : [];

    await db.insert(products).values({
      name,
      slug,
      tagline,
      description,
      websiteUrl,
      tags: tagsArray,
      status: "pending",
      submittedBy: userEmail,
      organizationId: orgId,
      userId,
    });

    return {
      success: true,
      message: "Product submitted successfully! It will be reviewed shortly.",
      errors: undefined,
    };
  } catch (error) {
    console.error(error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.flatten().fieldErrors,
        message: "Validation failed. Please check the form.",
      };
    }

    return {
      success: false,
      errors: undefined,
      message: "Failed to submit product",
    };
  }
};
