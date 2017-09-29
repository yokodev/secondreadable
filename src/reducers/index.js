import {combineReducers } from "redux";
import categories from './categories'
import posts from './posts'
import comments from './comments'
import app from './app'


const readable = combineReducers({
  categories,
  posts,
  comments,
  app,
})


export default readable
