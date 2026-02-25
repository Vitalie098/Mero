import React from "react";
import { View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Routes } from "@/shared/constants/routes";
import Button from "@/shared/ui/Button";

const IndexScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.center}>
      <Button label="Open Brand" onPress={() => router.push(Routes.profileHome("one-barbershop"))} />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default IndexScreen