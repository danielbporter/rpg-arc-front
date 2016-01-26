import React from 'react';
import  ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';
//import {Router, Route, Link} from 'react-router'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './components/App';
//import Login from './components/auth/Login'
//import Registration from './components/auth/Registration'

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main-app')
);
