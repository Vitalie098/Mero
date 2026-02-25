import { apiClient } from "@/shared/api/axios/client";
import type { PageReviews } from "./reviewTypes";

export const getReviewsPage = async (
  pageId: string,
  limit: number,
  cursor: string | undefined,
  signal?: AbortSignal
) => {
  const { data } = await apiClient.get<PageReviews>(
    `/mp/pages/${pageId}/reviews`,
    {
      params: { limit, page: cursor},
      signal,
    }
  );

  return data;
}