import { LinearGradient } from "expo-linear-gradient";
import { BellSimple, CaretDown, MapPin } from "phosphor-react-native";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import Sun from "../../assets/01d.svg";
import Sun02d from "../../assets/02d.svg";

export function Home() {
  return (
    <LinearGradient
      colors={["#292A4E", "#715C77", "#C75C2E"]}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <MapPin color="#FFF" size={32} />
            <Text style={styles.headerLeftText}>Fortaleza, CE</Text>
            <CaretDown color="#FFF" size={32} />
          </View>
          <BellSimple color="#FFF" size={32} />
        </View>
        <View style={styles.info}>
          <Sun width={200} height={200} />
          <Text style={styles.infoText}>31°C</Text>
          <Text style={styles.infoTextMaxMin}>Max.: 33º Min.: 28º</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerDetailText}>Previsão dos próximos 7 dias</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.footerDetailsCard}>
            <Text style={styles.footerDetailsCardPerWeek}>Seg.</Text>
            <Sun02d width={40} height={40} />
            <Text style={styles.footerDetailsCardPreview}>19°C</Text>
          </View>

          <View style={styles.footerDetailsCard}>
            <Text style={styles.footerDetailsCardPerWeek}>Seg.</Text>
            <Sun02d width={40} height={40} />
            <Text style={styles.footerDetailsCardPreview}>19°C</Text>
          </View>

          <View style={styles.footerDetailsCard}>
            <Text style={styles.footerDetailsCardPerWeek}>Seg.</Text>
            <Sun02d width={40} height={40} />
            <Text style={styles.footerDetailsCardPreview}>19°C</Text>
          </View>

          <View style={styles.footerDetailsCard}>
            <Text style={styles.footerDetailsCardPerWeek}>Seg.</Text>
            <Sun02d width={40} height={40} />
            <Text style={styles.footerDetailsCardPreview}>19°C</Text>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
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
  headerLeftText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
  info: {
    paddingVertical: 30,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  infoImg: {
    width: 230,
    height: 230,
  },
  infoText: {
    fontSize: 100,
    fontWeight: "300",
    color: "#FFF",
  },
  infoTextMaxMin: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFF",
  },
  footer: {
    gap: 15,
    paddingLeft: 20,
  },
  footerDetailText: {
    textAlign:'center',
    color: "#FFF",
    fontSize: 22,
    fontWeight: "300",
  },
  footerDetailsCard: {
    marginRight: 20,
    width: 99,
    height: 129,
    backgroundColor: "rgba(255, 255, 255, 0.23)",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  footerDetailsCardPerWeek: {
    fontSize: 16,
    fontWeight: "600",
  },
  footerDetailsCardPreview: {
    fontSize: 24,
    fontWeight: "300",
  },
})