import { createStore, applyMiddleware, compose  } from 'redux'
import thunk from 'redux-thunk'
// import logger from 'redux-logger'
import rootReducer from 'containers/App/reducer'
import { routerMiddleware } from 'react-router-redux';


export default function configureStore( history ){

  const routerMiddleWare= routerMiddleware(history)

  const middlewares= [thunk, routerMiddleWare/*, logger*/]
  const enhancers = [applyMiddleware(...middlewares)]

  const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
      : compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(...enhancers)
  );

  return store
}
