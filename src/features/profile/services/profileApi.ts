import { apiClient } from "@/shared/api/axios/client";
import type { PageProfile } from "./profileTypes";

export const getProfile = async (slug: string, signal?: AbortSignal) => {
  const { data } = await apiClient.get<PageProfile>(
    `/business/page/${encodeURIComponent(slug)}/profile`,
    { signal }
  );
  return data;
}