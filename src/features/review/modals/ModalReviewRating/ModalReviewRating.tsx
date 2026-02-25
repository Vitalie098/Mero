import { useState } from "react"
import {Modal, Pressable, Text, TouchableWithoutFeedback, View} from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import styles from "./styles"
import RatingSelector from "@/features/review/components/RatingSelector"
import {useCloseAddReviewModal, useIsAddReviewModalVisible} from "@/features/review/store/reviewModals/reviewModals.selectors"
import { useProfileFromCache } from "@/features/profile/hooks/useProfileFromCache"

type ModalReviewRatingProps = {
  slug: string
}

const ModalReviewRating = ({slug}: ModalReviewRatingProps ) => {
  const [rating, setRating] = useState(0)

  const insets = useSafeAreaInsets()
  const isVisible = useIsAddReviewModalVisible()

	const profile = useProfileFromCache(slug)
  const closAddReviewModal = useCloseAddReviewModal()
  
  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="fade"
      statusBarTranslucent
      onRequestClose={closAddReviewModal}
    >
      <TouchableWithoutFeedback onPress={closAddReviewModal}>
        <View style={styles.container}>
          <View style={[styles.wrapper, {paddingBottom: Math.max(insets.bottom, 16)}]}>
            <View style={[styles.sheet]}>
              <Text style={styles.title}>
                Evaluează serviciile oferite de Robert de la <Text style={styles.profileSlug}>{profile?.slug.split("-").join(" ")}</Text>
              </Text>

              <Text style={styles.subtitle}>Click pe o stea pentru a evalua</Text>
            </View>

            <View style={styles.starsWrapper}>
              <RatingSelector slug={slug} rating={rating} setRating={setRating} onClose={closAddReviewModal}/>
            </View>

            <Pressable onPress={closAddReviewModal} style={styles.laterButton} hitSlop={8}>
              <Text style={styles.laterText}>Mai târziu</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default ModalReviewRating
