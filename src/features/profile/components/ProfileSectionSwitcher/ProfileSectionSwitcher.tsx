import { useState } from "react"
import { View } from "react-native"
import ProfileSectionTabs from "./components/ProfileSectionTabs"
import ReviewsPreviewSection from "./components/ReviewsPreviewSection"
import DefaultSectionDesign from "./components/DefaultSectionDesign"
import { BrandSectionKey } from "./components/ProfileSectionTabs/utils/sections"

type BrandSectionSwitcherProps = {
  slug: string
  onTabsHeight: (height: number) => void
  onContentTopLayout: (y: number) => void
  onRequestScrollToContentTop: () => void
}

const ProfileSectionSwitcher = ({slug, onTabsHeight, onContentTopLayout, onRequestScrollToContentTop}: BrandSectionSwitcherProps) =>  {
  const [activeSection, setActiveSection] = useState<BrandSectionKey>("Recenzii")

  const handlePress = (key: BrandSectionKey) => {
    setActiveSection(key)
    requestAnimationFrame(() => onRequestScrollToContentTop())
  }

  return (
    <>
      <ProfileSectionTabs active={activeSection} onPress={handlePress} onHeight={onTabsHeight} />

      <View onLayout={(e) => onContentTopLayout(e.nativeEvent.layout.y)}>
        {activeSection === "Recenzii" && <ReviewsPreviewSection slug={slug}/>}
        {activeSection === "Servicii" && <DefaultSectionDesign title="Servicii"/>}
        {activeSection === "Specialisti" && <DefaultSectionDesign title="Specialisti"/>}
        {activeSection === "Produse" && <DefaultSectionDesign title="Produse"/>}
        {activeSection === "Contact" && <DefaultSectionDesign title="Contact"/>}
      </View>
    </>
  )
}

export default ProfileSectionSwitcher