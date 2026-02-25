import { colors } from "@/shared/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 17,
  },
  text: {
    fontFamily: "OpenSans-Bold",
    fontSize: 17,
    lineHeight: 23,
    color: colors.black,
  },
});

export default styles;
