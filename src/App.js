import React from 'react';
import Routes from './routes';
import PurchasedProvider from './context/Purchased';
import ModalProvider from './context/Modal';
import SearchProvider from './context/Search';
import './global.css';

function App() {
  return (
    <SearchProvider>
      <ModalProvider>
        <PurchasedProvider>
          <Routes />
        </PurchasedProvider>
      </ModalProvider>
    </SearchProvider>

  );
}

export default App;
