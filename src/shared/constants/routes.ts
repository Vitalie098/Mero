import type { Href } from "expo-router";

export const Routes = {
  profileHome: (slug: string) => ({ pathname: "/profile/[slug]", params: { slug } }) as Href,
  profileReviews: (slug: string) => ({ pathname: "/review/[slug]/all-reviews", params: { slug } }) as Href,
  modalLeaveReview: (slug: string) => ({ pathname: "/review/[slug]/leave-review", params: { slug } }) as Href
} as const;