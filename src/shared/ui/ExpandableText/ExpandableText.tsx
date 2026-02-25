import { useCallback, useState } from "react"
import { View, Text, Pressable, LayoutChangeEvent } from "react-native"
import styles from "./styles"
import TextFadeOverlay from "./components/TextFadeOverlay"
import { useFocusEffect } from "expo-router"

type ExpandableTextProps = {
  text: string
  style: any                 
  numberOfLines?: number      
}

const ExpandableText = ({text, style, numberOfLines = 2}: ExpandableTextProps) => {
  const [expanded, setExpanded] = useState(false)
  const [canExpand, setCanExpand] = useState(true)
  const [collapsedH, setCollapsedH] = useState(0)

  const lineHeight = style?.lineHeight as number ?? 19
  const overlayTop = Math.max(0, collapsedH - lineHeight)

  const onCollapsedLayout = (e: LayoutChangeEvent) => setCollapsedH(e.nativeEvent.layout.height)

  const onMeasureFullText =  (e: any) => {
    const lines = e?.nativeEvent?.lines?.length ?? 0
    setCanExpand(lines > numberOfLines)
  }

  useFocusEffect(
    useCallback(() => {
      return () => {
        setExpanded(false)
      }
    }, [])
  )
  
  return (
    <View style={styles.container}>
      <Text style={[styles.measureText, style]} onTextLayout={onMeasureFullText}>
        {text}
      </Text>

      {!expanded ? (
        <View onLayout={onCollapsedLayout}>
          <Text style={style} numberOfLines={numberOfLines}>{text}</Text>
        </View>
      ) : (
        <Text style={style}>{text}</Text>
      )}

      {!expanded && canExpand && <TextFadeOverlay overlayTop={overlayTop} lineHeight={lineHeight} setExpanded={setExpanded}/>}

      {expanded && canExpand && (
        <Pressable onPress={() => setExpanded(false)} hitSlop={8}>
          <Text style={styles.less}>mai puțin</Text>
        </Pressable>
      )}
    </View>
  )
}

export default ExpandableText