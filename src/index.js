import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter,BrowserRouter } from 'react-router-dom'
import store from './ducks/store'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter

ReactDOM.render(
  
  <React.StrictMode>
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
