import { colors, radii } from "@/shared/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 16,
    paddingLeft: 16,
    paddingRight: 36,
    gap: 12,
  },
  businessReplyContainer: {
    flex: 1,
    gap: 12,
    marginTop: 15,
    flexDirection: "row" 
  },
  avatarImg: { 
    width: 32, 
    height: 32, 
    borderRadius: radii.full 
  },
  businessImgWrapper: {
    width: 30, 
    height: 30, 
  },
  avatarFallback: {
    width: 32,
    height: 32,
    borderRadius: radii.full,
    backgroundColor: "#E9ECEF",
    alignItems: "center",
    justifyContent: "center"
  },
  wrapper: {
    flex: 1
  },
  content: { 
    flex: 1
  },
  text: { 
    fontFamily: "OpenSans-Regular",
    color: colors.secondaryText,
    lineHeight: 19,
  },
  authorName: {
    fontFamily: "OpenSans-SemiBold",
    fontSize: 16,
    color: colors.black,
    marginBottom: 5
  },
  rating: {
    fontFamily: "OpenSans-Regular",
    marginLeft: 6,
    lineHeight: 19,
    color: colors.black
  },
  authorInitials: {
    fontFamily: "OpenSans-Bold",
    fontSize: 16,
    color: "#525F7F",
    lineHeight: 22
  },
  businessInitials: {
    fontSize: 14,
    lineHeight: 19
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center", 
    marginBottom: 5, 
    gap: 2
  }
});

export default styles