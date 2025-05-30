import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import {Provider} from 'react-redux';
import user from './store/userStore.jsx'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={user}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);
