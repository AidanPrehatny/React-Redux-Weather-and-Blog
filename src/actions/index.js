import axios from 'axios';

const WEATHER_API_KEY = 'a9970cc48b5382dbd85c873513e7014f';
const WEATHER_ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&APPID=${WEATHER_API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

const BLOG_API_KEY = '?key=asdf';
const BLOG_ROOT_URL = 'http://reduxblog.herokuapp.com/api';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

export const LAT_LON = 'LAT_LON';

export function fetchWeather(city) {
  const url = `${WEATHER_ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}

export function fetchPosts() {
  const request = axios.get(`${BLOG_ROOT_URL}/posts${BLOG_API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request,
  };
}

export function createPost(props) {
  const request = axios.post(`${BLOG_ROOT_URL}/posts${BLOG_API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request,
  };
}

export function fetchPost(id) {
  const request = axios.get(`${BLOG_ROOT_URL}/posts/${id}${BLOG_API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request,
  };
}

export function deletePost(id) {
  const request = axios.delete(`${BLOG_ROOT_URL}/posts/${id}${BLOG_API_KEY}`);

  return {
    type: DELETE_POST,
    payload: request,
  };
}
