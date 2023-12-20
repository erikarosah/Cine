import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './styles/Global.tsx';
import { Routes } from './routes/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>,
);
