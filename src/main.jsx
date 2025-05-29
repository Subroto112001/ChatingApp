import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from "react-toastify";
import './index.css'
import App from './App.jsx'
import database from "../DataBase/Firebase.config.js"
import { Provider } from 'react-redux';
import { store } from './features/store.js';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer />
   
      <Provider store={store}>
        <App />
      </Provider>

  </StrictMode>
);
