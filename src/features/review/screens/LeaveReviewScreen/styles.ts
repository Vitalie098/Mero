import { colors, radii } from "@/shared/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white
  },
  container: {
    flex: 1,
    paddingHorizontal: 24
  },
  ratingContainer: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E9ECEF",
    paddingBottom: 24,
    marginBottom: 24,
    paddingTop: 25
  },
  businessName: {
    color: colors.secondaryText,
  },
  profileSlug: {
    textTransform: "capitalize"
  },
  date: {
    color: colors.black,
    fontFamily: "OpenSans-Regular",
    lineHeight: 19,
    marginBottom: 11
  },
  imageWrapper: {
    width: 24,
    height: 24,
    backgroundColor: "#2d1247",
    borderRadius: radii.full
  },
  content: {
    flex: 1
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16
  },
  username: {
    fontFamily: "OpenSans-SemiBold",
    color: colors.black,
    fontSize: 16
  },
  title: {
    fontFamily: "Merriweather-Bold",
    fontSize: 24,
    color: colors.black,
    lineHeight: 30,
    marginBottom: 10
  },
  subtitle: {
    fontFamily: "OpenSans-Regular",
    fontSize: 16,
    color: colors.black,
    lineHeight: 22,
    marginBottom: 15
  },
  textWrap: {
    borderWidth: 1,
    borderColor: "#DEE2E6",
    borderRadius: 6,
    paddingVertical: 13,
    paddingHorizontal: 14
  },
  textArea: {
    fontFamily: "OpenSans-Regular",
    height: 82,
    fontSize: 16,
    color: colors.black,
    lineHeight: 22
  },
  btn: {
    height: 51,
    borderRadius: radii.full,
    backgroundColor: "#1E40FF",
    alignItems: "center",
    justifyContent: "center"
  },
  btnText: {
    fontFamily: "OpenSans-SemiBold",
    color: colors.white,
    fontSize: 16
  }
})

export default styles
