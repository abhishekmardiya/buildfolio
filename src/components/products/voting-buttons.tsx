"use client";

import { useAuth } from "@clerk/nextjs";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useOptimistic, useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { upvoteAndDownvoteProductAction } from "@/lib/products/product-actions";
import { cn } from "@/lib/utils";

export const VotingButtons = ({
  hasVoted,
  voteCount: initialVoteCount,
  productId,
}: {
  hasVoted?: boolean;
  voteCount: number;
  productId: number;
}) => {
  const [optimisticVoteCount, setOptimisticVoteCount] = useOptimistic(
    initialVoteCount,
    (currentCount, change: number) => Math.max(0, currentCount + change),
  );
  const [isPending, startTransition] = useTransition();
  const { userId } = useAuth();

  const handleUpvoteOrDownvote = async (voteType: "upvote" | "downvote") => {
    if (!userId) {
      toast.error("You must be signed in to upvote or downvote a product");

      return;
    }

    startTransition(async () => {
      setOptimisticVoteCount(voteType === "upvote" ? 1 : -1);

      const { success, message } = await upvoteAndDownvoteProductAction({
        productId,
        voteType,
      });

      if (!success) {
        toast.error(message);
      }
    });
  };

  return (
    <div
      className="flex flex-col items-center gap-1 shrink-0"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <Button
        onClick={() => handleUpvoteOrDownvote("upvote")}
        variant="ghost"
        size="icon-sm"
        className={cn(
          "h-8 w-8 text-primary ",
          hasVoted
            ? "bg-primary/10 text-primary hover:bg-primary/20"
            : "hover:bg-primary/10 hover:text-primary",
        )}
        disabled={isPending}
      >
        <ChevronUpIcon className="size-5" />
      </Button>
      <span className="text-sm font-semibold transition-colors text-foreground">
        {optimisticVoteCount}
      </span>
      <Button
        onClick={() => handleUpvoteOrDownvote("downvote")}
        variant="ghost"
        size="icon-sm"
        disabled={isPending}
        className={cn(
          "h-8 w-8 text-primary ",
          hasVoted ? "hover:text-destructive" : "opacity-50 cursor-not-allowed",
        )}
      >
        <ChevronDownIcon className="size-5" />
      </Button>
    </div>
  );
};
