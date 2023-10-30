import React from 'react';
import ReactDOM from 'react-dom/client';
//! CSS
import "./app.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Example from './Example';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
    <Example />
  </div>
);

