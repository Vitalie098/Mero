import { colors } from "@/shared/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  headerContainer: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 12,
  },
  closeButton: {
    position: "absolute", 
    right: 24
  },
  headerContent: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontFamily: "OpenSans-SemiBold", 
    color: colors.black 
  },
  flatList: {
    flex: 1, 
    paddingTop: 25,
  },
  listHeaderComponent: {
    marginBottom: 7
  },
  list: {
    gap: 16,
    paddingHorizontal: 16
  },
});

export default styles;
