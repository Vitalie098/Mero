import { View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import styles from "./styles"
import ReviewCard from "@/shared/ui/ReviewCard"
import ReviewsSummary from "@/shared/ui/ReviewsSummary"
import { useMyVisibleReview } from "@/features/review/store/userReview/userReview.selectors"
import { useProfileFromCache } from "@/features/profile/hooks/useProfileFromCache"
import Buttons from "./Buttons"
import { useReviewsInfinite } from "@/features/review/hooks/useReviewsInfinite"

const initialFetchNumber = 3

type ReviewsPreviewSectionProps = {
  slug: string
}

const ReviewsPreviewSection = ({slug}: ReviewsPreviewSectionProps) => {
  const insets = useSafeAreaInsets()

  const profile = useProfileFromCache(slug)
  const reviewsQuery = useReviewsInfinite(profile?._id as string, initialFetchNumber)
  const reviews = reviewsQuery.data?.pages[0] 
  
  const myReview = useMyVisibleReview(profile?._id.toString() as string)
  const latestReviews = reviews ? reviews.data.slice(0, myReview?.completed ? 2 : 3) : []

  return (
    <View style={[styles.container, {paddingBottom: insets.bottom}]}>
      <ReviewsSummary slug={slug}/>

      <View style={styles.list}>
        {myReview?.completed && <ReviewCard slug={slug} review={myReview} isMyReview={true}/>}
        {latestReviews?.map((r) => <ReviewCard slug={slug} key={r._id} review={r} /> )}
      </View>

      <Buttons slug={slug} addReview={!!myReview} hasMoreReviews={!!reviews?.next}/>
    </View>
  )
}

export default ReviewsPreviewSection