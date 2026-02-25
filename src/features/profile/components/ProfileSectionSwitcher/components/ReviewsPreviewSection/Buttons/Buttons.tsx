import { View, Text, TouchableOpacity } from 'react-native'
import styles from "./styles"
import { useRouter } from 'expo-router'
import { Routes } from '@/shared/constants/routes'
import { useOpenAddReviewModal } from '@/features/review/store/reviewModals/reviewModals.selectors'

type ButtonsProps = {
  slug: string
  addReview: boolean
  hasMoreReviews: boolean
}

const Buttons = ({slug, addReview, hasMoreReviews}: ButtonsProps) => {
  const router = useRouter()

  const onViewAll = () => router.push(Routes.profileReviews(slug))
  const openAddReviewModal = useOpenAddReviewModal()

  return (
    <>
     {hasMoreReviews && (
        <View style={styles.container}>
          <View style={styles.shadowWrapper}>
            <TouchableOpacity style={styles.moreReviewsButton} onPress={onViewAll}>
              <Text style={styles.buttonText}>Vezi mai multe recenzii</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {!addReview && (
        <View style={styles.container}>
          <TouchableOpacity onPress={openAddReviewModal}>
            <Text style={styles.buttonText}>Adaugă recenzie</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  )
}

export default Buttons