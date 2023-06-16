import './libs/dayjs';
import './styles/global.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
)