import { colors } from "@/shared/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { 
    position: "relative" 
  },
  measureText: {
    position: "absolute",
    opacity: 0,
    zIndex: -1,
    left: 0,
    right: 0,
  },
  less: {
    fontFamily: "OpenSans-Regular",
    marginTop: 6,
    color: colors.primary,
    lineHeight: 19,
  },
});

export default styles 