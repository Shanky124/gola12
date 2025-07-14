import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Shopcprovider from './cont/shopc.jsx'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
   <Shopcprovider>
    <App />
   </Shopcprovider>
  

 // </StrictMode>,
)
