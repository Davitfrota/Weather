import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import {MapPin, CaretDown, BellRinging } from "phosphor-react-native"

export function Home() {
  return(
   <LinearGradient 
      colors={["#292A4E", "#715C77", "#C75C2E"]}
      style={styles.container}
 >

        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <MapPin color="fff" size={32} />
              <Text>Fortaleza</Text>
              <CaretDown color="fff" size={32} />
            </View>
            <BellRinging color="fff" size={32} />
          </View>
        </View>
  </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  content: { paddingHorizontal: 40 },
  header: {
    width: "100%",
    marginTop: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
});
