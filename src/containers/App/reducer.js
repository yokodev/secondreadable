import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import categories from '../Categories/reducer'
import posts from '../Posts/reducer'
import postDetail from '../Post/Detail/reducer'
import comments from '../Comments/reducer'

const readable = combineReducers({
  categories,
  posts,
  postDetail,
  comments,
  router: routerReducer
})

export default readable
