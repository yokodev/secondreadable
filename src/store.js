import { createStore, applyMiddleware, compose  } from 'redux'
import thunk from 'redux-thunk'
// import logger from 'redux-logger'
import rootReducer from 'containers/App/reducer'
import { routerMiddleware } from 'react-router-redux';


export default function configureStore( history ){

  const routerMiddleWare= routerMiddleware(history)

  const middlewares= [thunk, routerMiddleWare/* , logger */]
  const enhancers = [applyMiddleware(...middlewares)]

  // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // TODO Try to remove when `react-router-redux` is out of beta,
        //LOCATION_CHANGE should not be fired more than once after hot reloading
        // Prevent recomputing reducers for `replaceReducer`
        shouldHotReload: false,
      })
      : compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(...enhancers)
  );

  return store
}
