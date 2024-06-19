import './index.css';

import React from 'react';

import ReactDOM from 'react-dom/client';

import App from '@/App';
import { GameContextProvider } from '@/context/game-context/GameContext';
import { MenuContextProvider } from '@/context/menu-context/MenuContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MenuContextProvider>
      <GameContextProvider>
        <App />
      </GameContextProvider>
    </MenuContextProvider>
  </React.StrictMode>
);
