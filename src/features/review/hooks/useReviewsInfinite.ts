import { useInfiniteQuery, type InfiniteData } from "@tanstack/react-query";
import { reviewKeys } from "../services/reviewKeys";
import { getReviewsPage } from "../services/reviewApi";
import type { PageReviews } from "../services/reviewTypes";

export const useReviewsInfinite = (pageId: string, limit = 5) => {
  return useInfiniteQuery<
    PageReviews,
    Error,
    InfiniteData<PageReviews>,
    ReturnType<typeof reviewKeys.list>,
    string | undefined
  >({
    queryKey: reviewKeys.list(pageId, limit),
    enabled: !!pageId,
    initialPageParam: undefined,
    queryFn: ({ pageParam, signal }) => getReviewsPage(pageId, limit, pageParam, signal),
    getNextPageParam: (lastPage) => lastPage.next ?? undefined,
    staleTime: 30_000,
    gcTime: 5 * 60_000,
  });
}