import { createStore, applyMiddleware, compose  } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from 'containers/App/reducer'
// import immutableStateMiddleware  from 'redux-immutable-state-invariant.default()'
import { routerMiddleware } from 'react-router-redux';
// const immutableStateMiddleware = require('redux-immutable-state-invariant').default()


export default function configureStore( history ){

  const routerMiddleWare= routerMiddleware(history)

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer/*initialState,*/,
    composeEnhancers(applyMiddleware(thunk, routerMiddleWare, logger))
  );

  return store
}
