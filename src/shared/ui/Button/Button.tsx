import {Pressable, Text} from "react-native"
import styles from "./styles"

type ButtonProps = {
  label: string
  onPress: () => void
}

const Button = ({label, onPress}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  )
}

export default Button
