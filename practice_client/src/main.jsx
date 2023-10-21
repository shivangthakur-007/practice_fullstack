import React from 'react'
import ReactDOM from 'react-dom/client'
import {Toaster} from 'react-hot-toast'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import store from '../Redux/Store.js'

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
    <Toaster />
  </BrowserRouter>
  </Provider>
);
