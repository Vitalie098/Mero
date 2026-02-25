import { PublicFeedbackDetails } from "@/features/review/services/reviewTypes";
import { getInitials } from "./getInitials";

const getReviewerInitials = (review: PublicFeedbackDetails) => {
  if (review.isAnonymous) return "A";

  return getInitials(
    review.user?.firstname,
    review.user?.lastname
  );
}

export default getReviewerInitials