import { useReviewModalsStore } from "./reviewModals.store"
import { useShallow } from "zustand/react/shallow";

export const useIsReviewOptionsModalState = () => useReviewModalsStore(useShallow((s) => ({isVisible: s.isReviewOptionsModalVisible, slug: s.slug})))
export const useIsAddReviewModalVisible = () => useReviewModalsStore((s) => s.isAddReviewModalVisible)

export const useOpenReviewOptionsModal = () => useReviewModalsStore((s) => s.openReviewOptionsModal)
export const useCloseReviewOptionsModal = () => useReviewModalsStore((s) => s.closeReviewOptionsModal)
export const useOpenAddReviewModal = () => useReviewModalsStore((s) => s.openAddReviewModal)
export const useCloseAddReviewModal = () => useReviewModalsStore((s) => s.closeAddReviewModal)
