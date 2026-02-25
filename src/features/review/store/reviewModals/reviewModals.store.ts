import { create } from "zustand"

export type ReviewModalsState = {
  slug: string
  isReviewOptionsModalVisible: boolean
  isAddReviewModalVisible: boolean

  openReviewOptionsModal: (slug: string) => void
  closeReviewOptionsModal: () => void

  openAddReviewModal: () => void
  closeAddReviewModal: () => void
}

export const useReviewModalsStore = create<ReviewModalsState>()((set) => ({
  slug: "",
  isReviewOptionsModalVisible: false,
  isAddReviewModalVisible: false,

  saveSlug: (slug: string) => set({slug}),

  openReviewOptionsModal: (slug: string) => set({ slug, isReviewOptionsModalVisible: true }),
  closeReviewOptionsModal: () => set({ slug: undefined, isReviewOptionsModalVisible: false }),

  openAddReviewModal: () => set({ isAddReviewModalVisible: true }),
  closeAddReviewModal: () => set({ isAddReviewModalVisible: false })
}))