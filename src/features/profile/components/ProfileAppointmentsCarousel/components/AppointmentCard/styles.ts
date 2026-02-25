import { colors } from "@/shared/theme"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  card: {
    minWidth: 223,
    height: 89,
    paddingTop: 8,
    paddingBottom: 7,
    paddingHorizontal: 9,
    borderRadius: 6,
    backgroundColor: colors.white,
  },
  cardTitle: { 
    fontFamily: "OpenSans-SemiBold",
    fontSize: 17,
    color: colors.black,
    marginBottom: 3
  },
  dataLabel: {
    fontFamily: "OpenSans-Regular",
    lineHeight: 19
  },
  ml: {
    marginLeft: 18
  }
})

export default styles