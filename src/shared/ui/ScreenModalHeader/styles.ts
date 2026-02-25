import { colors } from "@/shared/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 12,
    zIndex: 10
  },
  header: {
    height: 50,
    paddingHorizontal: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: { 
    fontFamily: "OpenSans-SemiBold",
    color: colors.black 
  },
  button: {
    position: "absolute", 
    right: 24 
  }
});

export default styles