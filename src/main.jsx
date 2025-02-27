import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from "react-toastify";
import './index.css'
import App from './App.jsx'
import database from "../DataBase/Firebase.config.js"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer/>
    <App />
  </StrictMode>,
)
