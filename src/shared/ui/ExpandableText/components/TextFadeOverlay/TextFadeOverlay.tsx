import { View, Text, Pressable } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import styles from "./styles"

type TextFadeOverlayProps= {
  overlayTop: number
  lineHeight: number
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>
}

const TextFadeOverlay = ({overlayTop, lineHeight, setExpanded}: TextFadeOverlayProps) => {
  return (
    <View pointerEvents="box-none" style={[styles.overlay, { top: overlayTop }]}>
      <LinearGradient
        pointerEvents="none"
        colors={[
          "rgba(255,255,255,0.2)",
          "rgba(255,255,255,0.6)",
          "rgba(255,255,255,1)",
        ]}
        locations={[0, 0.1, 0.37]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.fade, { height: lineHeight }]}
      />

      <Pressable style={styles.moreBtn} onPress={() => setExpanded(true)} hitSlop={8}>
        <Text style={styles.more}>mai mult</Text>
      </Pressable>
    </View>
  )
}

export default TextFadeOverlay
