import { View, Text } from "react-native"
import styles from "./styles"
import { EmptyStarIcon, StarIcon } from "@/shared/icons"
import { LABELS } from "./utils/labels"

type RatingOptionProps = {
  index: number
  rating: number
  withoutText?: boolean
  iconSize: {
    width?: number
    height?: number
  }
}

const RatingOption = ({ index, rating, iconSize, withoutText }: RatingOptionProps) => {
  return (
    <View style={styles.container}>
      {index >= rating ? (
        <EmptyStarIcon width={iconSize.width} height={iconSize.height} />
      ) : (
        <StarIcon width={iconSize.width} height={iconSize.height} />
      )}

      {!withoutText && (<Text style={styles.starLabel}>{LABELS[(index + 1)]}</Text>)}
    </View>
  )
}

export default RatingOption
