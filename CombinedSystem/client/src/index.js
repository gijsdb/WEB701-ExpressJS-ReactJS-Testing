import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import {Provider} from 'react-redux'

import allReducers from './Reducers/index'

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = { 
  authReducer: [
    {
      token: null,
      user: null,
      isUserLoggedIn: false
    }
  ] 
};


const store = createStore(
  allReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
