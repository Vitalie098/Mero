import { colors } from "@/shared/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16, 
    paddingTop: 24 
  },
  sectionTitle: {
    fontFamily: "Merriweather-Bold",
    fontSize: 24,
    lineHeight: 30,
    color: colors.black
  }
})

export default styles