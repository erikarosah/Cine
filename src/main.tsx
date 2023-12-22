import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes } from './routes/index.tsx';
import { GlobalStyle } from './styles/Global.tsx';
import { MoviesProvider } from './context/MoviesContext.tsx';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from './components/errorFallback/index.tsx';
import { MenuModal } from './components/menuModal/index.tsx';
import { ModalMenuProvider } from './context/ModalMenuContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <MoviesProvider>
        <ModalMenuProvider>
          <MenuModal />
          <Routes />
        </ModalMenuProvider>
      </MoviesProvider>
      <GlobalStyle />
    </ErrorBoundary>
  </React.StrictMode>,
);
