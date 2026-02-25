import { colors } from "@/shared/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    marginBottom: 15
  },
  title: {
    marginLeft: 2,
    fontFamily: "Merriweather-Bold",
    fontSize: 24,
    color: colors.black,
    lineHeight: 30,
    marginBottom: 16
  },
  value: { 
    fontFamily: "Merriweather-Black",
    fontSize: 40, 
    color: colors.black,
    lineHeight: 50,
    marginBottom: 8,
    marginLeft: 2
  },
  text: {
    fontFamily: "OpenSans-Regular", 
    color: colors.black, 
    lineHeight: 19, 
    marginLeft: 5
  }
});

export default styles