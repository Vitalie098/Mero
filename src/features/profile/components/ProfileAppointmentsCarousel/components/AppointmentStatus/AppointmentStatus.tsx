import { Text, View } from "react-native";
import styles from "./styles"
import { Appointment } from "@/features/profile/models/Appointment";

type AppointmentStatusProps = {
  status: Appointment["status"]
}

const AppointmentStatus = ({ status }: AppointmentStatusProps) => {
  const isConfirmed = status === "CONFIRMAT";

  return (
    <View style={[styles.container, isConfirmed ? styles.confirmed : styles.done]}>
      <Text style={[styles.text, isConfirmed ? styles.textConfirmed : styles.textDone]}>
        {status}
      </Text>
    </View>
  );  
}

export default AppointmentStatus