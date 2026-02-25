import { Easing } from "react-native"
import RatingOption from "./components/RatingOption"
import StarRating from "react-native-star-rating-widget"
import { useRouter } from "expo-router"
import styles from "./styles"
import { useUpsertMyReview } from "../../store/userReview/userReview.selectors"
import { useProfileFromCache } from "@/features/profile/hooks/useProfileFromCache"
import { Routes } from "@/shared/constants/routes"

type RatingSelectorProps = {
  slug: string
  rating: number
  size?: {width: number, height: number}
  withoutText?: boolean
  onClose?: () => void
  setRating: React.Dispatch<React.SetStateAction<number>>
}

const RatingSelector = ({slug, rating, setRating,  withoutText, onClose, size = {width: 45, height: 43}}: RatingSelectorProps) => {
  const router = useRouter()

  const profile = useProfileFromCache(slug)
  const upsertMyReview = useUpsertMyReview()

  const onRatingEnd = (r: number) => {
    if (onClose && r > 0) {
      upsertMyReview({profileId: profile?._id as string, rating: r, firstname: "Donceac", lastname: "Vitalie"})

      setTimeout(() => {
        router.push(Routes.modalLeaveReview(slug))
        setRating(0) 
      }, 300)

      onClose()
    }  
  }

  return (
    <StarRating
      step="full"
      rating={rating}
      onChange={setRating}
      onRatingEnd={onRatingEnd}
      starStyle={[styles.starStyleV1, !onClose && styles.starStyleV2]}
      animationConfig={{scale: 1.1, duration: 100, delay: 150, easing: Easing.linear}}
      StarIconComponent={({ index }) => (
        <RatingOption index={index} rating={rating} withoutText={withoutText} iconSize={size} />
      )}
    />
  )
}

export default RatingSelector
