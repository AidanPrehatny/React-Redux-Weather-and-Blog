import axios from 'axios';

const API_KEY = 'a9970cc48b5382dbd85c873513e7014f';
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecaast?=appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
};
