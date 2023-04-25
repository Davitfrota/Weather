import { LinearGradient } from "expo-linear-gradient"; 
import { BellSimple, CaretDown, MapPin, Wind } from "phosphor-react-native";
import { ScrollView, StyleSheet, Text, View, TextInput, Button, LogBox } from "react-native";
import React, {useState, useEffect} from "react";
import * as Location from 'expo-location';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome5';

import InfoCard from "../../components/InfoCard";

import Sun from "../../assets/01d.svg";
import SunClouds from "../../assets/02d.svg";
import Clouds from "../../assets/03d.svg";
import CloudsDrizzle from "../../assets/09d.svg";
import CloudsRain from "../../assets/10d.svg";
import Thunderstorm from "../../assets/11d.svg";
import Snow from "../../assets/13d.svg";
import Mist from "../../assets/50d.svg";

export function Home() {
  const [locationCoords, setLocationCoords] = useState(null); 
  const [location, setLocation] = useState(null);
  const [stateWeather, setStateWeather] = useState("");
  const [ThermalSensation,setThermalSensation] = useState(false);
  const [TemperatureSensation,setTemperatureSensation] = useState(null);

  const [locationName, setLocationName] = useState('')
  const [temperatureMin, setTemperatureMin] = useState(0)
  const [temperatureMax, setTemperatureMax] = useState(0)
  const [temperature, setTemperature] = useState(0)
  const [wind,setWind] = useState(null)
  const [humidity, setHumidity] = useState(0)
 
  LogBox.ignoreAllLogs();


  function getData (city){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=845dbcb08a7ded975abb8e13d710b79a`)
    .then(response => response.json())
    .then(function(json) {
      
      const locationName = (json.name);
      const temperatureMin = json.main.temp_min
      const temperatureMax = json.main.temp_max
      const tempNow = json.main.temp
      const Humidity = json.main.humidity
      const windspeed = json.wind.speed
      const state = json.weather[0].main
      const temperatureSensation = json.main.feels_like
      
     
      setLocationName(locationName)
      setHumidity(Humidity)
      setWind(convertMStoKMH(windspeed))
      setStateWeather(state)
      setTemperatureMin(convertKelvinToC(temperatureMin))
      setTemperatureMax(convertKelvinToC(temperatureMax))
      setTemperature(convertKelvinToC(tempNow))
      setTemperatureSensation(convertKelvinToC(temperatureSensation))
     
    })
    .catch(function (error) {
      console.error(error)
    });

};
 
  // async function getLocation(){

  //   let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       alert('Permission to access location was denied');
  //     }else{
  //       let location = await Location.getCurrentPositionAsync({});
  //       setLocationCoords(location.coords);
  //       console.log(location.coords.longitude)
  //     }
  // } to Next Version I will make a week forecast With a Location Coord Smartphone

  function convertKelvinToC(kelvin){
    var result = parseInt(kelvin) - 273
    return result;
  }

  function convertMStoKMH(metersPerSecond) {
    var kilometersPerHour = metersPerSecond * 3.6;
    return kilometersPerHour.toFixed(1);
  }


  useEffect(() => {
    getData(locationName)
    setWind(0)
    setTemperatureSensation(0)
  }, [])

  return (
    <LinearGradient
      colors={["#292A4E", "#715C77", "#C75C2E"]}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TextInput placeholder="Write here your city"  style={styles.headerLeftText} onChangeText={text => setLocationName(text)}></TextInput>
            <Icon.Button backgroundColor="transparent" onPress={() => getData(locationName)} name="cloud" size={30} color="white" />
          </View>
          <BellSimple color="#FFF" size={32} />
        </View>
        <View style={styles.info}>
          {stateWeather == "Clear" ? (<Sun width={200} height={200} />) : null}
          {stateWeather == 'Clouds' ? (<Clouds width={200} height={200} />) : null}
          {stateWeather == 'Rain' ? (<CloudsRain width={200} height={200} />) : null}
          {stateWeather == 'Thunderstorm' ? (<Thunderstorm width={200} height={200} />) : null}
          {stateWeather == 'Snow' ? (<Snow width={200} height={200} />) : null}
          {stateWeather == 'Mist' ? (<Mist width={200} height={200} />) : null}
          <View style={{flexDirection: "row", alignItems:'center', justifyContent:'flex-end'}}>
           
            {
              (ThermalSensation)
              ?
              <Text style={styles.infoTextSensation}>{TemperatureSensation + '°'}</Text>
              :
              <Text style={styles.infoText}>{temperature + '°'}</Text>  
            }
             <Icon1.Button  marginLeft={10} backgroundColor="transparent" onPress={() =>setThermalSensation(!ThermalSensation)} name="wind" size={30} color="white" />
          </View>
          
        </View>
      </View>
      {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
      </ScrollView> */}
      <View style={styles.infoB}>
          <Text style={styles.infoTextB}>Informações adcionais</Text>
          <View style={styles.addtionalInfo}>
            <InfoCard title={'Vento'} variable={wind + ' KM/H'}  ></InfoCard>
            <InfoCard title={'Umidade'} variable={humidity + '%'} ></InfoCard>
            <InfoCard title={'Temp. Min'} variable={temperatureMin + '°C'} ></InfoCard>
            <InfoCard title={'Temp. Max'} variable={temperatureMax + '°C'} ></InfoCard>
          </View>
        </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  content: { alignItems: "center" },
  header: {
    width: "80%",
    marginTop: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    width:'90%',
    justifyContent: "space-between",
    borderBottomWidth: 1,
  },
  headerLeftText: {
    width: '80%',
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  info: {
    paddingVertical: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  infoImg: {
    width: 230,
    height: 230,
  },
  infoText: {
    marginLeft:30,
    fontSize: 100,
    fontWeight: "300",
    color: "#FFF",
  },
  infoTextSensation: {
    marginLeft:30,
    fontSize: 100,
    fontWeight: "300",
    color: "cyan",
  },
  infoTextWeather: {
    fontSize: 20,
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
  infoB: {
    textAlign: "center",         
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 20,
    border: 'solid',
    width: '80%',
    height: 230,
    backgroundColor: '#393e54',
    
  },
  infoTextB: {
    textAlign:'center',
    color: '#e0e0e0',
    margin:15,
    fontSize: 20,
    fontWeight: 'bold',
  },
  addtionalInfo:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})