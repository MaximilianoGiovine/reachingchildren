import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import siteFavicon from './assets/Jim & Ester Mazurek 2020.jpeg'

const faviconLink = document.querySelector("link[rel~='icon']") || document.createElement('link')

faviconLink.rel = 'icon'
faviconLink.type = 'image/jpeg'
faviconLink.href = siteFavicon

if (!faviconLink.parentNode) {
  document.head.appendChild(faviconLink)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
