import { colors } from "@/shared/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.5)",
    justifyContent: "flex-end",
  },
  wrapper: {
    backgroundColor: colors.white
  },
  sheet: {
    paddingHorizontal: 24,
    paddingTop: 25,
  },
  starsWrapper: {
    paddingHorizontal: "2.4%"
  },
  title: {
    fontFamily: "OpenSans-Bold",
    fontSize: 20,
    color: colors.black,
    lineHeight: 27,
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: "OpenSans-Regular",
    fontSize: 16,
    color: colors.secondaryText,
    lineHeight: 22,
    marginBottom: 16,
  },
  laterButton: {
    marginTop: 24,
    height: 43,
    alignSelf: "center",
    justifyContent: "center",
  },
  laterText: {
    fontFamily: "OpenSans-SemiBold",
    fontSize: 16,
    color: colors.secondaryText,
  },
  profileSlug: {
    textTransform: "capitalize"
  }
});

export default styles;