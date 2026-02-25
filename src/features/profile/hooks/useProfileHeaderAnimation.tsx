import { colors } from "@/shared/theme"
import { Platform, StyleSheet } from "react-native"
import {Extrapolation, interpolate, interpolateColor, SharedValue, useAnimatedStyle, useDerivedValue} from "react-native-reanimated"

type Params = {
  scrollY: SharedValue<number>
}

export const useProfileHeaderAnimation = ({ scrollY }: Params) => {
  const headerProgress = useDerivedValue(() => {
    return interpolate(scrollY.value, [0, 80], [0, 1], Extrapolation.CLAMP)
  })

  const iconBgProgress = useDerivedValue(() => {
    return interpolate(scrollY.value, [0, 30], [0, 1], Extrapolation.CLAMP)
  })

  const headerStyle = useAnimatedStyle(() => {
    const p = headerProgress.value
    const borderAlpha = 0.08 * p

    return {
      backgroundColor: interpolateColor(
        p,
        [0, 1],
        ["rgba(255,255,255,0)", "rgba(255,255,255,1)"]
      ),

      borderBottomColor: `rgba(0,0,0,${borderAlpha})`,
      borderBottomWidth: p === 0 ? 0 : StyleSheet.hairlineWidth,

      shadowColor: colors.black,
      shadowOpacity: Platform.OS === "ios" ? 0.12 * p : 0,
      shadowRadius: Platform.OS === "ios" ? 10 : 0,
      shadowOffset: { width: 0, height: 6 },
      elevation: 1 + 5 * p,
    }
  })

  const titleStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [30, 90], [0, 1], Extrapolation.CLAMP)
    const translateY = interpolate(scrollY.value, [30, 90], [6, 0], Extrapolation.CLAMP)

    return {
      opacity,
      transform: [{ translateY }]
    }
  })

  const iconBgStyle = useAnimatedStyle(() => {
    const p = iconBgProgress.value

    return {
      backgroundColor: interpolateColor(
        p,
        [0, 1],
        ["rgba(0,0,0,0.35)", "rgba(0,0,0,0)"]
      ),
    }
  })

  return {
    headerProgress,
    iconBgProgress,
    headerStyle,
    titleStyle,
    iconBgStyle,
  }
}
