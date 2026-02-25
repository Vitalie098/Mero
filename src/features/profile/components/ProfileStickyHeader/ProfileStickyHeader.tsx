import { Pressable, Text, View, Share } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Animated, {SharedValue} from "react-native-reanimated"
import {ArrowBackIcon, DarkHeartIcon, DarkShareIcon, LightHeartIcon, LightShareIcon, RedHeartIcon} from "@/shared/icons"
import { useRouter } from "expo-router"
import { useProfileHeaderAnimation } from "../../hooks/useProfileHeaderAnimation"
import { useIsFavorite, useToggleFavorite } from "../../store/favorites/favorites.selectors"
import CrossfadeIcon from "@/shared/ui/CrossfadeIcon"
import { useProfileFromCache } from "../../hooks/useProfileFromCache"
import { capitalizeFirst } from "@/shared/utils/capitalizeFirst"
import styles from "./styles"

type ProfileStickyHeaderProps = {
  slug: string
  scrollY: SharedValue<number>
}
const ProfileStickyHeader = ({ slug, scrollY }: ProfileStickyHeaderProps) => {
  const {headerProgress, iconBgProgress, headerStyle, titleStyle, iconBgStyle, } = useProfileHeaderAnimation({ scrollY })

  const profile = useProfileFromCache(slug)
  const title = capitalizeFirst(profile?.slug.split("-").join(" ")) || ""

  const isFav = useIsFavorite(profile?._id as string)
  const toggle = useToggleFavorite()

  const insets = useSafeAreaInsets()
  const router = useRouter()
  
  const save = () => profile?._id && toggle(profile._id)
  const onShare= () => Share.share({ message: `${title}` })

  return (
    <Animated.View style={[styles.container, { paddingTop: insets.top }, headerStyle]}>
      <View style={styles.bar}>
        <Pressable onPress={() => router.back()} hitSlop={8}>
          <Animated.View style={[styles.circleBtn, iconBgStyle]}>
            <CrossfadeIcon
              progress={headerProgress}
              light={<ArrowBackIcon stroke="#FFFFFF" />}
              dark={<ArrowBackIcon stroke="#111827" />}
            />
          </Animated.View>
        </Pressable>

        <Animated.View style={[styles.titleOverlay, titleStyle]} pointerEvents="none">
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
        </Animated.View>

        <View style={styles.right}>
          <Pressable hitSlop={8} onPress={save}>
            <Animated.View style={[styles.circleBtn, iconBgStyle]}>
              {isFav ? (
                <RedHeartIcon />
              ) : (
                <CrossfadeIcon 
                  progress={iconBgProgress} 
                  light={<LightHeartIcon fill={"red"}/>} 
                  dark={<DarkHeartIcon fill={"red"} />} 
                />
              )}
            </Animated.View>
          </Pressable>

          <Pressable onPress={onShare} hitSlop={8}>
            <Animated.View style={[styles.circleBtn, iconBgStyle]}>
              <CrossfadeIcon progress={iconBgProgress} light={<LightShareIcon />} dark={<DarkShareIcon />} />
            </Animated.View>
          </Pressable>
        </View>
      </View>
    </Animated.View>
  )
}

export default ProfileStickyHeader