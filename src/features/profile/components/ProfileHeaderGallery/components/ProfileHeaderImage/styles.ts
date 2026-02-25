import { Dimensions, StyleSheet } from "react-native"

const { width } = Dimensions.get("window")

const styles = StyleSheet.create({
  image: {
    width,
    height: 250
  }
})

export default styles
