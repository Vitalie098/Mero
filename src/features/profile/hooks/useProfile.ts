import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/profileApi";
import { profileKeys } from "../services/profileKeys";

export const useProfile = (slug: string) => {
  return useQuery({
    queryKey: profileKeys.profile(slug),
    queryFn: ({ signal }) => getProfile(slug, signal),
    enabled: !!slug,
    staleTime: 60_000,
    gcTime: 5 * 60_000,
  });
}