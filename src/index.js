import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ContextShare from './Context/ContextShare';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextShare>
      <BrowserRouter>
        <App />
        <ToastContainer autoClose={3000}/>
      </BrowserRouter>
    </ContextShare>
  </React.StrictMode>
);
