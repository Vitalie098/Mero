import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import styles from "./styles"
import { useProfileFromCache } from '@/features/profile/hooks/useProfileFromCache'

type ReviewsSummaryProps = {
  slug: string
  style?: StyleProp<ViewStyle>
}

const ReviewsSummary = ({slug, style}: ReviewsSummaryProps) => {
  const profile = useProfileFromCache(slug)

  return (
    <View style={[styles.content, style]}>
      <Text style={styles.title}>Recenzii și evaluări</Text>
      <Text style={styles.value}>{profile?.feedback.score.toFixed(1)}</Text>
      <Text style={styles.text}>{profile?.feedback.total} evaluări</Text>
    </View>
  )
}

export default ReviewsSummary