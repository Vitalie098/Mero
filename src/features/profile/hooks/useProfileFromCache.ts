import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useMemo, useSyncExternalStore } from "react";
import type { PageProfile } from "../services/profileTypes";
import { profileKeys } from "../services/profileKeys";

export const useProfileFromCache = (slug: string | undefined) => {
  const qc = useQueryClient();

  const queryKey = useMemo(() => {
    return slug ? profileKeys.profile(slug) : undefined;
  }, [slug]);

  const getSnapshot = useCallback(() => {
    if (!queryKey) return undefined;
    return qc.getQueryData<PageProfile>(queryKey);
  }, [qc, queryKey]);

  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      if (!queryKey) return () => {};

      const cache = qc.getQueryCache();

      let targetQuery = cache.find({ queryKey, exact: true }) ?? null;
      let targetHash = targetQuery?.queryHash ?? null;

      return cache.subscribe((event) => {
        const q = event?.query;
        if (!q) return;

        if (!targetHash) {
          const found = cache.find({ queryKey, exact: true });
          if (found) {
            targetQuery = found;
            targetHash = found.queryHash;
            onStoreChange();
          }
          return;
        }

        if (q.queryHash === targetHash) {
          onStoreChange();
        }
      });
    },
    [qc, queryKey]
  );

  return useSyncExternalStore(subscribe, getSnapshot);
};