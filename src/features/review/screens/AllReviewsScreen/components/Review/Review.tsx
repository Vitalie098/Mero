import { View } from "react-native"
import ReviewCard from "@/shared/ui/ReviewCard"
import { PublicFeedbackDetails } from "@/features/review/services/reviewTypes"
import styles from "./styles"
import { MyReview } from "@/features/review/store/userReview/userReview.types"

type ReviewProps = {
  index: number
  slug: string
  item: PublicFeedbackDetails
  userReview: MyReview | null
}

const Review = ({index, item, userReview, slug}: ReviewProps) => {
  return (
    <>
      {index === 0 && userReview && (
        <View style={styles.wrapper}>
          <ReviewCard slug={slug} review={userReview} isMyReview />
        </View>
      )}
      <ReviewCard slug={slug} review={item} />
    </>
  )
}

export default Review
