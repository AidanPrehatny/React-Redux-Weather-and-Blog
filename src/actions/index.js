import axios from 'axios';

const WEATHER_API_KEY = 'a9970cc48b5382dbd85c873513e7014f';
const WEATHER_ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?&APPID=${WEATHER_API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER';

const BLOG_API_KEY = '?key=prehat7'
const BLOG_ROOT_URL = 'http://reduxblog.herokuapp.com/api'
export const FETCH_POSTS = 'FETCH_POSTS'


export function fetchWeather(city) {
  const url = `${WEATHER_ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
};

export function fetchPosts() {
  const request = axios.get(`${BLOG_ROOT_URL}/posts${BLOG_API_KEY}`)

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
