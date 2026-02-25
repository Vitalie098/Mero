import { colors, radii} from "@/shared/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    borderRadius: radii.md,
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white
  }
});

export default styles;
