import { View, Text, Pressable } from "react-native"
import { DotsIcon } from "@/shared/icons"
import styles from "./styles"
import { useOpenReviewOptionsModal } from "@/features/review/store/reviewModals/reviewModals.selectors"

type MyReviewProps = {
  slug: string
}

const MyReview = ({ slug }: MyReviewProps) => {
  const openReviewOptionsModal = useOpenReviewOptionsModal()
  const onPress = () => openReviewOptionsModal(slug)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recenzia ta</Text>
      <Pressable onPress={onPress} hitSlop={8}>
        <DotsIcon />
      </Pressable>
    </View>
  )
}

export default MyReview
