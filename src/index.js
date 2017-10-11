import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import configureStore from './store'
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux'


const history = createHistory()

const store = configureStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
