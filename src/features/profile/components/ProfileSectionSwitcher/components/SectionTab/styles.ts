import { colors, radii } from "@/shared/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tab: {
    paddingTop: 8,
    paddingBottom: 5,
    paddingLeft: 16,
    paddingRight: 15,
    borderRadius: radii.full,
  },
  tabActive: {
    backgroundColor: colors.primary,
  },
  tabText: {
    color: colors.primary,
    fontFamily: "OpenSans-SemiBold",
  },
  tabTextActive: {
    color: colors.white
  }
});

export default styles