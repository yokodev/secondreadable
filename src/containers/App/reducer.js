import {combineReducers } from "redux";
import categories from '../Categories/reducer'
import posts from '../Posts/reducer'
// import comments from './comments'
import { routerReducer } from 'react-router-redux';


const readable = combineReducers({
  categories,
  posts,
  // comments,
  router: routerReducer
})


export default readable
