import { View, Text, Pressable } from 'react-native'
import { CloseIcon } from '@/shared/icons'
import styles from "./styles"
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type ModalHeaderProps = {
  title: string
  onClose: () => void
}

const ScreenModalHeader = ({title, onClose}: ModalHeaderProps) => {
  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.container, { paddingTop: insets.top}]}>
      <View style={[styles.header]}>
        <Text style={styles.headerTitle} numberOfLines={1}>{title}</Text>

        <Pressable style={[styles.button]} onPress={onClose} hitSlop={12}>
          <CloseIcon />
        </Pressable>
      </View>
    </View>
  )
}

export default ScreenModalHeader