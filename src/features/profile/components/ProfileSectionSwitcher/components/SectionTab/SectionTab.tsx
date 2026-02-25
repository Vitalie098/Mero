import { Text, Pressable, LayoutChangeEvent } from 'react-native'
import { BrandSectionKey } from '../ProfileSectionTabs/utils/sections'
import styles from "./styles"

type SectionTabProps = {
  section: BrandSectionKey
  isActive: boolean
  onPress: (key: BrandSectionKey) => void
  onLayoutTab: (x: number, width: number) => void
}

const SectionTab = ({section, isActive, onLayoutTab, onPress}: SectionTabProps) => {
  const handleLayout =  (e: LayoutChangeEvent) => {
    const { x, width } = e.nativeEvent.layout
    onLayoutTab(x, width)
  }

  return (
    <Pressable onLayout={handleLayout} onPress={() => onPress(section)} style={[styles.tab, isActive && styles.tabActive]}>
      <Text style={[styles.tabText, isActive && styles.tabTextActive]}>{section}</Text>
    </Pressable>
  )
}

export default SectionTab