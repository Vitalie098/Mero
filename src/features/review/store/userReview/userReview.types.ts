import { VisibleFeedbackDetails } from "../../services/reviewTypes"

export type MyReview = VisibleFeedbackDetails & {
  completed: boolean
}

export type UpsertMyReviewInput = {
  profileId: string
  firstname?: string
  lastname?: string
  avatarUrl?: string
  rating?: number
  text?: string
  completed?: boolean
}

export type ProfileReviewsState = {
  reviewsByProfileId: Record<string, MyReview>

  upsertMyReview: (review: UpsertMyReviewInput) => void
  completeMyReview: (profileId: string) => void
  deleteMyReview: (profileId: string) => void
}
