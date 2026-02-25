import { View, Text } from "react-native";
import styles from "./styles"

type DefaultSectionDesignProps = {
  title: string
}

const DefaultSectionDesign = ({title}: DefaultSectionDesignProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );
};

export default DefaultSectionDesign;
