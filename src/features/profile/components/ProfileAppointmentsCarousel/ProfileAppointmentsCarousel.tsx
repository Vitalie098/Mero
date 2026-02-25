import { View, FlatList, Text } from "react-native";
import { MOCK } from "../../data/mock/appointments.mock";
import styles from "./styles"
import AppointmentCard from "./components/AppointmentCard";

const ProfileAppointmentsCarousel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ultimele programări</Text>

      <FlatList
        data={MOCK}
        keyExtractor={it => it.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item, index }) => <AppointmentCard item={item} isFirstElement={index === 0}/>}
      />
    </View>
  );
}

export default ProfileAppointmentsCarousel