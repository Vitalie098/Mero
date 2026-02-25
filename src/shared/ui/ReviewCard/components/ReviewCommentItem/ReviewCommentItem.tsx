import { View, Text } from 'react-native'
import { Image } from 'expo-image';
import styles from "./styles"
import { EmptyStarIcon, StarIcon } from '@/shared/icons';
import { AnonymousFeedbackDetails, PublicFeedbackDetails } from '@/features/review/services/reviewTypes';
import getReviewerInitials from '@/shared/utils/getReviewerInitials';
import { mockOwnerResponse } from '@/features/review/data/mock/reviews.mock';
import ExpandableText from '@/shared/ui/ExpandableText';

const isAnonymousReview = (review: PublicFeedbackDetails): review is AnonymousFeedbackDetails => 
  review.isAnonymous === true

type ReviewCommentItemProps= {
  review: PublicFeedbackDetails
  isOwnerResponse?: boolean
}

const ReviewCommentItem = ({review, isOwnerResponse}: ReviewCommentItemProps) => {
  const isAnonymous = isAnonymousReview(review)
  const isMyReview = !isAnonymous && review.user?.firstname === "Donceac" 

  return (
    <View style={[!isOwnerResponse ? styles.card : styles.businessReplyContainer]}>
      <View>
        {!isAnonymous && review.user?.profilePhoto ? (
          <Image source={{ uri: review.user.profilePhoto.small }} style={[styles.avatarImg, isOwnerResponse && styles.businessImgWrapper]} />
        ) : (
          <View style={[styles.avatarFallback, isOwnerResponse && styles.businessImgWrapper]}>
            {!isAnonymous &&<Text style={[styles.authorInitials, isOwnerResponse && styles.businessInitials]}>{getReviewerInitials(review)}</Text>}
          </View>
        )}
      </View>

      <View style={styles.wrapper}>
        <View style={styles.content}>
          <Text style={styles.authorName}>
            {!isAnonymous ? `${review.user?.firstname} ${review.user?.lastname}` : "A" }
          </Text>

          {!isOwnerResponse && (
            <View style={styles.starsContainer}>
              {Array.from({length: review.feedback.score},(_, i) => i + 1).map((i) => <StarIcon key={i} width={12} height={11}/>)}
              {Array.from({length: 5 - review.feedback.score},(_, i) => i + 1).map((i) => <EmptyStarIcon key={i} width={12} height={11}/>)}
              <Text style={styles.rating}>{review.feedback.score} din 5</Text>
            </View>
          )}

          {review.feedback.hasText && !isOwnerResponse && <Text style={styles.text}>{review.feedback.review}</Text>}
          {review.feedback.hasText && isOwnerResponse && <ExpandableText text={review.feedback.review as string} style={styles.text} />}

         {/* 
          Am observat ca in mare parte utilizatorii nu adaugă comentarii.
          Pentru a demonstra funcționalitatea de expand ("mai mult"),
          adaug temporar mock data la comentariul propriu, ca si cum 
          proprietarul afacerii a raspuns la comentariu recent creat.
        */}

          {isMyReview && (
            <ReviewCommentItem review={mockOwnerResponse as unknown as PublicFeedbackDetails} isOwnerResponse={true}/>
          )}
        </View> 
      </View> 
    </View>
  );
}

export default ReviewCommentItem