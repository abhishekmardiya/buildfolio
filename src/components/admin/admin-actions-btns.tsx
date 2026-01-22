"use client";

import { CheckCircleIcon, XCircleIcon } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  approveProductAction,
  rejectProductAction,
} from "@/lib/admin/admin-actions";
import type { ProductType } from "@/types";

export default function AdminActionsBtns({
  status,
  productId,
}: {
  status: string;
  productId: ProductType["id"];
}) {
  const [isPending, startTransition] = useTransition();

  const handleApprove = async () => {
    startTransition(async () => {
      const { success, message } = await approveProductAction(productId);

      if (success) {
        toast.success(message);
      } else {
        toast.error(message);
      }
    });
  };

  const handleReject = async () => {
    startTransition(async () => {
      const { success, message } = await rejectProductAction(productId);

      if (success) {
        toast.success(message);
      } else {
        toast.error(message);
      }
    });
  };

  return (
    <div className="space-y-2">
      {status === "pending" && (
        <div className="flex gap-2">
          <Button
            variant="default"
            className="hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleApprove}
            disabled={isPending}
          >
            <CheckCircleIcon className="size-4" />
            Approve
          </Button>
          <Button
            variant="destructive"
            className="hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleReject}
            disabled={isPending}
          >
            <XCircleIcon className="size-4" />
            Reject
          </Button>
        </div>
      )}
    </div>
  );
}
