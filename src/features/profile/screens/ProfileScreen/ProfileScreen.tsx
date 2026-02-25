import { useRef } from "react"
import { View } from "react-native"
import Animated, { useSharedValue, useAnimatedScrollHandler } from "react-native-reanimated"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import ProfileStickyHeader from "../../components/ProfileStickyHeader"
import ProfileMetaHeader from "../../components/ProfileMetaHeader"
import ProfileAppointmentsCarousel from "../../components/ProfileAppointmentsCarousel"
import ProfileHeaderGallery from "../../components/ProfileHeaderGallery"
import ProfileSectionSwitcher from "../../components/ProfileSectionSwitcher"
import ModalReviewRating from "@/features/review/modals/ModalReviewRating"
import { AnimatedScrollView } from "react-native-reanimated/lib/typescript/component/ScrollView"
import styles from "./styles"
import Loading from "@/shared/ui/Loading"
import Error from "@/shared/ui/Error"
import { useProfile } from "../../hooks/useProfile"
import { useLocalSearchParams } from "expo-router"

const ProfileScreen = () => {
  const { slug } = useLocalSearchParams<{ slug: string }>()
  const { data: profile, isPending, isError, error } = useProfile(slug)

  const scrollY = useSharedValue(0)
  const insets = useSafeAreaInsets()

  const scrollRef = useRef<AnimatedScrollView>(null)

  const contentTopYRef = useRef<number>(0)
  const tabsHeightRef = useRef<number>(0)

  const onContentTopLayout = (y: number) => contentTopYRef.current = y
  const onTabsHeight = (h: number) => tabsHeightRef.current = h

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y
    },
  })

  const scrollToContentTop = () => {
    const HEADER_OFFSET = 60 + insets.top
    const TABS_OFFSET = tabsHeightRef.current
    const EXTRA_GAP = 12

    const y = Math.max(0, contentTopYRef.current - (HEADER_OFFSET + TABS_OFFSET + EXTRA_GAP))
    scrollRef.current?.scrollTo({ y, animated: true })
  }

  if (isPending) { return <Loading /> }
  if (isError) { return <Error message={error.message} /> }

  return (
    <View style={styles.root}>
      <ProfileStickyHeader slug={slug} scrollY={scrollY} />

      <Animated.ScrollView
        ref={scrollRef}
        bounces={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <ProfileHeaderGallery imageUrls={profile.images} />
        <ProfileMetaHeader slug={slug} />
        <ProfileAppointmentsCarousel />

        <ProfileSectionSwitcher
          slug={slug}
          onTabsHeight={onTabsHeight}
          onRequestScrollToContentTop={scrollToContentTop}
          onContentTopLayout={onContentTopLayout}
        />
      </Animated.ScrollView>

      <ModalReviewRating slug={slug} />
    </View>
  )
}

export default ProfileScreen

