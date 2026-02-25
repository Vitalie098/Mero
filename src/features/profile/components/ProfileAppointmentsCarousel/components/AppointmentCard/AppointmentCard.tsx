import { Text, View } from "react-native"
import styles from "./styles"
import AppointmentStatus from "../AppointmentStatus"
import { Appointment } from "@/features/profile/models/Appointment"

type AppointmentCardProps = {
  item: Appointment
  isFirstElement: boolean
}

const AppointmentCard = ({item, isFirstElement}: AppointmentCardProps) => {
  return (
    <View style={[styles.card, isFirstElement && styles.ml]}>
      <AppointmentStatus status={item.status} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.dataLabel}>{item.dateLabel}</Text>
    </View>
  )
}

export default AppointmentCard