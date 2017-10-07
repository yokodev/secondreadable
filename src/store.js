import { createStore, applyMiddleware, compose, combineReducers  } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers'

import { routerMiddleware } from 'react-router-redux';





export default function configureStore( history ){

  
  const routerMiddleWare= routerMiddleware(history)
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = createStore(
    rootReducer/*initialState,*/,
    composeEnhancers(applyMiddleware(thunk, logger, routerMiddleWare))
  );
  
  
  return store
}

// const initialState = {
  //     categories:{ byId:{}, allIds:[]},
  //     posts:{ byId:{}, allIds:[] },
  //     comments:{ byId:{}, allIds:[] },
  //     ui:{}
  // }
  