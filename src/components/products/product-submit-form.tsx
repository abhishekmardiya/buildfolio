"use client";

import { Loader2Icon, SparklesIcon } from "lucide-react";
import { useActionState } from "react";
import { addProductAction } from "@/lib/products/product-action";
import { cn } from "@/lib/utils";
import type { FormState } from "@/types";
import { FormField } from "../forms/form-field";
import { Button } from "../ui/button";

const initialState: FormState = {
  success: false,
  errors: undefined,
  message: "",
};

export default function ProductSubmitForm() {
  // https://react.dev/reference/react/useActionState#display-information-after-submitting-a-form
  const [state, formAction, isPending] = useActionState(
    addProductAction,
    initialState,
  );

  const { errors, message, success } = state;

  const getFieldErrors = (fieldName: string): string[] => {
    if (!errors) {
      return [];
    }

    return (errors as Record<string, string[]>)[fieldName] ?? [];
  };

  return (
    <form className="space-y-6" action={formAction}>
      {message && (
        <div
          className={cn(
            "p-4 rounded-lg border",
            success
              ? "bg-primary/10 border-primary text-primary"
              : "bg-destructive/10 border-destructive text-destructive",
          )}
          // role="alert" is used to indicate that the div is an alert
          // aria-live="polite" is used to indicate that the div is live
          role="alert"
          aria-live="polite"
        >
          {message}
        </div>
      )}

      <FormField
        label="Product Name"
        name="name"
        id="name"
        placeholder="My Awesome Product"
        required
        onChange={() => {}}
        error={getFieldErrors("name")}
      />
      <FormField
        label="Slug"
        name="slug"
        id="slug"
        placeholder="my-awesome-product"
        required
        onChange={() => {}}
        helperText="URL-friendly version of your product name"
        error={getFieldErrors("slug")}
      />

      <FormField
        label="Tagline"
        name="tagline"
        id="tagline"
        placeholder="A brief, catchy description"
        required
        onChange={() => {}}
        error={getFieldErrors("tagline")}
      />

      <FormField
        label="Description"
        name="description"
        id="description"
        placeholder="Tell us more about your product..."
        required
        onChange={() => {}}
        error={getFieldErrors("description")}
        textarea
      />

      <FormField
        label="Website URL"
        name="websiteUrl"
        id="websiteUrl"
        placeholder="https://yourproduct.com"
        required
        onChange={() => {}}
        error={getFieldErrors("websiteUrl")}
        helperText="Enter your product's website or landing page"
      />
      <FormField
        label="Tags"
        name="tags"
        id="tags"
        placeholder="AI, Productivity, SaaS"
        required
        onChange={() => {}}
        error={getFieldErrors("tags")}
        helperText="Comma-separated tags (e.g., AI, SaaS, Productivity)"
      />

      <Button type="submit" size="lg" className="w-full">
        {isPending ? (
          <Loader2Icon className="size-4 animate-spin" />
        ) : (
          <>
            <SparklesIcon className="size-4" />
            Submit Product
          </>
        )}
      </Button>
    </form>
  );
}
