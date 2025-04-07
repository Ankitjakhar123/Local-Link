import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'; // ✅ fixed typo here
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
