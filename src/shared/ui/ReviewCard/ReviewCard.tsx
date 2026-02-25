import { View } from "react-native"
import ReviewCommentItem from "./components/ReviewCommentItem/ReviewCommentItem"
import MyReview from "./components/MyReview"
import styles from "./styles"
import { PublicFeedbackDetails } from "@/features/review/services/reviewTypes"

type ReviewCardType = {
  slug: string
  isMyReview?: boolean
  review: PublicFeedbackDetails
}

const ReviewCard = ({slug, review, isMyReview}: ReviewCardType) => {
  return (
    <View style={styles.container}>
      {isMyReview && <MyReview slug={slug}/>}
      
      <ReviewCommentItem review={review} />
    </View>
  )
}

export default ReviewCard