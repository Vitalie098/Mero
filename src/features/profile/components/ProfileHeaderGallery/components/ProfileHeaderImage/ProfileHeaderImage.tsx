import styles from "./styles"
import { Image } from 'expo-image'

type ProfileHeaderImageProps = {
  uri: string
}

const ProfileHeaderImage = ({uri}: ProfileHeaderImageProps) => {
  return  <Image source={{ uri }} style={styles.image} contentFit="cover" />
}

export default ProfileHeaderImage