import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import persistState from 'redux-localstorage'
import createLogger from 'redux-logger';

import App from './components/App';
import './index.css';
import reducer from './reducers'

const enhancer = compose(
  applyMiddleware(createLogger()),
  persistState()
)
const store = createStore(reducer, enhancer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
