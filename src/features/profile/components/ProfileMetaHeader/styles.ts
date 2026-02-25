import { colors, radii } from "@/shared/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 23
  },
  row: {
    flexDirection: "row",
    gap: 48
  },
  left: { 
    flex: 1
  },
  brandName: {
    fontFamily: "Merriweather-Bold", 
    fontSize: 18, 
    lineHeight: 23, 
    marginBottom: 7,
    color: colors.black
  },
  ratingRow: { 
    flexDirection: "row", 
    alignItems: "center", 
    gap: 5, 
    marginBottom: 8 
  },
  ratingText: {
    fontFamily: "OpenSans_Bold", 
    lineHeight: 19,
    color: "#2A2E43"
  },
  assessments: { 
    fontFamily: "OpenSans-Regular",
    color: colors.primary,
    lineHeight: 19
  },
  address: {
    color: colors.secondaryText, 
    fontFamily: "OpenSans-Regular", 
    fontSize: 16, 
    lineHeight: 22
  },
  logo: {
    width: 58,
    height: 58,
    borderRadius: radii.full,
  },
  image: {
    flex: 1, 
    borderRadius: radii.full
  }
});

export default styles