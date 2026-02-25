import { colors } from "@/shared/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    right: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  fade: {
    width: 100,
  },
  moreBtn: { 
    position: "absolute", 
    right: 0 
  },
  more: { 
    fontFamily: "OpenSans-Regular", 
    color: colors.primary, 
    lineHeight: 19 
  },
});

export default styles 