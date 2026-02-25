import { colors, radii } from "@/shared/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 24,
  },
  shadowWrapper: {
    borderRadius: 40,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 18, 
    elevation: 6,
  },
  moreReviewsButton: {
    backgroundColor: "rgb(242,242,254)",
    width: 204,
    height: 43,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radii.full,
  },
  buttonText: {
    color: colors.primary, 
    fontFamily: "OpenSans-SemiBold"
  }
});

export default styles;