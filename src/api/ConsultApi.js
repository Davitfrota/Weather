import axios from 'axios';


export default async function getWeatherWithLatLog(city){

    var result = [];

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=845dbcb08a7ded975abb8e13d710b79a`)
    .then(response => response.json())
    .then(function(json) {
      
      const LocationName = (json.sys.country + ', ' + ' ' + json.name);
      const TemperatureMin = json.main.temp_min
      const TemperatureMax = json.main.temp_max
      

      result = [LocationName, TemperatureMin, TemperatureMax]
     
    })
    .catch(function (error) {
      console.error(error)
    });

    return result
}