import { colors } from "@/shared/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  container: {
    paddingHorizontal: 8,
    paddingBottom: 48,
  },
  sheet: {
    backgroundColor: "rgba(255,255,255,.75)",
    borderRadius: 16,
    marginBottom: 8,
  },
  action: {
    height: 56,
    alignItems: "center",
    justifyContent: "center"
  },
  separator: {
    height: 1,
    backgroundColor: "rgba(17, 17, 17, .3)",
  },
  optionText: {
    fontSize: 20,
    fontFamily: "SfProText-Regular",
  },
  editText: {
    color: colors.iosBlue
  },
  deleteText: {
    color: colors.error,
  },
  cancel: {
    backgroundColor: colors.white,
    height: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  cancelText: {
    fontFamily: "SfProText-Semibold",
    color: colors.iosBlue,
    fontSize: 20,
  },
})

export default styles