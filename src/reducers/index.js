import {combineReducers } from "redux";
import categories from './categories'
import posts from './posts'
import comments from './comments'
import { routerReducer } from 'react-router-redux';


const readable = combineReducers({
  categories,
  posts,
  comments,
  router: routerReducer
})


export default readable
