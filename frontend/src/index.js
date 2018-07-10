import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Reducers';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, reduxDevTools);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);