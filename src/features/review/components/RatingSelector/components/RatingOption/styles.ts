import { colors } from "@/shared/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  starLabel: { 
    fontFamily: "OpenSans-Regular", 
    fontSize: 12, 
    color: colors.black,
    lineHeight: 16,
    marginTop: 11
  }
})

export default styles