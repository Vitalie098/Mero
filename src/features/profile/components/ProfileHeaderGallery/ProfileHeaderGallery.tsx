import { View, FlatList } from "react-native"
import styles from "./styles"
import { PageImage } from "../../services/profileTypes";
import ProfileHeaderImage from "./components/ProfileHeaderImage";

type ProfileHeaderGalleryProps = {
  imageUrls: PageImage[]
}

const ProfileHeaderGallery = ({ imageUrls }: ProfileHeaderGalleryProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={imageUrls}
        keyExtractor={(el) => el._id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ProfileHeaderImage uri={item.medium} />}
      />
    </View>
  )
}

export default ProfileHeaderGallery
