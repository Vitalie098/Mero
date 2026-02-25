import { Modal, Pressable, Text, TouchableWithoutFeedback, View } from "react-native"
import {useCloseReviewOptionsModal, useIsReviewOptionsModalState} from "../../store/reviewModals/reviewModals.selectors"
import { useRouter } from "expo-router"
import { useDeleteMyReview } from "../../store/userReview/userReview.selectors"
import { useProfileFromCache } from "@/features/profile/hooks/useProfileFromCache"
import styles from "./styles"
import { Routes } from "@/shared/constants/routes"

const ReviewOptionsModal = () => {
  const {isVisible, slug} = useIsReviewOptionsModalState()
  
  const onClose = useCloseReviewOptionsModal()
  const deleteReview = useDeleteMyReview()

  const router = useRouter()
  const profile = useProfileFromCache(slug)

  const onEdit = () => {
    router.push(Routes.modalLeaveReview(slug))
    onClose()
  }

  const onDelete = () => {
    profile?._id && deleteReview(profile?._id.toString())
    onClose()
  }

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="fade"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop}>
          <View style={styles.container}>
            <View style={styles.sheet}>
              <Pressable style={styles.action} onPress={onEdit}>
                <Text style={[styles.optionText, styles.editText]}>
                  Modifică recenzie
                </Text>
              </Pressable>

              <View style={styles.separator} />

              <Pressable style={styles.action} onPress={onDelete}>
                <Text style={[styles.optionText, styles.deleteText]}>
                  Șterge recenzie
                </Text>
              </Pressable>
            </View>

            <Pressable style={styles.cancel} onPress={onClose}>
              <Text style={styles.cancelText}>Anulează</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default ReviewOptionsModal
