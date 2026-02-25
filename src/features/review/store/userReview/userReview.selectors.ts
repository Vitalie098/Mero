import { useProfileReviewsStore } from "./userReview.store"

export const useMyVisibleReview = (profileId: string) =>
  useProfileReviewsStore((s) => {
    const r = s.reviewsByProfileId[profileId]
    return r?.completed ? r : null
  })

export const useMyReviewState = (ProfileId: string) =>
  useProfileReviewsStore((s) => s.reviewsByProfileId[ProfileId] ?? null)

export const useUpsertMyReview = () => useProfileReviewsStore((s) => s.upsertMyReview)
export const useCompleteMyReview = () => useProfileReviewsStore((s) => s.completeMyReview)
export const useDeleteMyReview = () => useProfileReviewsStore((s) => s.deleteMyReview)