import { View } from "react-native";
import Animated, { SharedValue, useAnimatedStyle } from "react-native-reanimated";
import styles from "./styles"

type CrossfadeIconProps = {
  progress: SharedValue<number>;
  light: React.ReactNode;
  dark: React.ReactNode; 
};

const CrossfadeIcon = ({progress, light, dark}: CrossfadeIconProps) => {
  const lightStyle = useAnimatedStyle(() => ({ opacity: 1 - progress.value }));
  const darkStyle = useAnimatedStyle(() => ({ opacity: progress.value}));

  return (
    <View>
      <Animated.View style={[styles.iconLayer, lightStyle]}>{light}</Animated.View>
      <Animated.View style={[styles.iconLayer, darkStyle]}>{dark}</Animated.View>
    </View>
  );
};

export default CrossfadeIcon
