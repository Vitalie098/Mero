import {KeyboardAvoidingView, Platform, Pressable, Text, TextInput, View} from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router"
import RatingSelector from "../../components/RatingSelector"
import ScreenModalHeader from "@/shared/ui/ScreenModalHeader"
import styles from "./styles"
import { useEffect, useState } from "react"
import { useCompleteMyReview, useMyReviewState, useUpsertMyReview } from "../../store/userReview/userReview.selectors"
import Toast from "react-native-toast-message"
import { useProfileFromCache } from "@/features/profile/hooks/useProfileFromCache" 
import { colors } from "@/shared/theme"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const iconSize = {width: 28, height: 27}

type Param = {slug: string}

const LeaveReviewScreen = () => {
  const [rating, setRating] = useState(5)
  const [text, setText] = useState("")
  
  const insets = useSafeAreaInsets()
  const router = useRouter()

  const {slug} = useLocalSearchParams<Param>()
  const profile = useProfileFromCache(slug)
  const myReview = useMyReviewState(profile?._id.toString() as string)

  const completeMyReview = useCompleteMyReview()
  const upsertMyReview = useUpsertMyReview()

  useEffect(() => {
    if (!myReview) return

    setRating(myReview.feedback.score ?? 5)
    setText(myReview.feedback.review ?? "")
  }, [myReview])

  const showSuccessToast = () => {
    Toast.show({type: 'success', text1: 'Mersi.', text2: 'Comentariul a fost salvat!', topOffset: 90});
  } 

  const onClose = () => {
    if(!myReview.completed){
      profile?._id && completeMyReview(profile?._id.toString())
      showSuccessToast()
    }
    router.back()
  }

  const onSubmit = () => {
    upsertMyReview({ profileId: profile?._id as string, rating, text: text.trim(), completed: true })
    showSuccessToast()
    router.back()
  }

  const shouldButtonBeDisabled = (() => {
    const review = myReview.feedback
    const hasMinimumRating = rating > 0

    if(!myReview.completed && hasMinimumRating) return false
    return (rating === review.score && text.trim() === review.review) || !hasMinimumRating
  })()

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScreenModalHeader title="Descrie experiența ta" onClose={onClose}/>

      <View style={[styles.container, {paddingBottom: insets.bottom}]}>
        <View style={styles.ratingContainer}>
          <Text style={styles.date}>
            22 feb. 2024{" "}
            <Text style={styles.businessName}>(Robert - <Text style={styles.profileSlug}>{profile?.slug.split("-").join(" ")})</Text></Text>
          </Text>
          
          <RatingSelector slug={slug} size={iconSize} withoutText={true} rating={rating} setRating={setRating} />
        </View>

        <View style={styles.content}>
          <View style={styles.profileInfo}>
            <View style={styles.imageWrapper} />
            <Text style={styles.username}>Vitalie D.</Text>
          </View>

          <Text style={styles.title}>Descrie experiența ta</Text>
          <Text style={styles.subtitle}>
            Opinia ta îi ajută la îmbunătățirea calității serviciilor, iar
            viitorii clienți primesc așteptări corecte.
          </Text>

          <View style={styles.textWrap}>
            <TextInput
              value={text}
              onChangeText={setText}
              placeholder="Ajută-i pe alții oferind detalii despre experiența ta..."
              placeholderTextColor={colors.secondaryText}
              multiline
              textAlignVertical="top"
              style={styles.textArea}
            />
          </View>
        </View>


        <Pressable
          onPress={onSubmit}
          disabled={shouldButtonBeDisabled}
          style={[styles.btn, shouldButtonBeDisabled && { opacity: 0.6}]}
        >
          <Text style={styles.btnText}>Trimite</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LeaveReviewScreen
