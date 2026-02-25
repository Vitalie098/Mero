import { colors } from "@/shared/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    gap: 16,
    marginBottom: 24
  },
  title: {
    fontFamily: "Merriweather-Bold", 
    fontSize: 18, 
    lineHeight: 23, 
    color: colors.black,
    marginLeft: 18,
  },
  list: { 
    gap: 12 
  }
})

export default styles