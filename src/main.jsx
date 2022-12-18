import React from 'react'
import ReactDOM from 'react-dom/client'
import AOS from 'aos'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import App from './App'
import './index.css'
AOS.init()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
)
