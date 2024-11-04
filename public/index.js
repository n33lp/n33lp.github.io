import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';  // Adjust this if your main component has a different name or path
import reportWebVitals from './reportWebVitals';  // Include only if you use web vitals

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you use web vitals, keep this line; otherwise, you can remove it
reportWebVitals();
