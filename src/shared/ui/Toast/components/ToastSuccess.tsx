import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { BaseToastProps } from "react-native-toast-message";

type ToastSuccessProps = {
  props: BaseToastProps
}

const ToastSuccess = ({props}: ToastSuccessProps) => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.card}>
        <View style={styles.accent} />

        <View style={styles.content}>
          <View style={styles.iconWrap}>
            <Ionicons name="checkmark" size={18} color="#16A34A" />
          </View>

          <View style={styles.textCol}>
            {!!props.text1 && (
              <Text style={styles.title} numberOfLines={1}>
                {props.text1}
              </Text>
            )}
            {!!props.text2 && (
              <Text style={styles.message} numberOfLines={2}>
                {props.text2}
              </Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default ToastSuccess;
