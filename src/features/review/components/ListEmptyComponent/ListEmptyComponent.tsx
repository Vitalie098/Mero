import { View, Text } from "react-native";
import styles from "./styles"

const ListEmptyComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Încă nu sunt recenzii.</Text>
    </View>
  );
};

export default ListEmptyComponent;
