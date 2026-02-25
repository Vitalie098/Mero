import { View, Text } from "react-native"
import { StarIcon } from "@/shared/icons"
import styles from "./styles"
import { useProfileFromCache } from "../../hooks/useProfileFromCache"
import { Image } from "expo-image"

type ProfileMetaHeaderProps = {
  slug: string
}

const ProfileMetaHeader = ({slug}: ProfileMetaHeaderProps) => {
  const profile = useProfileFromCache(slug)
  
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.left}>
          <Text style={styles.brandName}>{profile?.name}</Text>

          <View style={styles.ratingRow}>
            <StarIcon />
            <Text style={styles.ratingText}>{profile?.feedback.score.toFixed(2)}</Text>
            <Text style={styles.assessments}>({profile?.feedback.total} evaluări)</Text>
          </View>

          <Text style={styles.address}>{profile?.location.address}</Text>
        </View>

        <View style={styles.logo}>  
          <Image source={{ uri: profile?.profilePhoto.small }} style={styles.image} />
        </View>
      </View>
    </View>
  )
}

export default ProfileMetaHeader