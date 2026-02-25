import { View, Text } from "react-native"
import styles from "./styles"

type ErrorProps = {
  message?: string
}

const Error = ({ message }: ErrorProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nu am putut încărca profilul. Încearcă din nou.</Text>

      <Text style={styles.errorMessage}>{String(message ?? "")}</Text>
    </View>
  )
}

export default Error
