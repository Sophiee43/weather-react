import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <h1>Weather Search Engine</h1>
      <App />
      <h2 id="show-weather"></h2>
    </div>
  </React.StrictMode>
);
