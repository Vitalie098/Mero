import { colors, radii } from "@/shared/theme";
import { StyleSheet } from "react-native";

const PADDING_X = 16
const CIRCLE = 42
const GAP = 16

const RIGHT_W = CIRCLE * 2 + GAP
const LEFT_W = CIRCLE
const SIDE_GUARD = Math.max(LEFT_W, RIGHT_W) + PADDING_X

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  bar: {
    height: 50,
    paddingHorizontal: PADDING_X,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    // position: "absolute",
    // left: 0,
    // right: 0,
    // alignItems: "center",
  },
  title: {
    fontFamily: "OpenSans-SemiBold",
    color: colors.black,
    paddingLeft: SIDE_GUARD,
    paddingRight: SIDE_GUARD,
  },
  right: {
    flexDirection: "row",
    gap: GAP,
    alignItems: "center",
  },
  circleBtn: {
    width: CIRCLE,
    height: CIRCLE,
    borderRadius: radii.full,
    alignItems: "center",
    justifyContent: "center",
  },
});


export default styles