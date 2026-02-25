export const reviewKeys = {
  all: ["reviews"] as const,
  list: (pageId: string, limit: number) =>
    [...reviewKeys.all, "list", { pageId, limit }] as const,
};