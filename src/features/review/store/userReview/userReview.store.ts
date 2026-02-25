import AsyncStorage from "@react-native-async-storage/async-storage"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { nanoid } from "nanoid/non-secure"
import { MyReview, ProfileReviewsState } from "./userReview.types"

export const useProfileReviewsStore = create<ProfileReviewsState>()(
  persist(
    (set) => ({
      reviewsByProfileId: {},
      upsertMyReview: ({profileId, firstname, lastname, avatarUrl, rating, text, completed}) => {
        set((s) => {
          const prev = s.reviewsByProfileId[profileId]

          if (!prev) {
            if (rating == null) return s

            const review: MyReview = {
              _id: nanoid(),
              isAnonymous: false,
              user: {
                firstname,
                lastname,
                profilePhoto: avatarUrl
                  ? {
                      _id: "local",
                      thumbnail: avatarUrl,
                      small: avatarUrl,
                      medium: avatarUrl,
                      large: avatarUrl,
                    }
                  : undefined,
              },
              feedback: {
                score: rating,
                review: text?.trim() ?? "",
                hasText: !!text?.trim(),
              },
              completed: completed ?? false,
            }

            return {
              reviewsByProfileId: {
                ...s.reviewsByProfileId,
                [profileId]: review,
              },
            }
          }

          const review: MyReview = {
            ...prev,
            feedback: {
              score: rating ?? prev.feedback.score,
              review: text !== undefined ? text.trim() : prev.feedback.review,
              hasText: text !== undefined ? !!text.trim() : prev.feedback.hasText,
            },
            completed: completed ?? prev.completed,
          }

          return {
            reviewsByProfileId: {
              ...s.reviewsByProfileId,
              [profileId]: review,
            },
          }
        })
      },
      completeMyReview: (profileId) => {
        set((s) => {
          const prev = s.reviewsByProfileId[profileId]
          if (!prev || prev.completed) return s

          const review: MyReview = {...prev, completed: true}
          return { reviewsByProfileId: { ...s.reviewsByProfileId, [profileId]: review}}
        })
      },
      deleteMyReview: (profileId) =>
        set((s) => {
          if (!s.reviewsByProfileId[profileId]) return s
          const { [profileId]: _, ...rest } = s.reviewsByProfileId
          return { reviewsByProfileId: rest }
        }),
    }),
    {
      name: "profile-reviews",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (s) => ({ reviewsByProfileId: s.reviewsByProfileId })
    },
  ),
)
