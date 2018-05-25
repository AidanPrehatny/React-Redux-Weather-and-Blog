import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  posts: PostsReducer
});

export default rootReducer;
