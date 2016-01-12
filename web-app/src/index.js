import React from 'react';
import  ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './components/App';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main-app')
);
