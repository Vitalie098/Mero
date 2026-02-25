import { FlatList, View } from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import ReviewsSummary from "@/shared/ui/ReviewsSummary"
import styles from "./styles"
import { useProfileFromCache } from "@/features/profile/hooks/useProfileFromCache"
import { useReviewsInfinite } from "@/features/review/hooks/useReviewsInfinite"
import { useMyVisibleReview } from "../../store/userReview/userReview.selectors"
import ListEmptyComponent from "../../components/ListEmptyComponent"
import ListFooterComponent from "../../components/ListFooterComponent"
import { useMemo } from "react"
import Loading from "@/shared/ui/Loading"
import { capitalizeFirst } from "@/shared/utils/capitalizeFirst"
import Review from "./components/Review"
import ScreenModalHeader from "@/shared/ui/ScreenModalHeader"

type Params = { slug: string }

const PAGE_SIZE = 15

const AllReviewsScreen = () => {
  const router = useRouter()
  const {slug} = useLocalSearchParams<Params>()
  const insets = useSafeAreaInsets()

  const profile = useProfileFromCache(slug)
  const pageId = profile?._id

  const reviewsQuery = useReviewsInfinite(pageId as string, PAGE_SIZE)
  const userReview = useMyVisibleReview(pageId as string)

  const onClose = () => router.back()
  const onRefresh = () => reviewsQuery.refetch()

  const reviews = useMemo(() => {
    return reviewsQuery.data?.pages.flatMap((p) => p.data) ?? []
  }, [reviewsQuery.data])
 
  const onEndReached = () => {
    if (reviewsQuery.hasNextPage && !reviewsQuery.isFetchingNextPage) {
      reviewsQuery.fetchNextPage()
    }
  }


  if(reviewsQuery.isLoading) return <Loading />

  return (
    <View style={styles.screen}>
      <ScreenModalHeader title={capitalizeFirst(profile?.slug.split("-").join(" ")) ?? "Recenzii"} onClose={onClose}/>

      <FlatList
        data={reviews}
        keyExtractor={(r) => r._id}
        style={styles.flatList}
        ListHeaderComponent={() => <ReviewsSummary slug={slug} style={styles.listHeaderComponent}/>}
        contentContainerStyle={[styles.list, { paddingBottom: insets.bottom }]}
        showsVerticalScrollIndicator={false}
        refreshing={reviewsQuery.isRefetching && !reviewsQuery.isFetchingNextPage}
        onRefresh={onRefresh}
        onEndReachedThreshold={0.5}
        onEndReached={onEndReached}
        ListEmptyComponent={() => <ListEmptyComponent/>}
        ListFooterComponent={() => <ListFooterComponent reviewsQuery={reviewsQuery} />}
        renderItem={({ item, index }) => <Review index={index} item={item} slug={slug} userReview={userReview} />}
      />
    </View>
  )
}

export default AllReviewsScreen