import { View, ActivityIndicator } from "react-native"
import { InfiniteData, UseInfiniteQueryResult } from "@tanstack/react-query"
import { PageReviews } from "@/features/review/services/reviewTypes"
import styles from "./styles"

type ListFooterComponentProps = {
  reviewsQuery: UseInfiniteQueryResult<InfiniteData<PageReviews, unknown>,Error>
}

const ListFooterComponent = ({ reviewsQuery }: ListFooterComponentProps) => {
  if (!reviewsQuery.isFetchingNextPage) return null

  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  )
}

export default ListFooterComponent
