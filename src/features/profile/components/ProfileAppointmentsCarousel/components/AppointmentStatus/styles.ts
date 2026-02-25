import { colors } from "@/shared/theme"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
    height: 24,
    paddingLeft: 8,
    paddingRight: 7,
    borderRadius: 5,
    marginBottom: 5
  },
  text: { 
    fontFamily: "OpenSans-SemiBold",
    fontSize: 12,
 },
  confirmed: { 
    backgroundColor: "#E9FAF3" 
  },
  textConfirmed: { 
    color: "#2DCE89" 
  },
  done: { 
    backgroundColor: "#E7EAED" 
  },
  textDone: { 
    color: colors.secondaryText 
  }
})

export default styles