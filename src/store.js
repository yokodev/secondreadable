import { createStore, applyMiddleware, compose  } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
    categories:{ byId:{}, allIds:[]},
    posts:{ byId:{}, allIds:[] },
    comments:{ byId:{}, allIds:[] },
    ui:{}
}

const store = createStore(
rootReducer, /*initialState,*/
composeEnhancers(
  applyMiddleware(thunk,logger)
))

export default store