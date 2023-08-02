import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store.jsx'

import { provider} from "react-redux"

store.subscribe(() => console.log(store.getState()))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <provider store ={store}>
    <App />
    </provider>
  </React.StrictMode>,
)
