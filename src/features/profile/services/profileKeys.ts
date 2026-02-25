export const profileKeys = {
  all: ["profile"] as const,
  profile: (slug: string) => [...profileKeys.all, slug] as const,
};