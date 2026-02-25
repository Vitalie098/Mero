import React, { useRef } from "react"
import { View, ScrollView, LayoutChangeEvent } from "react-native"
import styles from "./styles"
import SectionTab from "../SectionTab"
import { BrandSectionKey, SECTIONS } from "./utils/sections"

type ProfileSectionTabsProps = {
  active: BrandSectionKey
  onPress: (key: BrandSectionKey) => void
  onHeight: (height: number) => void
}

type TabLayout = { x: number; width: number }

const ProfileSectionTabs = ({ active, onPress, onHeight }: ProfileSectionTabsProps) => {
  const layoutsRef = useRef<Partial<Record<BrandSectionKey, TabLayout>>>({})
  const scrollRef = useRef<ScrollView>(null)
  const containerWidthRef = useRef(0)

  const registerTabLayout = (key: BrandSectionKey, x: number, width: number) => {
    layoutsRef.current[key] = { x, width }
  }

  const onContainerLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout
    containerWidthRef.current = width
    onHeight(height)
  }

  const centerTab = (key: BrandSectionKey) => {
    const layout = layoutsRef.current[key]
    const containerWidth = containerWidthRef.current
    if (!layout || !containerWidth) return

    const targetX = Math.max(0, layout.x + layout.width / 2 - containerWidth / 2)
    scrollRef.current?.scrollTo({ x: targetX, animated: true })
  }

  const handlePress = (key: BrandSectionKey) => {
    centerTab(key) 
    onPress(key)       
  }
  
  return (
    <View style={styles.container} onLayout={onContainerLayout}>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.row}
      >
        {SECTIONS.map((s) => (
          <SectionTab
            key={s}
            section={s}
            isActive={s === active}
            onPress={handlePress}
            onLayoutTab={(x, width) => registerTabLayout(s, x, width)}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default ProfileSectionTabs
