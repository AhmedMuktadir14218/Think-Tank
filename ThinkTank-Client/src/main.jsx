// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './Redux/store.js'
import { Provider } from 'react-redux'
import ThemeProvider from './Component/ThemeProvider.jsx'
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider> 
      <App />
    </ThemeProvider>
  
</Provider>,
)


