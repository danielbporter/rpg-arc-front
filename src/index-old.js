import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import initializeStore from './store';
import RanApp from './components/RanApp';

const store = initializeStore();

render(
  <Provider store={store}>
    <RanApp />
  </Provider>,
  document.getElementById('root')
);
