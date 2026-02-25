import type { ProfileImage } from "@/features/profile/services/profileTypes";

export type AnonymousFeedbackDetails = {
  _id: string;
  isAnonymous: true;
  feedback: {
    score: number;
    review?: string;
    hasText?: boolean
  };
  pageId?: string;
  workerId?: string;
};

export type VisibleFeedbackDetails = {
  _id: string;
  isAnonymous?: false;
  user?: {
    firstname?: string;
    lastname?: string;
    profilePhoto?: ProfileImage;
  };
  feedback: {
    score: number;
    review?: string;
    hasText?: boolean
  };
};

export type PublicFeedbackDetails = AnonymousFeedbackDetails | VisibleFeedbackDetails;

export type PageReviews = {
  data: PublicFeedbackDetails[];
  next?: string; 
};