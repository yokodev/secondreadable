import {combineReducers } from "redux";
import categories from './categories'
import posts from './posts'
import comments from './comments'


const readable = combineReducers({
  categories,
  posts,
  comments,
})


export default readable
