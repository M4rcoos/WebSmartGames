import React from 'react';
import { Games } from './components/Games/Game';
import { Header } from './components/Header/Header';
import { GlobalStorage } from './context/GlobalContext';

function App() {
  return (
    <div>
      <GlobalStorage>
        <Header />
        <Games />
      </GlobalStorage>
    </div>
  );
}

export default App;
