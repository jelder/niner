import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App';
import './index.css';

import {TextReducer} from './reducers'

let store = createStore(TextReducer, {
  text: "Make yourself understood!\n\nTranslate any text to the NATO Phonetic Alphabet.\n\n202-456-1111\n\n90.9 FM",
  pronunciation: false,
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
