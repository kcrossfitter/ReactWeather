import axios from 'axios';

const API_KEY = '70cb6b62204135b83b5c087e5f747a5d';
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + API_KEY;

var getTemp = (location) => {
  var encodedLocation = encodeURIComponent(location);
  var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

  return axios.get(requestUrl).then((res) => {
    if (res.data.cod && res.data.message) {
      throw new Error(res.data.message);
    } else {
      return res.data.main.temp;
    }
  }).catch((res) => {
    throw new Error(res.data.message);
  });

}

export default { getTemp };
