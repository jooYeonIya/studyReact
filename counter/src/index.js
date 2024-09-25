import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App1 from './App1';

// index.html에 id root인 div 를 가져와서 사용
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App1 />
);


// root
//  |
// app
//  |
// p 와 button 두 개의 객체가 있음